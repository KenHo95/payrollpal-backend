"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", [
      {
        name: "Lifestyle",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Photography",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Beauty",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Product",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Entertainment",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "General",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
