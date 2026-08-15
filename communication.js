const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { getCommunicationQuestions, uploadAudio } = require('../controllers/communicationController');

router.get('/', getCommunicationQuestions);
router.post('/upload-audio', upload.single('audio'), uploadAudio);

module.exports = router;
