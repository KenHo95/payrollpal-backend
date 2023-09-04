"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("payments", [
      {
        reference_no: "PAY1234",
        bank_reference_no: "OCBC1234",
        payment_date: new Date(2023, 8, 13),
        description:
          "Seed data - FAST Payment to Lee Yik Keat for Lifestyle Post",
        status: "Success",
        payee_currency: "SGD",
        fx_rate: 1.0,
        translated_amount: 2000.0,
        contract_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        reference_no: "PAY1235",
        bank_reference_no: "OCBC1235",
        payment_date: new Date(2023, 8, 23),
        description:
          "Seed data - Telegraphic Transfer Payment to Mekyun for Beauty Post",
        status: "Success",
        payee_currency: "MYR",
        fx_rate: 3.42,
        translated_amount: 6840.0,
        contract_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // {
      //   reference_no: "PAY1236",
      //   bank_reference_no: "OCBC1236",
      //   payment_date: new Date(2023, 8, 27),
      //   description:
      //     "Seed data - Telegraphic Transfer Payment to Nana for Entertainment Post",
      //   status: "Success",
      //   payee_currency: "PHP",
      //   fx_rate: 41.74,
      //   translated_amount: 41740.0,
      //   contract_id: 3,
      //   created_at: new Date(),
      //   updated_at: new Date(),
      // },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("payments", null, {});
  },
};
