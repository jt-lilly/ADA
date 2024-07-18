'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ITAssets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ITAssets.init({
    assetId: DataTypes.STRING,
    name: DataTypes.STRING,
    supportTeam: DataTypes.STRING,
    status: DataTypes.STRING,
    businessImpact: DataTypes.STRING,
    description: DataTypes.TEXT,
    assetType: DataTypes.STRING,
    scope: DataTypes.STRING,
    architecture: DataTypes.STRING,
    platform: DataTypes.STRING,
    users: DataTypes.STRING,
    hostingLocation: DataTypes.STRING,
    productOwner: DataTypes.STRING,
    productManager: DataTypes.STRING,
    systemQA: DataTypes.STRING,
    businessQA: DataTypes.STRING,
    assetRisk: DataTypes.INTEGER,
    securityClassification: DataTypes.STRING,
    privacyClassification: DataTypes.STRING,
    recoverTimeObjective: DataTypes.STRING,
    recoveryPointObjective: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ITAssets',
  });
  return ITAssets;
};