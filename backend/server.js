const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');

const { errorHandler } = require('./src/middleware/error.middleware');
const connectDB = require('./src/config/db');

const routesGoals = require('./src/routes/goals.route');
const routesUsers = require('./src/routes/users.route');

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', routesGoals);
app.use('/api/users', routesUsers);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
