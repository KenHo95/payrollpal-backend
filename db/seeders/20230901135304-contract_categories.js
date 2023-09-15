"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("contract_categories", [
      {
        contract_id: 1,
        category_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 1,
        category_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 2,
        category_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 2,
        category_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 3,
        category_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 3,
        category_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 4,
        category_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 4,
        category_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 5,
        category_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 6,
        category_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 6,
        category_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 7,
        category_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 8,
        category_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 9,
        category_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 10,
        category_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 10,
        category_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 11,
        category_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 11,
        category_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 12,
        category_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 13,
        category_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 14,
        category_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 15,
        category_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 16,
        category_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 17,
        category_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 17,
        category_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 18,
        category_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 19,
        category_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 20,
        category_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 21,
        category_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 22,
        category_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 23,
        category_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 24,
        category_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 25,
        category_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 26,
        category_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contract_id: 27,
        category_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("contract_categories", null, {});
  },
};
