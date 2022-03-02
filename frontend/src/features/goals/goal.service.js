import axios from 'axios';

const API_URL = '/api/goals';

const create = async (goalData, token) => {
  const response = await axios.post(API_URL, goalData, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

const goalService = {
  create,
};

export default goalService;
