console.log("Starting App");

// How to require a file from library or user defined    
const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require('./notes.js');

// lodash functions
//console.log(_.isString(true));
//console.log(_.isString("Sunil"));
//var filteredArray = _.uniq(['Sunil', 1, 2, 3, 4, 'Sunil', 4, 5]);
//console.log(filteredArray);

// user defined function from notes.js

// reading arguments from yargs package
var argv = yargs.argv;

// reading arguments from command prompt or env. veriable
var command = argv._[0];
console.log('Command:', command)
//console.log('Process',process.argv);
console.log("Yargs:", argv);

if(command === 'add') {
 var note = notes.addNotes(argv.title, argv.body);
 if(note) { 
   console.log('Note Created');
   console.log(`Title: ${note.title}`);
   console.log(`Body: ${note.body}`);
 } else {
   console.log(`${argv.title} is already exists}`);
 }
} else if(command === 'read') {
 var note = notes.getNotes(argv.title);
 if(note) {
   console.log('Reading Notes');
   console.log(`Title: ${note.title}`);
   console.log(`Body: ${note.body}`);
 } else {
   console.log('Notes not found');
 }
} else if(command === 'list') {
 notes.getAll();
} else if(command === 'remove') {
 var noteRemoved = notes.removeNotes(argv.title);
 var message = noteRemoved ? 'Note removed Success' : 'Note not found';
 console.log(message);

} else {
 console.log('Command not recongized');
}
