const {createReadStream}= require('fs')

const stream = createReadStream('./content/big.txt',{highWaterMark:90000})

//default 64kb
//last buffer -remainder
//highwaterMark -control size
// const stream = createReadStream('./content/big.txt',{highWaterMark:90000})
// const stream = createReadStream('./content/big.txt',{encoding :utf8})

stream.on('data',(result)=>{
    console.log(result);
})

stream.on('error',(err)=>{
    console.log(err)
})