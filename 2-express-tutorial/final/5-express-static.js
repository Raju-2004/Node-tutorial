const express = require('express')
const path = require('path')
const app = express()

// setup static and middleware
app.use(express.static('./public'))

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'./navbar-app/index.html'))
//     console.log('user hit the resource')
//    adding to the static assets
//    ssr
// })
app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})
app.listen(4000,()=>{
    console.log("server is listening on port 4000...")
})
