const express = require('express')
const app = express()

let {people} = require('./data')
// static assets
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({extended:false}))
// parse json
app.use(express.json())
// get method
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})
app.post('/api/people',(req,res)=>{
    const {name}=req.body
    if(!name)
    {
        return res.status(400).json({success:false,msg:"please provide name value"})
    }
    res.status(201).json({success:true,person:name})
})
app.post('/login',(req,res)=>{
    const {name}=req.body
    if(name)
    {
        return res.status(200).send('welcome ' + name)
    }
    res.status(401).send('please provide credentials')
})

// post method
app.post('',)

app.listen(4000,()=>{
    console.log("server is listening on port 4000");
})