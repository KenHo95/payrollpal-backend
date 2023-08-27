"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("payments", [
      {
        reference_no: "PAY1234",
        bank_reference_no: "OCBC1234",
        description: "Seed data - FAST Payment to Lee Yik Keat for NDP Post",
        status: "Success",
        payee_currency: "SGD",
        fx_rate: 1.0,
        translated_amount: 2000.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        reference_no: "PAY1235",
        bank_reference_no: "OCBC1235",
        description:
          "Seed data - Telegraphic Transfer Payment to Mekyun for Beauty Post",
        status: "Success",
        payee_currency: "MYR",
        fx_rate: 3.42,
        translated_amount: 6842.9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        reference_no: "PAY1236",
        bank_reference_no: "OCBC1236",
        description:
          "Seed data - Telegraphic Transfer Payment to Nana for Entertainment Post",
        status: "Success",
        payee_currency: "PHP",
        fx_rate: 41.74,
        translated_amount: 41740.22,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("payments", null, {});
  },
};
