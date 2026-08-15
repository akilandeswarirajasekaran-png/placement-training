const express = require('express');
const router = express.Router();
const { getResult } = require('../controllers/resultController');

router.get('/', getResult);

module.exports = router;
