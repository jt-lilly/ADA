'use strict';
const models = require('../db/models');

const getAllITAssets = async () => {
    const itAssets = await models.ITAssets.findAll({});
console.log(JSON.stringify(itAssets));

    return itAssets;
};

module.exports = { 
    getAllITAssets
};