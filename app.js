console.log("Starting App");

// How to require a file from library or user defined    
const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require('./notes.js');

// lodash functions
console.log(_.isString(true));
console.log(_.isString("Sunil"));
var filteredArray = _.uniq(['Sunil', 1, 2, 3, 4, 'Sunil', 4, 5]);
console.log(filteredArray);

// user defined function from notes.js
// reading arguments from command prompt or env. veriable
var command = process.argv[2];
console.log('Command:', command)
console.log(process.argv);

if(command === 'add') {
 notes.addNotes();
} else if(command === 'read') {
 notes.readNotes();
} else if(command === 'list') {
 notes.listNotes();
} else if(command === 'remove') {
 notes.removeNotes();
} else {
 console.log('Command not recongized');
}
