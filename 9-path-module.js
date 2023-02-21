const path = require("path")
console.log(path.sep);

//join the path 
const filepath = path.join('/content','subfolder','test.txt')
console.log(filepath);

// returns the lastname in the path 
const base = path.basename(filepath)
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);