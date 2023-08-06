require('dotenv').config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3200

app.get("/",(req,res)=>{
    res.status(201).send("this is home page")
})

app.get("/about",(req,res)=>{
    res.status(201).send("this is about page")
})

app.listen(PORT,()=>{
    console.log(`the server is running on ${PORT}`);
})