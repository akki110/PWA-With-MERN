var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv');
var cors = require('cors');
var mongoose = require('mongoose');

// Load environment variables from .env file
dotenv.config();
// Enable CORS

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const allowedOrigins = [
  'http://localhost:5173',           // Vite dev
  'http://localhost:3000',           // Build (serve -s dist)
  'http://localhost:4596',           // API backend itself
  'http://192.168.29.109:5173',      // Mobile dev
  'http://192.168.29.109:3000',      // Mobile build
  'http://192.168.29.109:4596',      // Mobile API
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like curl or postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      console.warn(`Blocked by CORS: ${origin}`);
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/products', indexRouter);
app.use('/users', usersRouter);

// mongoDB connection setup
console.log('Mongo URI:', process.env.MONGO_URI);
if (!process.env.MONGO_URI) {
  console.error('MONGODB_URI is not defined in the environment variables.');
  process.exit(1);
};
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('MongoDB connected successfully !!!!!');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});

// Server setup
const PORT = process.env.PORT || 4596;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
