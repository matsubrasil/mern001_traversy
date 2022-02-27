const express = require('express');
const dotenv = require('dotenv').config();
const routesGoals = require('./src/routes/goals.route');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use('/api/goals', routesGoals);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
