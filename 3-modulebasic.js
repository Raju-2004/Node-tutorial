// modules
// common js ,every file is module (by default)
// modules - Encapsulated code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor")
require("./7-mind-grenade")
console.log(data);
sayHi("raju")
sayHi(names.john)
sayHi(names.peter) 