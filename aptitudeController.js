exports.getAptitudeQuestions = async (req, res) => {
  // TODO: select questions based on company and return randomized set
  res.json({ questions: [] });
};

exports.submitAptitude = async (req, res) => {
  // TODO: save answers and calculate marks
  res.json({ message: 'Aptitude submitted' });
};
