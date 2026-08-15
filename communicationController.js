exports.getCommunicationQuestions = async (req, res) => {
  // TODO: load communication questions for the selected company
  res.json({ questions: [] });
};

exports.uploadAudio = async (req, res) => {
  // TODO: store recorded audio path and associate it with the user
  res.json({ file: req.file, message: 'Audio uploaded' });
};
