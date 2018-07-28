console.log('Starting JSON.js');

//var obj = {
// name: "Sunil"
//};

//var stringObj = JSON.stringify(obj);
//console.log(typeof stringObj);
//console.log(stringObj);

//var personString = '{"name":"Sunil", "age":5}';
//var person = JSON.parse(personString);
//console.log(typeof person);
//console.log(person);

const fs = require('fs');

var originalNotes = {
 title: 'Some title',
 body: 'Some body'
};

var originalNotesString = JSON.stringify(originalNotes);
fs.writeFileSync('notes.json', originalNotesString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
