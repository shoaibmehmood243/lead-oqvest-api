const express = require('express');
const { formController } = require('../controllers/purchase.controller');
const { refinanceController } = require('../controllers/refinance.controller');


const router = express.Router();


router.route('/submit/purchase').post(formController);
router.route('/submit/refinance').post(refinanceController);


module.exports = router;