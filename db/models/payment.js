"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      this.belongsTo(models.contract);
    }
  }
  Payment.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      reference_no: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bank_reference_no: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      payment_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      payee_currency: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fx_rate: {
        type: DataTypes.DECIMAL(11, 10),
        allowNull: false,
      },
      translated_amount: {
        type: DataTypes.DECIMAL(11, 4),
        allowNull: false,
      },
      contract_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "contract",
          key: "id",
        },
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
    },
    {
      sequelize,
      modelName: "payment",
      underscored: true,
    }
  );
  return Payment;
};
