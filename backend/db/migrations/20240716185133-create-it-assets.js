'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ITAssets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      assetId: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      supportTeam: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      businessImpact: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      assetType: {
        type: Sequelize.STRING
      },
      scope: {
        type: Sequelize.STRING
      },
      architecture: {
        type: Sequelize.STRING
      },
      platform: {
        type: Sequelize.STRING
      },
      users: {
        type: Sequelize.STRING
      },
      hostingLocation: {
        type: Sequelize.STRING
      },
      productOwner: {
        type: Sequelize.STRING
      },
      productManager: {
        type: Sequelize.STRING
      },
      systemQA: {
        type: Sequelize.STRING
      },
      businessQA: {
        type: Sequelize.STRING
      },
      assetRisk: {
        type: Sequelize.INTEGER
      },
      securityClassification: {
        type: Sequelize.STRING
      },
      privacyClassification: {
        type: Sequelize.STRING
      },
      recoverTimeObjective: {
        type: Sequelize.STRING
      },
      recoveryPointObjective: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ITAssets');
  }
};