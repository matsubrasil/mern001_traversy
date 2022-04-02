import axios from 'axios';

const API_URL = '/api/goals';

const create = async (goalData, token) => {
  const response = await axios.post(API_URL, goalData, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

const getAll = async (token) => {
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

const destroyGoal = async (goalId, token) => {
  // console.log('goal.service => destroyGoal', goalId);
  const response = await axios.delete(`${API_URL}/${goalId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

const goalService = {
  create,
  getAll,
  destroyGoal,
};

export default goalService;
