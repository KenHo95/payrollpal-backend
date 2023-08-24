"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("creators", [
      {
        name: "Lee Yik Keat",
        tiktok_handle: "yk",
        email: "yk@gmail.com",
        bank_account_number: "9102031012",
        residence_country: "Singapore",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Mekyun",
        tiktok_handle: "mekyunnnn",
        email: "mekyunnnn@gmail.com",
        bank_account_number: "4738577485746",
        residence_country: "Malaysia",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Nana",
        tiktok_handle: "nanasilayro",
        email: "nanasilayro@gmail.com",
        bank_account_number: "473984756193",
        residence_country: "Philippines",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("creators", null, {});
  },
};
