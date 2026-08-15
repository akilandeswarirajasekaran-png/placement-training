const express = require('express');
const router = express.Router();
const { getCodingQuestions, submitCode } = require('../controllers/codingController');

router.get('/', getCodingQuestions);
router.post('/submit-code', submitCode);

module.exports = router;
