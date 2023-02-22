const http = require('http')
const {readFileSync} = require('fs')
// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/style.css')
const homeImage = readFileSync('./navbar-app/logo.jpg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req,res)=>{
    const url = req.url;
    console.log(url)
    if(url==='/')
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    else if(url==="/style.css")
    {
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }
    else if(url==="/logo.jpg")
    {
        res.writeHead(200,{'content-type':'image/jpg+xml'})
        res.write(homeImage)
        res.end()
    }
    else if(url==="/browser-app.js")
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homeLogic)
        res.end()
    }
    else if(url==="/about.html")
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(`<h1>About page</h1>`)
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/javascript'})
        res.write(`<h1>page not found</h1>`)
        res.end()
    }
}).listen(3000)