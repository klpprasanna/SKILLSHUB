const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/course');
const paymentRoutes = require('./routes/payment');
require('./config/passport');

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/payment', paymentRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch(err => console.error(err));

  module.exports=app;
  