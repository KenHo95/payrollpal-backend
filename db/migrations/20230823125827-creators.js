"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("creators", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      telegram_handle: {
        type: Sequelize.STRING,
      },
      Address: {
        type: Sequelize.STRING,
      },
      phone_number: {
        type: Sequelize.INTEGER,
      },
      bank_account_number: {
        type: Sequelize.INTEGER,
      },
      residence_country: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("creators");
  },
};
