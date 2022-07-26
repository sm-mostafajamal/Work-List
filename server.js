const express = require('express');
const app = express();
const connectDB = require('./config/database');
require('dotenv').config({path: './config/.env'});
const homeRoutes = require('./routes/home');
const workListsRoutes = require('./routes/worklists');


connectDB();
// Middlewares
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Pages
app.use('/', homeRoutes);
app.use('/', workListsRoutes);


// listening
app.listen(5000, console.log(`Server is running`));