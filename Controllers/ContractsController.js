const BaseController = require("./baseController");

class ContractsController extends BaseController {
  constructor(model, creatorModel) {
    super(model);
    this.creatorModel = creatorModel;
  }

  // Get contracts pending approvals
  async getCreatorContracts(req, res) {
    const { email } = req.params;

    try {
      // get creator id
      const creator = await this.creatorModel.findAll({
        attributes: ["id", "name"],
        where: {
          email: email,
        },
      });

      // get contracts related to retrieved creator id
      const contracts = await this.model.findAll({
        attributes: { exclude: ["creator_id"] },
        where: {
          creatorId: creator[0].id,
          contract_status: "In Progress", // contracts that do not have all post yet
        },
        order: [["end_date"]], // to show contracts that are ending soon
      });

      return res.json(contracts);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Get contracts for specfic creator
  async getContractsPendingApproval(req, res) {
    try {
      const output = await this.model.findAll({
        where: {
          contract_status: "Pending Approval",
        },
      });
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Add contract
  async addContract(req, res) {
    const {
      description,
      amountSgd,
      startDate,
      endDate,
      noOfPostRequired,
      creatorId,
    } = req.body;

    try {
      const contract = await this.model.create({
        description: description,
        amount_sgd: amountSgd,
        contract_status: "In Progress",
        start_date: startDate,
        end_date: endDate,
        no_of_post_required: noOfPostRequired,
        creator_id: creatorId,
      });

      return res.json(contract);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Approve contract
  async approveContract(req, res) {
    const { id } = req.body;
    try {
      await this.model.update(
        {
          contract_status: "Approved",
        },
        { where: { id: id } }
      );
      return res.send("Success");
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = ContractsController;
