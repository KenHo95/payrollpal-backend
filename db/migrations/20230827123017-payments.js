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
