const express = require('express')
const app = express()
const logger = require('./logger')
const authorise = require('./authorize')
// req => middleware => res
app.use([logger,authorise])
// /api/home/items/products

app.get('/',(req,res)=>{
    res.send("home")
})
app.get('/about',(req,res)=>{
    res.send("about")
})
app.get('/api/products',(req,res)=>{
    res.send("products")
})
app.get('/api/items',(req,res)=>{
    console.log(req.user)
    res.send("items")
})
app.listen(4000,()=>{
    console.log("server is listening on port 4000");
})