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
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("contract_categories", null, {});
  },
};
