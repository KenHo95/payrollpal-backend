const BaseController = require("./baseController");

class CreatorsController extends BaseController {
  constructor(model) {
    super(model);
  }
  // Get creator name and tiktok handle
  async getCreatorNameAndTiktokHandle(req, res) {
    try {
      const output = await this.model.findAll({
        attributes: ["id", "name", "tiktok_handle"],
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Add Creator
  async addCreator(req, res) {
    const {
      name,
      tiktokHandle,
      email,
      address,
      bankAccountNum,
      bankIdentifierCode,
      bankName,
      residenceCountry,
    } = req.body;

    try {
      const creator = await this.model.create({
        name: name,
        tiktok_handle: tiktokHandle,
        email: email,
        address: address,
        bank_account_number: bankAccountNum,
        bank_identifer_code: bankIdentifierCode,
        bank_name: bankName,
        residence_country: residenceCountry,
      });

      return res.json(creator);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = CreatorsController;
