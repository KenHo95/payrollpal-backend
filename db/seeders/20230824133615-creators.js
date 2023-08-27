"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("creators", [
      {
        name: "Lee Yik Keat",
        tiktok_handle: "yk",
        email: "yk@gmail.com",
        bank_account_number: 9102031012,
        bank_identifer_code: "DBSSSGSGXXX",
        bank_name: "DBS Bank Limited",
        residence_country: "Singapore",
        address: "1 Ang Mo Kio Ave 1 Singapore 123456",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Mekyun",
        tiktok_handle: "mekyunnnn",
        email: "mekyunnnn@gmail.com",
        bank_account_number: 4738577485746,
        bank_identifer_code: "PHBMMYKL",
        bank_name: "AFFIN BANK BERHAD",
        residence_country: "Malaysia",
        address: "Persiaran Raja Chulan, Bukit Bintang, 50200 Kuala Lumpur",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Nana",
        tiktok_handle: "nanasilayro",
        email: "nanasilayro@gmail.com",
        bank_account_number: 473984756193,
        bank_identifer_code: "UBPHPHMM",
        bank_name: "UNION BANK OF THE PHILIPPINES",
        residence_country: "Philippines",
        address: "Tondo, Manila, Metro Manila, Philippines",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("creators", null, {});
  },
};
