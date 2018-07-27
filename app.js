console.log("Starting App");

// How to require a file inbuild or user defined    
const fs = require("fs");
const od = require("os");
const _ = require("lodash");
const notes = require('./notes.js');

console.log(_.isString(true));
console.log(_.isString("Sunil"));


var filteredArray = _.uniq(['Sunil', 1, 2, 3, 4, 'Sunil', 4, 5]);
console.log(filteredArray);
//let addNote = notes.addNote();//How to use module export

console.log("Results:"+notes.add(9,-2));
//let user = od.userInfo();
 
//fs.appendFileSync('greeting.txt', `\nHello ${user.username} and age is ${notes.age}`); 

