'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ITAssets', [
      {
        assetId: 'ITA-0007133',
        name: 'Corporate Intranet',
        supportTeam: 'IT-Support-Corporate-Services',
        status: 'Production',
        businessImpact: 'Medium',
        description: 'Internal company web site for policies, procedures, and employee self-services',
        assetType: 'Business Application',
        scope: 'Global',
        architecture: 'Custom Developed',
        platform: 'AWS',
        users: 'Workforce',
        hostingLocation: 'USA',
        productOwner: 'j.thomas@example.com', 
        productManager: 'm.shepherd@example.com',
        systemQA: 'e.kath@example.com',
        businessQA: 'm.williams@example.com',
        assetRisk: 3,
        securityClassification: 'internal',
        privacyClassification: 'workforce',
        recoverTimeObjective: '1 Week',
        recoveryPointObjective: '8 hours',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        assetId: 'ITA-0009210',
        name: 'Manufacturing Execution System',
        supportTeam: 'IT-Support-Quality-Services',
        status: 'Production',
        businessImpact: 'Critical',
        description: 'The manufacturing execution system records events occuring during product production',
        assetType: 'Business Application',
        scope: 'Local',
        architecture: 'Commercial',
        platform: 'Linux',
        users: 'Workforce',
        hostingLocation: 'USA',
        productOwner: 'm.shepherd@example.com', 
        productManager: 'r.thomas@example.com',
        systemQA: 'p.williams@example.com',
        businessQA: 'n.andrews@example.com',
        assetRisk: 5,
        securityClassification: 'internal',
        privacyClassification: 'workforce',
        recoverTimeObjective: '24 hours',
        recoveryPointObjective: '1 hour',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        assetId: 'ITA-0003911',
        name: 'Customer Relationship Management',
        supportTeam: 'IT-Support-Sales-Services',
        status: 'Production',
        businessImpact: 'Critical',
        description: 'The CRM system manages customer informatation, leads, and product information',
        assetType: 'Business Application',
        scope: 'Local',
        architecture: 'Commercial',
        platform: 'SaaS',
        users: 'Workforce',
        hostingLocation: 'USA',
        productOwner: 'm.frisee@example.com', 
        productManager: 'r.macy@example.com',
        systemQA: 'j.connell@example.com',
        businessQA: 'm.hundley@example.com',
        assetRisk: 4,
        securityClassification: 'internal',
        privacyClassification: 'customer',
        recoverTimeObjective: '24 hours',
        recoveryPointObjective: '8 hours',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ITAssets', null, {});
  }
};
