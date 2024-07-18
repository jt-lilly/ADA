const itAssets = require('../dao/it-assets');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/itassets', itAssets.getAllITAssets);

module.exports = router;
