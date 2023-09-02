const BaseController = require("./baseController");

class ContractsController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Add Contract
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
}

module.exports = ContractsController;
