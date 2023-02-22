const express = require('express')
const path = require('path')
const app = express()

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./navbar-app/index.html'))
    console.log('user hit the resource')
})
app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})
app.listen(3000,()=>{
    console.log("server is listening on port 3000...")
})