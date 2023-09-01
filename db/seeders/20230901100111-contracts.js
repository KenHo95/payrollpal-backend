"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("contracts", [
      {
        description:
          "Contract with Lee Yik Keat for Lifestyle Post - photography content",
        amount_sgd: 2000.0,
        contract_status: "Completed",
        start_date: new Date(2023, 7, 13),
        end_date: new Date(2023, 7, 13),
        no_of_post_required: 1,
        creator_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description: "Contract with Mekyun for Beauty Post - product content",
        amount_sgd: 2000,
        contract_status: "Completed",
        start_date: new Date(2023, 7, 20),
        end_date: new Date(2023, 7, 23),
        no_of_post_required: 1,
        creator_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description:
          "Contract with Nana for Entertainment Post - general content",
        amount_sgd: 1000.0,
        contract_status: "Completed",
        start_date: new Date(2023, 7, 25),
        end_date: new Date(2023, 7, 27),
        no_of_post_required: 1,
        creator_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("contracts", null, {});
  },
};
