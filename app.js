const express = require("express");
const bodyParser  =  require('body-parser');
const mongo=require("mongodb");
const router =  require('./Routes/routes');
//const MongoClient=mongo.MongoClient;
const hostname = "localhost";
const MONGO_URL ="mongodb://localhost:127.0.0.1:27017";
const port=433;
//let db
const app=express();
app.use(bodyParser.json())
//CORS
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')//any type of origin to take control/interact with this application
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE')
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization')
    next();
})
app.use('/',router);


// MongoClient.connect(MONGO_URL,(err,client)=>{
//     console.log("db is connected")
//     if(err)console.log("Error while connecting")
//     db=client.db("assignment-5");
// })
    app.listen(port,hostname,()=>{
        console.log(`Server is running on http://${hostname}:${port}/`)
    })
        


