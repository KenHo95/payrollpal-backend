"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}
  Post.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      date: {
        type: DataTypes.STRING,
      },
      post_url: {
        type: DataTypes.INTEGER,
      },
      contract_id: {
        type: DataTypes.INTEGER,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
    },
    {
      sequelize,
      modelName: "post",
      underscored: true,
    }
  );
  return Post;
};
