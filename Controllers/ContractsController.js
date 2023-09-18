const BaseController = require("./baseController");
const axios = require("axios");
const sequelize = require("sequelize");
const { Op } = require("sequelize");

class ContractsController extends BaseController {
  constructor(model, creatorModel, paymentModel, categoryModel, postModel) {
    super(model);
    this.creatorModel = creatorModel;
    this.paymentModel = paymentModel;
    this.categoryModel = categoryModel;
    this.postModel = postModel;
  }

  //////////////////////
  // Get All Contracts//
  //////////////////////
  async getAllContracts(req, res) {
    try {
      const output = await this.model.findAll({
        attributes: {
          exclude: [
            "creatorId",
            "creator_id",
            "created_at",
            "updated_at",
            "createdAt",
            "updatedAt",
          ],
        },
        include: [
          {
            model: this.creatorModel, // creator
            required: true,
            attributes: ["name", "tiktok_handle", "email"], // add column to retrieve here
          },
          {
            model: this.categoryModel,
            // required: true, // to uncomment when seeder is created
            attributes: ["name"],
            through: { attributes: [] },
          },
          {
            model: this.paymentModel, // creator
            attributes: [
              "id",
              "payment_date",
              "translated_amount",
              "payee_currency",
            ], // add column to retrieve here
          },
          {
            model: this.postModel, // post
            attributes: ["id"],
          },
        ],
        order: [["end_date", "DESC"]],
      });
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  ////////////////////////////////////
  // Get contracts pending approvals//
  ////////////////////////////////////
  async getCreatorContracts(req, res) {
    const { contractStatusFilter, email } = req.params;

    try {
      // get creator id
      const creator = await this.creatorModel.findAll({
        attributes: ["id", "name"],
        where: {
          email: email,
        },
      });

      let queryWhereFilter = {};
      if (contractStatusFilter === "in-progress") {
        queryWhereFilter = {
          creatorId: creator[0].id,
          contract_status: "In Progress",
        };
      } else {
        queryWhereFilter = {
          creatorId: creator[0].id,
          contract_status: {
            [Op.not]: "In Progress",
          }, //"In Progress",
        };
      }

      // get contracts related to retrieved creator id
      const contracts = await this.model.findAll({
        attributes: { exclude: ["creator_id"] },
        include: [
          {
            model: this.creatorModel, // creator
            required: true,
            attributes: ["name", "tiktok_handle", "email"], // add column to retrieve here
          },
          {
            model: this.postModel, // post
            attributes: ["id"],
          },
          {
            model: this.categoryModel,
            // required: true, // to uncomment when seeder is created
            attributes: ["name"],
            through: { attributes: [] },
          },
          {
            model: this.paymentModel, // creator
            attributes: [
              "id",
              "payment_date",
              "translated_amount",
              "payee_currency",
            ], // add column to retrieve here
          },
          {
            model: this.postModel, // post
            attributes: ["id"],
          },
        ],
        where: queryWhereFilter,
        order: [["end_date", "DESC"]], // to show contracts that are ending soon
      });

      return res.json(contracts);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //////////////////////////////////////
  // Get contracts for specfic creator//
  //////////////////////////////////////
  async getContractsPendingApproval(req, res) {
    try {
      const output = await this.model.findAll({
        include: [
          {
            model: this.creatorModel,
            required: true,
            attributes: ["name"],
          },
          {
            model: this.categoryModel,
            // required: true, // to uncomment when seeder is created
            attributes: ["name"],
            through: { attributes: [] },
          },
          {
            model: this.postModel, // post
            attributes: ["id"],
          },
        ],
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

  /////////////////
  // Add contract//
  /////////////////
  async addContract(req, res) {
    const {
      description,
      amountSgd,
      startDate,
      endDate,
      noOfPostRequired,
      creatorId,
      selectedCategoryIds,
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

      // Retrieve selected categories
      const selectedCategories = await this.categoryModel.findAll({
        where: {
          id: selectedCategoryIds,
        },
      });

      // Associate new contract with selected categories
      await contract.setCategories(selectedCategories);

      return res.json(contract);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  /////////////////////
  // Approve contract//
  /////////////////////
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

  //////////////////////////////////////////////////////////
  // Automated Batch Payment for approved contracts (Cron)//
  //////////////////////////////////////////////////////////

  // Pay approved contracts
  async payApprovedContracts(req, res) {
    try {
      // Get approved contracts
      const approvedContracts = await this.model.findAll({
        attributes: ["id", "description", "amount_sgd"],
        include: {
          model: this.creatorModel,
          required: true,
          attributes: [
            "bank_account_number", // "473984756193",
            "bank_identifer_code", // "UBPHPHMM",
            "bank_name", // "UNION BANK OF THE PHILIPPINES",
            "residence_country", // "Philippines",
            "address", // "Tondo, Manila, Metro Manila, Philippines"
          ],
        },
        where: {
          contract_status: "Approved",
        },
      });

      if (approvedContracts.length === 0) return res.json(0);

      let accessToken = process.env.API_ACCESSTOKEN;

      const makePayment = async (
        contractId,
        TransactionAmt,
        PaymentDescription,
        ThirdPartyAccountNo,
        ThirdPartyBankBICCode
      ) => {
        const res = await axios.post(
          `https://api.ocbc.com:8243/transactional/fastpayment/1.0/fastTransaction`,
          {
            TransactionType: "P",
            CustomerAccountNo: "91239321",
            TransactionAmt,
            PurposeCode: "SAL",
            PaymentReferenceNo: `PAY${contractId}`,
            PaymentDescription: `Payment for ${PaymentDescription}`,
            ThirdPartyAccountNo,
            ThirdPartyBankBICCode,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        return res.data;
      };

      // post req to ocbi api and create payment data
      const paymentsData = await Promise.all(
        approvedContracts.map(async (contract) => {
          // console.log(contract.dataValues);

          // post req to ocbi api
          const res = await makePayment(
            contract.dataValues.id,
            contract.dataValues.amount_sgd,
            contract.dataValues.description,
            contract.dataValues.creator.bank_account_number,
            contract.dataValues.creator.bank_identifer_code
          );

          let currency = "";
          let fxRate = 1;
          switch (contract.dataValues.creator.residence_country) {
            case "Singapore":
              currency = "SGD";
              break;
            case "Malaysia":
              currency = "MYR";
              fxRate = 3.42;
              break;
            case "Philippines":
              currency = "PHP";
              fxRate = 41.74;
              break;
            default:
          }

          const paymentData = {
            reference_no: `PAY${contract.dataValues.id}`,
            bank_reference_no: `${contract.dataValues.creator.bank_identifer_code}${contract.dataValues.id}`,
            payment_date: new Date(),
            description: `Payment for ${contract.dataValues.description}`,
            status: res.Success ? "Success" : "Fail",
            payee_currency: currency,
            fx_rate: fxRate,
            translated_amount: contract.dataValues.amount_sgd * fxRate,
            contract_id: contract.dataValues.id,
          };

          return paymentData;
        })
      );

      // insert payment data into model
      const payments = await this.paymentModel.bulkCreate(paymentsData);

      // get successful contract ids
      const successContractIds = payments
        .map((payment) => {
          if (payment.status === "Success") return payment.contractId;
        })
        .filter((id) => id > 0); // to filter out undefined values

      // update contract status
      await this.model.update(
        { contract_status: "Paid" },
        {
          where: {
            id: successContractIds,
          },
        }
      );

      // console.log(ocbcPaymentResponse);
      // console.log(successContractIds);
      return res.json("Success");

      // return res.send("Success");
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  /////////////////////////
  // Get Data for charts///
  /////////////////////////

  // get monthly contact and payment amount for current year
  async getMthlyContractPaymentAmt(req, res) {
    const { fiscalYear } = req.params;

    try {
      const mthlyContactAmt = await this.model.findAll({
        attributes:
          // {
          //   include:
          [
            [
              // month
              sequelize.fn("date_part", "month", sequelize.col("start_date")),
              "month",
            ],
            // sum of amount
            [
              sequelize.fn("sum", sequelize.col("amount_sgd")),
              "sumContractAmount",
            ],
          ],
        // },
        where: sequelize.where(
          sequelize.fn("date_part", "year", sequelize.col("start_date")),
          fiscalYear
        ),
        group: [
          [
            sequelize.fn("date_part", "month", sequelize.col("start_date")),
            "month",
          ],
        ],
      });

      const mthlyPaymentAmt = await this.paymentModel.findAll({
        attributes: [
          [
            // month
            sequelize.fn("date_part", "month", sequelize.col("payment_date")),
            "month",
          ],
          // sum of contract amount (sgd)
          [
            sequelize.fn("sum", sequelize.col("contract.amount_sgd")),
            "sumPaymentAmount",
          ],
        ],
        include: [
          {
            model: this.model,
            required: true,
            attributes: [],
            // as: "contracts",
          },
        ],
        where: sequelize.where(
          sequelize.fn("date_part", "year", sequelize.col("payment_date")),
          fiscalYear
        ),
        group: [
          // "contract.id",
          [
            sequelize.fn("date_part", "month", sequelize.col("payment_date")),
            "month",
          ],
        ],
      });

      const con = mthlyContactAmt.map((contract) => contract.dataValues);
      const pay = mthlyPaymentAmt.map((contract) => contract.dataValues);

      const outputData = [];

      for (let i = 0; i < 12; i++) {
        // stop loop if month has no data
        if (!con[i] && !pay[i]) break;

        const row = { ...con[i], ...pay[i] };
        switch (row.month) {
          case 1:
            row.month = "Jan";
            break;
          case 2:
            row.month = "Feb";
            break;
          case 3:
            row.month = "Mar";
            break;
          case 4:
            row.month = "Apr";
            break;
          case 5:
            row.month = "May";
            break;
          case 6:
            row.month = "Jun";
            break;
          case 7:
            row.month = "Jul";
            break;
          case 8:
            row.month = "Aug";
            break;
          case 9:
            row.month = "Sep";
            break;
          case 10:
            row.month = "Oct";
            break;
          case 11:
            row.month = "Nov";
            break;
          case 12:
            row.month = "Dec";
            break;
          default:
        }
        outputData.push(row);
      }

      return res.json(outputData);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // get monthly contact and payment amount for current year (Creator)
  async getMthlyCreatorContractPaymentAmt(req, res) {
    const { fiscalYear, email } = req.params;

    try {
      // get creator id
      const creator = await this.creatorModel.findAll({
        attributes: ["id"],
        where: {
          email: email,
        },
      });

      const creatorId = creator[0].dataValues.id;

      const mthlyContactAmt = await this.model.findAll({
        attributes: [
          [
            // month
            sequelize.fn("date_part", "month", sequelize.col("start_date")),
            "month",
          ],
          // sum of amount
          [
            sequelize.fn("sum", sequelize.col("amount_sgd")),
            "sumContractAmount",
          ],
        ],
        // },
        where: {
          creator_id: creatorId,
          $and: sequelize.where(
            sequelize.fn("date_part", "year", sequelize.col("start_date")),
            fiscalYear
          ),
        },
        group: [
          [
            sequelize.fn("date_part", "month", sequelize.col("start_date")),
            "month",
          ],
        ],
      });

      const mthlyPaymentAmt = await this.paymentModel.findAll({
        attributes: [
          [
            // month
            sequelize.fn("date_part", "month", sequelize.col("payment_date")),
            "month",
          ],
          // sum of contract amount (sgd)
          [
            sequelize.fn("sum", sequelize.col("contract.amount_sgd")),
            "sumPaymentAmount",
          ],
        ],
        include: [
          {
            model: this.model,
            required: true,
            attributes: [],
            // as: "contracts",
            include: {
              model: this.creatorModel,
              required: true,
              attributes: [],
              where: { id: creatorId },
            },
          },
        ],
        where: sequelize.where(
          sequelize.fn("date_part", "year", sequelize.col("payment_date")),
          fiscalYear
        ),
        group: [
          // "contract.id",
          [
            sequelize.fn("date_part", "month", sequelize.col("payment_date")),
            "month",
          ],
        ],
      });

      const con = mthlyContactAmt.map((contract) => contract.dataValues);
      const pay = mthlyPaymentAmt.map((contract) => contract.dataValues);

      const outputData = [];

      for (let i = 0; i < 12; i++) {
        // stop loop if month has no data
        if (!con[i] && !pay[i]) break;

        const row = { ...con[i], ...pay[i] };
        switch (row.month) {
          case 1:
            row.month = "Jan";
            break;
          case 2:
            row.month = "Feb";
            break;
          case 3:
            row.month = "Mar";
            break;
          case 4:
            row.month = "Apr";
            break;
          case 5:
            row.month = "May";
            break;
          case 6:
            row.month = "Jun";
            break;
          case 7:
            row.month = "Jul";
            break;
          case 8:
            row.month = "Aug";
            break;
          case 9:
            row.month = "Sep";
            break;
          case 10:
            row.month = "Oct";
            break;
          case 11:
            row.month = "Nov";
            break;
          case 12:
            row.month = "Dec";
            break;
          default:
        }
        outputData.push(row);
      }

      return res.json(outputData);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = ContractsController;
