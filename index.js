require('dotenv').config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3200
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://97nitesh85:85nitesh97collectdata@cluster0.oegqizs.mongodb.net/collectdata",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("mongodb connect")}).catch(()=>{console.log("not connect mongodb")})

const userschema = new mongoose.Schema({
    name:String,
    city:String
})

app.set("view engine","ejs")
app.use(express.static("public"))

const usermodel = new mongoose.model("User",userschema)
app.get("/",(req,res)=>{
    res.render('index')
})

app.get("/about",(req,res)=>{
    res.status(201).send("this is about page")
})

app.get("/fetch",async (req,res)=>{
    const data = await usermodel.find()
    res.status(201).send(data)
})

app.listen(PORT,()=>{
    console.log(`the server is running on ${PORT}`);
})