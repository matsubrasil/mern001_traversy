const getGoals = (req, res) => {
  res.status(200).json({ message: 'Api Goals' });
};

const getOneGoal = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `Get Goal: ${id}` });
};

const setGoal = (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `POST goals: ${name}` });
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
