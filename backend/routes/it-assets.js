const itAssets = require('../controllers/it-assets');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/it-assets', itAssets.getAllItAssets);

module.exports = router;
