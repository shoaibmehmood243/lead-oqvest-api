const router = require('express').Router();
const homeController = require('./../controllers/home.controller');

router.post('/purchase', homeController.purchase);
router.post('/refinance', homeController.refinance);

module.exports = router;