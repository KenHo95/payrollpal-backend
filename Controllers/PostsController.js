const BaseController = require("./baseController");

class PostsController extends BaseController {
  constructor(model, contractModel) {
    super(model);
    this.contractModel = contractModel;
  }
  // Get posts for specfic contract
  async getPostsPreview(req, res) {
    const { selectedContract } = req.params;
    try {
      const postURL = await this.model.findAll({
        attributes: ["post_url", "description"],

        where: {
          contract_id: selectedContract,
        },
      });
      return res.json(postURL);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
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

      // get number of creator post for contract
      const numPost = await this.model.findAll({
        attributes: ["id"],
        where: {
          contract_id: selectedContract,
        },
      });

      // get number of required post for contract
      const numRequiredPost = await this.contractModel.findAll({
        attributes: ["no_of_post_required"],
        where: {
          id: selectedContract,
        },
      });

      let resMessage = "Post Link Submitted";

      if (
        numPost.length === numRequiredPost[0].dataValues.no_of_post_required
      ) {
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
