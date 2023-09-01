"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("posts", [
      {
        date: new Date(2023, 7, 12),
        description: "Post 1",
        post_url: "https://www.tiktok.com/@yk/video/7266431753332591873",
        contract_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 7, 22),
        description: "Post 1",
        post_url: "https://www.tiktok.com/@mekyunnnn/video/7270131462127504641",
        contract_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 7, 26),
        description: "Post 1",
        post_url:
          "https://www.tiktok.com/@nanasilayro/video/7271610004640255238",
        contract_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("posts", null, {});
  },
};
