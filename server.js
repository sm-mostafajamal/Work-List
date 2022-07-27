const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({path: './config/.env'});
const connectDB = require('./config/database');
const homeRoutes = require('./routes/home');
const workListsRoutes = require('./routes/worklists');
const PORT = process.env.PORT || 5000


connectDB();
// Middlewares
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Pages
app.use('/', homeRoutes);
app.use('/workLists', workListsRoutes);


// listening
app.listen(5000, console.log(`Server is running`));