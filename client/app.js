const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();

app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({extended:true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
// app.use(cors());

app.use("/",require('./src/router/user-router'));
app.use('/',require('./src/router/emp-router'));


app.listen(4000,()=>{
    console.log("connected to post 4000")
})