const express = require('express');
const router = express.Router();
const { getAptitudeQuestions, submitAptitude } = require('../controllers/aptitudeController');

router.get('/', getAptitudeQuestions);
router.post('/submit-aptitude', submitAptitude);

module.exports = router;
