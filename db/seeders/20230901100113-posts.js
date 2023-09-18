"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("posts", [
      {
        date: new Date(2023, 0, 12),
        description: "Post 1",
        post_url: "https://www.tiktok.com/@yk/video/7266431753332591873",
        contract_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 0, 22),
        description: "Post 1",
        post_url: "https://www.tiktok.com/@mekyunnnn/video/7270131462127504641",
        contract_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 0, 26),
        description: "Post 1",
        post_url:
          "https://www.tiktok.com/@nanasilayro/video/7271610004640255238",
        contract_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 1, 12),
        description: "Post 1",
        post_url: "https://www.tiktok.com/@yk/video/7266431753332591873",
        contract_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 1, 22),
        description: "Post 1",
        post_url: "https://www.tiktok.com/@mekyunnnn/video/7270131462127504641",
        contract_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 1, 26),
        description: "Post 1",
        post_url:
          "https://www.tiktok.com/@nanasilayro/video/7271610004640255238",
        contract_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 2, 12),
        description: "Post 1",
        post_url: "https://www.tiktok.com/@yk/video/7266431753332591873",
        contract_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 2, 22),
        description: "Post 1",
        post_url: "https://www.tiktok.com/@mekyunnnn/video/7270131462127504641",
        contract_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 2, 26),
        description: "Post 1",
        post_url:
          "https://www.tiktok.com/@nanasilayro/video/7271610004640255238",
        contract_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 3, 12),
        description: "Post 1",
        post_url: "https://www.tiktok.com/@yk/video/7266431753332591873",
        contract_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 3, 22),
        description: "Post 1",
        post_url: "https://www.tiktok.com/@mekyunnnn/video/7270131462127504641",
        contract_id: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 3, 26),
        description: "Post 1",
        post_url:
          "https://www.tiktok.com/@nanasilayro/video/7271610004640255238",
        contract_id: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 4, 12),
        description: "Post 1",
        post_url: "https://www.tiktok.com/@yk/video/7266431753332591873",
        contract_id: 13,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 4, 22),
        description: "Post 1",
        post_url: "https://www.tiktok.com/@mekyunnnn/video/7270131462127504641",
        contract_id: 14,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 4, 26),
        description: "Post 1",
        post_url:
          "https://www.tiktok.com/@nanasilayro/video/7271610004640255238",
        contract_id: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 5, 12),
        description: "Post 1",
        post_url: "https://www.tiktok.com/@yk/video/7266431753332591873",
        contract_id: 16,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 5, 22),
        description: "Post 1",
        post_url: "https://www.tiktok.com/@mekyunnnn/video/7270131462127504641",
        contract_id: 17,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 5, 26),
        description: "Post 1",
        post_url:
          "https://www.tiktok.com/@nanasilayro/video/7271610004640255238",
        contract_id: 18,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 6, 12),
        description: "Post 1",
        post_url: "https://www.tiktok.com/@yk/video/7266431753332591873",
        contract_id: 19,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 6, 22),
        description: "Post 1",
        post_url: "https://www.tiktok.com/@mekyunnnn/video/7270131462127504641",
        contract_id: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 6, 26),
        description: "Post 1",
        post_url:
          "https://www.tiktok.com/@nanasilayro/video/7271610004640255238",
        contract_id: 21,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 7, 12),
        description: "Post 1",
        post_url: "https://www.tiktok.com/@yk/video/7266431753332591873",
        contract_id: 22,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 7, 22),
        description: "Post 1",
        post_url: "https://www.tiktok.com/@mekyunnnn/video/7270131462127504641",
        contract_id: 23,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date: new Date(2023, 7, 26),
        description: "Post 1",
        post_url:
          "https://www.tiktok.com/@nanasilayro/video/7271610004640255238",
        contract_id: 24,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("posts", null, {});
  },
};
