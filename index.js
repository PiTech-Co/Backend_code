const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true }, () =>
    console.log('Database Connected')
);

app.use(express.json());


const authRoute = require('./routes/auth');

app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server Running'))