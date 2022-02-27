const getGoals = (req, res) => {
  res.status(200).json({ message: 'Api Goals' });
};

const getOneGoal = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `Get Goal: ${id}` });
};

const setGoal = (req, res) => {
  const { text } = req.body;
  if (!text) {
    res.status(400);
    throw new Error('Please add a text');
  }
  res.status(201).json({ message: `POST goals: ${text}` });
};

const updateGoal = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `Update Goals: ${id}` });
};

const deleteGoal = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `Delete Goals: ${id}` });
};

module.exports = {
  getGoals,
  getOneGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
