const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 8080;

// File //

app.use('/public', express.static('public'))

// EJS //

app.set("view engine","ejs")

// set default //

app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/update',(req,res)=>{
    res.render('update')
})

// Port //

app.listen(port,'localhost',()=>{
    console.log("listening on port " + port);
});

// Link to database //

const pool = mysql.createPool({
    host : "data",
    user : "lottery",
    password : "123",
    database: "reward",
}) 