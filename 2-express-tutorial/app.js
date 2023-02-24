const express = require('express')
const path = require('path')
const app = express()
const {products} = require('./data')
app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1><a href="/api/products">products</a>');
    console.log('hitting the resource');
})
app.get('/api/products',(req,res)=>{
    res.json(products)
})
app.listen(4000,()=>{
    console.log("sever is listening on port 4000")
})