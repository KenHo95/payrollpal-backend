"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("contracts", [
      // Jan
      {
        description:
          "Contract with Lee Yik Keat for Lifestyle Post - photography content",
        amount_sgd: 2000.0,
        contract_status: "Paid", // "Completed"
        start_date: new Date(2023, 0, 13), // month arg is 0 indexed
        end_date: new Date(2023, 0, 14),
        no_of_post_required: 1,
        creator_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description: "Contract with Mekyun for Beauty Post - product content",
        amount_sgd: 2000,
        contract_status: "Paid",
        start_date: new Date(2023, 0, 20),
        end_date: new Date(2023, 0, 23),
        no_of_post_required: 1,
        creator_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description:
          "Contract with Nana for Entertainment Post - general content",
        amount_sgd: 1000.0,
        contract_status: "Paid", // "Pending Approval"
        start_date: new Date(2023, 0, 25),
        end_date: new Date(2023, 0, 27),
        no_of_post_required: 1,
        creator_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // Feb
      {
        description:
          "Contract with Lee Yik Keat for Lifestyle Post - photography content",
        amount_sgd: 2500.0,
        contract_status: "Paid",
        start_date: new Date(2023, 1, 10),
        end_date: new Date(2023, 1, 11),
        no_of_post_required: 1,
        creator_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description: "Contract with Mekyun for Beauty Post - product content",
        amount_sgd: 2500.0,
        contract_status: "Paid",
        start_date: new Date(2023, 1, 19),
        end_date: new Date(2023, 1, 20),
        no_of_post_required: 1,
        creator_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description:
          "Contract with Nana for Entertainment Post - general content",
        amount_sgd: 1000.0,
        contract_status: "Paid", // "Pending Approval"
        start_date: new Date(2023, 1, 25),
        end_date: new Date(2023, 1, 27),
        no_of_post_required: 1,
        creator_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // Mar
      {
        description:
          "Contract with Lee Yik Keat for Lifestyle Post - photography content",
        amount_sgd: 1500.0,
        contract_status: "Paid",
        start_date: new Date(2023, 2, 10),
        end_date: new Date(2023, 2, 11),
        no_of_post_required: 1,
        creator_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description: "Contract with Mekyun for Beauty Post - product content",
        amount_sgd: 2000,
        contract_status: "Paid",
        start_date: new Date(2023, 2, 19),
        end_date: new Date(2023, 2, 20),
        no_of_post_required: 1,
        creator_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description:
          "Contract with Nana for Entertainment Post - general content",
        amount_sgd: 1000.0,
        contract_status: "Paid", // "Pending Approval"
        start_date: new Date(2023, 2, 25),
        end_date: new Date(2023, 2, 27),
        no_of_post_required: 1,
        creator_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // Apr
      {
        description:
          "Contract with Lee Yik Keat for Lifestyle Post - photography content",
        amount_sgd: 2500.0,
        contract_status: "Paid",
        start_date: new Date(2023, 3, 10),
        end_date: new Date(2023, 3, 11),
        no_of_post_required: 1,
        creator_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description: "Contract with Mekyun for Beauty Post - product content",
        amount_sgd: 2000,
        contract_status: "Paid",
        start_date: new Date(2023, 3, 19),
        end_date: new Date(2023, 3, 20),
        no_of_post_required: 1,
        creator_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description:
          "Contract with Nana for Entertainment Post - general content",
        amount_sgd: 1000.0,
        contract_status: "Paid", // "Pending Approval"
        start_date: new Date(2023, 3, 25),
        end_date: new Date(2023, 3, 27),
        no_of_post_required: 1,
        creator_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // May
      {
        description:
          "Contract with Lee Yik Keat for Lifestyle Post - photography content",
        amount_sgd: 2000.0,
        contract_status: "Paid",
        start_date: new Date(2023, 4, 10),
        end_date: new Date(2023, 4, 11),
        no_of_post_required: 1,
        creator_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description: "Contract with Mekyun for Beauty Post - product content",
        amount_sgd: 2000,
        contract_status: "Paid",
        start_date: new Date(2023, 4, 19),
        end_date: new Date(2023, 4, 20),
        no_of_post_required: 1,
        creator_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description:
          "Contract with Nana for Entertainment Post - general content",
        amount_sgd: 1000.0,
        contract_status: "Paid", // "Pending Approval"
        start_date: new Date(2023, 4, 25),
        end_date: new Date(2023, 4, 27),
        no_of_post_required: 1,
        creator_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // Jun
      {
        description:
          "Contract with Lee Yik Keat for Lifestyle Post - photography content",
        amount_sgd: 1500.0,
        contract_status: "Paid",
        start_date: new Date(2023, 5, 10),
        end_date: new Date(2023, 5, 11),
        no_of_post_required: 1,
        creator_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description: "Contract with Mekyun for Beauty Post - product content",
        amount_sgd: 2000,
        contract_status: "Paid",
        start_date: new Date(2023, 5, 19),
        end_date: new Date(2023, 5, 20),
        no_of_post_required: 1,
        creator_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description:
          "Contract with Nana for Entertainment Post - general content",
        amount_sgd: 1000.0,
        contract_status: "Paid", // "Pending Approval"
        start_date: new Date(2023, 5, 25),
        end_date: new Date(2023, 5, 27),
        no_of_post_required: 1,
        creator_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // Jul
      {
        description:
          "Contract with Lee Yik Keat for Lifestyle Post - photography content",
        amount_sgd: 2000.0,
        contract_status: "Paid",
        start_date: new Date(2023, 6, 10),
        end_date: new Date(2023, 6, 11),
        no_of_post_required: 1,
        creator_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description: "Contract with Mekyun for Beauty Post - product content",
        amount_sgd: 2000,
        contract_status: "Paid",
        start_date: new Date(2023, 6, 19),
        end_date: new Date(2023, 6, 20),
        no_of_post_required: 1,
        creator_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description:
          "Contract with Nana for Entertainment Post - general content",
        amount_sgd: 1500.0,
        contract_status: "Paid", // "Pending Approval"
        start_date: new Date(2023, 6, 25),
        end_date: new Date(2023, 6, 27),
        no_of_post_required: 1,
        creator_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // Aug
      {
        description:
          "Contract with Lee Yik Keat for Lifestyle Post - photography content",
        amount_sgd: 2000.0,
        contract_status: "Pending Approval",
        start_date: new Date(2023, 7, 10),
        end_date: new Date(2023, 7, 11),
        no_of_post_required: 1,
        creator_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description: "Contract with Mekyun for Beauty Post - product content",
        amount_sgd: 1500,
        contract_status: "Pending Approval",
        start_date: new Date(2023, 7, 19),
        end_date: new Date(2023, 7, 20),
        no_of_post_required: 1,
        creator_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description:
          "Contract with Nana for Entertainment Post - general content",
        amount_sgd: 1000.0,
        contract_status: "Pending Approval", // "Pending Approval"
        start_date: new Date(2023, 7, 25),
        end_date: new Date(2023, 7, 27),
        no_of_post_required: 1,
        creator_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // Sep
      {
        description:
          "Contract with Lee Yik Keat for Lifestyle Post - photography content",
        amount_sgd: 2000.0,
        contract_status: "In Progress",
        start_date: new Date(2023, 8, 14),
        end_date: new Date(2023, 8, 15),
        no_of_post_required: 2,
        creator_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description: "Contract with Mekyun for Beauty Post - product content",
        amount_sgd: 2000,
        contract_status: "In Progress",
        start_date: new Date(2023, 8, 19),
        end_date: new Date(2023, 8, 20),
        no_of_post_required: 1,
        creator_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        description:
          "Contract with Nana for Entertainment Post - general content",
        amount_sgd: 1000.0,
        contract_status: "In Progress", // "Pending Approval"
        start_date: new Date(2023, 8, 25),
        end_date: new Date(2023, 8, 27),
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
