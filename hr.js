const express = require('express');
const router = express.Router();
const { getHrQuestions, submitHr } = require('../controllers/hrController');

router.get('/', getHrQuestions);
router.post('/submit-hr', submitHr);

module.exports = router;
