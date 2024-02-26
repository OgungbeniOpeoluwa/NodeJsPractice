// connect your database 
require('dotenv').config();
const express = require('express');
const app = express();
const dburl = process.env.MONGO_URI
const connect =require("./features/db/connectDb")
const port = 8080;
const router = require('./features/Router.js/router');
const notFound = require('./features/middleware/NotFound')
app.use(express.json());
app.use('/api/user',router)
app.use(notFound)

connect(dburl)
.then(()=>{
   app.listen(port,()=>{
        console.log(`app listening at port ${port}`);
   })
}).catch((error)=>{
    console.log(error)

})