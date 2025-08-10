// Requires -------------------------------------------------------------------------------------------------------------------------
const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const expressSession = require('express-session');
const bcrypt = require('bcryptjs');
const db = require('./db.js');

const app = express();

// Routes Include ------------------------------------------------------------------------------------------------------------------------

const sigInRoutes = require('./router/signinroutes.js')
const signUpRoutes = require('./router/signuproutes.js');
const home = require('./router/homeroutes.js');
const about = require('./router/aboutroutes.js');

// Middleware  ----------------------------------------------------------------------------------------------------------------------------

app.use(express.json());
app.use(bodyParser.urlencoded({extended : false}));


app.set('view engine','ejs');
app.use(express.static("public"));

app.use(expressSession({
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized : false,
    cookie : {maxAge : 1000*60*60*24}

}))

// Routes ----------------------------------------------------------------------------------------------------------------------------------

app.use('/',home);
app.use('/signin' , sigInRoutes);
app.use('/signup',signUpRoutes);
app.use('/about',about);

// Running ----------------------------------------------------------------------------------------------------------------------------

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`App is Running at port : ${port}`);
})