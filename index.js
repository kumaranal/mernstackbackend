// const { Router } = require("express");
const express=require("express");
const cors= require ("cors")
const mongoose=require('mongoose');
const app=express();
const routes= require("./routes/todoRoute")

require('dotenv').config();


///to use json
app.use(express.json())
// app.use(express.static(path.join(__dirname,'dist/bookstore')));
app.use(cors())

//port creation
const port= process.env.PORT || 5000;


//for host in internet
app.listen(port,()=>{
    console.log(`listening port ${port}`);
});



////mongoDB connect
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>console.log('connected Successfully...'))
    .catch((err)=> console.log(err))



//////routere file
   app.use('/api',routes);

