const express = require('express');
const router = express.Router();
const { getCompanies, selectCompany } = require('../controllers/companyController');

router.get('/', getCompanies);
router.post('/select-company', selectCompany);

module.exports = router;
