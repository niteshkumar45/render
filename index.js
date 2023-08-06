require('dotenv').config();
const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.status(201).send("this is home page")
})

app.listen(PORT,()=>{
    console.log(`the server is running on ${PORT}`);
})