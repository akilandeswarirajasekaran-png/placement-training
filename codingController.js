exports.getCodingQuestions = async (req, res) => {
  // TODO: load coding questions for the selected company
  res.json({ questions: [] });
};

exports.submitCode = async (req, res) => {
  // TODO: save code submission and evaluate output
  res.json({ message: 'Code submitted' });
};
