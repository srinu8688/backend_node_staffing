const express = require('express');
const { addResource, getResources } = require('../controllers/resourceController');
const router = express.Router();
const upload = require('../middleware/upload');


router.post('/add', upload.single('resume'),addResource);
router.get('/list', getResources);

module.exports = router;
