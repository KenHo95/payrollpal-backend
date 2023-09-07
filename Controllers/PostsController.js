const BaseController = require("./baseController");

class PostsController extends BaseController {
  constructor(model, contractModel) {
    super(model);
    this.contractModel = contractModel;
  }
  //Add post link for a contract
  async addPostLink(req, res) {
    const { postDate, description, postLink, selectedContract } = req.body;
    try {
      // add post link for contract
      const post = await this.model.create({
        date: postDate,
        description: description,
        post_url: postLink,
        contract_id: selectedContract,
      });

      // get number of post for contract
      const numPost = await this.model.findAll({
        attributes: ["id"],
        where: {
          contract_id: selectedContract,
        },
      });

      let resMessage = "Post Link Submitted";

      if (numPost.length === 2) {
        await this.contractModel.update(
          {
            contract_status: "Pending Approval",
          },
          { where: { id: selectedContract } }
        );

        resMessage = "Post Link Submitted, Post Pending Approval";
      }

      return res.send(resMessage);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = PostsController;
