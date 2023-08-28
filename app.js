const express = require('express');
const bodyParser  =  require('body-parser');

const router =  require('./Routes/routes');

const hostname = "localhost";

const port=433;

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
app.listen(port,hostname,()=>{
    console.log(`Server is running on http://{hostname}:${port}`)
})
