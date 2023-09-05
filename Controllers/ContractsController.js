const BaseController = require("./baseController");

class ContractsController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Get contracts pending approvals
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
