'use strict';
const models = require('../db/models');

const getAllITAssets = async () => {
    const itAssets = await models.ITAssets.findAll({});
    return itAssets;
};

module.exports = { 
    getAllITAssets
};