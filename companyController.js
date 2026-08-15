exports.getCompanies = async (req, res) => {
  // TODO: fetch companies from database
  res.json({ companies: ['TCS', 'Infosys', 'Zoho', 'Wipro', 'Cognizant', 'Capgemini', 'HCL', 'IBM', 'Tech Mahindra'] });
};

exports.selectCompany = async (req, res) => {
  // TODO: save selected company for user
  res.json({ message: 'Selected company saved' });
};
