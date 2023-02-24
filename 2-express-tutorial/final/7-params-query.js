const express = require('express')
const path = require('path')
const app = express()
const {products} = require('./data')
app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1><a href="/api/products">products</a>');
    console.log('hitting the resource');
})
app.get('/api/products',(req,res)=>{
    const newproducts = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image}
    })
    res.json(newproducts)
    // res.sendFile(path.join(__dirname,'./data.js'))
})
//route parameters
app.get('/api/products/:productID',(req,res)=>{
    // console.log(req);
    // console.log(req.params)
    const {productID} = req.params;
    const singleproduct = products.find((product)=>{
        if(product.id === Number(productID))
        return product
    })
    if(!singleproduct)
    {
        return res.status(404).send('product does not exist')
    }
    res.json(singleproduct)

    // res.sendFile(path.join(__dirname,'./data.js'))
}) 

app.get('/api/product/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params);
    res.send("helloworld");
})

//query parameters
app.get('/api/v1/query',(req,res)=>{
    console.log(req.query);
    const {search,limit} = req.query
    let sortedProducts = [...products]
    if(search)
    {
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit)
    {
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length <1)
    {
        // res.status(200).send('no products matched your search')
        return res.status(200).json({success:true,data:[]})
    }
    res.status(200).json(sortedProducts)
})
app.listen(4000,()=>{
    console.log("sever is listening on port 4000")
})