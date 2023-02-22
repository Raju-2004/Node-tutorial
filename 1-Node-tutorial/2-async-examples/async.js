const {readFile,writeFile} = require("fs")
const util = require("util")
const  readFilePromise = util.promisify(readFile);
const  writeFilePromise = util.promisify(writeFile);

// const getText = (path)=>{
//     return new Promise((res,rej)=>{
//         readFile(path,'utf-8',(err,data)=>{
//             if(err)
//             {
//                 rej(err);
//             }
//             else{
//                 res(data);
//             }
//         })
//     })
// }

// getText("./content/first.txt").then(result =>{
//     console.log(result)
// }).catch((err)=>{console.log(err)})

const start = async()=>{
    try{
        const first = await readFilePromise('./content/first.txt','utf8')
        const second = await readFilePromise('./content/second.txt','utf8')
        await writeFilePromise('./content/result-mind-grenade.txt',`this is awesome ${first} ${second}`)
        console.log(first, second)
    }
    catch(err)
    {
        console.log(err)
    }
}
start()