"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("payments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      reference_no: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bank_reference_no: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      payment_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      payee_currency: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fx_rate: {
        type: Sequelize.DECIMAL(16, 10),
        allowNull: false,
      },
      translated_amount: {
        type: Sequelize.DECIMAL(11, 4),
        allowNull: false,
      },
      contract_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "contracts",
          key: "id",
        },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("payments");
  },
};
