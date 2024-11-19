const express = require('express');
const { addVendor,getVendors} = require('../controllers/vendorController');
const router = express.Router();

router.post('/add', addVendor);
router.get("/all",getVendors)

module.exports = router;