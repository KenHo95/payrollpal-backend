const BaseController = require("./baseController");
const sequelize = require("sequelize");
const db = require("../db/models/index");

class CategoriesController extends BaseController {
  constructor(model, contractModel) {
    super(model);
    this.contractModel = contractModel;
  }
  //////////////////////////////////
  // create category for contracts//
  //////////////////////////////////
  async createCategory(req, res) {
    const { name } = req.body;
    try {
      const category = await this.model.create({
        name: name,
      });
      return res.json(category);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  /////////////////////////////////////////
  // Get Monthly Categories Contract Amt//
  ///////////////////////////////////////
  async getMthlyCategoriesData(req, res) {
    const { fiscalYear } = req.params;

    try {
      const [results, metadata] = await db.sequelize.query(
        `SELECT 
EXTRACT(MONTH FROM contracts.start_date) as month, categories.name, COUNT(contracts.id)
from contracts 
LEFT JOIN contract_categories ON contracts.id = contract_categories.contract_id
LEFT JOIN categories ON contract_categories.category_id = categories.id
WHERE EXTRACT(YEAR FROM contracts.start_date) = ${fiscalYear}
GROUP BY EXTRACT(MONTH FROM contracts.start_date), categories.name
ORDER BY  month, categories.name;`
      );

      // Create an empty object to store the transformed data
      const transformedData = {};

      // Loop through the data array
      results.forEach((item) => {
        const { month, name, count } = item;

        // If the month doesn't exist in the transformedData object, create it
        if (!transformedData[month]) {
          let monthName = {};
          switch (item.month) {
            case "1":
              monthName = "Jan";
              break;
            case "2":
              monthName = "Feb";
              break;
            case "3":
              monthName = "Mar";
              break;
            case "4":
              monthName = "Apr";
              break;
            case "5":
              monthName = "May";
              break;
            case "6":
              monthName = "Jun";
              break;
            case "7":
              monthName = "Jul";
              break;
            case "8":
              monthName = "Aug";
              break;
            case "9":
              monthName = "Sep";
              break;
            case "10":
              monthName = "Oct";
              break;
            case "11":
              monthName = "Nov";
              break;
            case "12":
              monthName = "Dec";
              break;
            default:
          }
          transformedData[month] = { monthName };
        }

        // Add the 'name' property with its count to the corresponding month
        transformedData[month][name] = count;
      });

      // Convert the transformedData object back to an array
      const result = Object.values(transformedData);

      // console.log(result);

      return res.json(result);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = CategoriesController;
