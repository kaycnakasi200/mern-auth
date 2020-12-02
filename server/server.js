const express = require ('express');
const morgan  = require('morgan');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

//app
const app = express();

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//routes
app.get('/api',(req,res)=>{
    res.send('Hello API');
   // res.json({time: Date().toString()})
})

app.get('/signin',(req,res)=>{
    res.send('Login');
    
})

//port
const port = process.env.PORT || 8000;

app.listen(port, () =>{
    console.log(`Server run on http://localhost:${port}`);
    console.log(`Login Pase`);
})