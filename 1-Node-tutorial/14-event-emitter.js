const EventEmitter = require("events")

const customEmitter = new EventEmitter()
// on - listen for an event
// emit - emit an event
customEmitter.on('response',(name,id)=>{
    console.log(`data received use ${name} with id:${id}`)
})
customEmitter.on('response',()=>{
    console.log(`data received `)
})

customEmitter.emit('response','raju',172);