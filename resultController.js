exports.getResult = async (req, res) => {
  // TODO: calculate total score and return final result
  res.json({ result: { aptitude_score: 0, coding_score: 0, communication_score: 0, hr_score: 0, overall_score: 0 } });
};
