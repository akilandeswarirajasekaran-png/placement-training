exports.getHrQuestions = async (req, res) => {
  // TODO: load HR questions based on company
  res.json({ questions: [] });
};

exports.submitHr = async (req, res) => {
  // TODO: save HR answers for the user
  res.json({ message: 'HR answers saved' });
};
