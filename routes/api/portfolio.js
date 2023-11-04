const express = require('express');
const router = express.Router()
const portfolioCtrl = require('../../controllers/api/portfolio');

router.get('/', portfolioCtrl.index);

module.exports = router;
