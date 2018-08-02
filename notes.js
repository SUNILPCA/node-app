console.log('Starting notes.js');
const fs = require('fs');

var fetchNotes = () => {
 try { 
   var stringNotes = fs.readFileSync('note-data.json'); // Getting String values from JSON file
   return notes = JSON.parse(stringNotes); // Parsing to Object from JSON file data return notes
 } catch (e) {
   console.log('File Not Found');
   return [];
 }
};

var saveNotes = (notes) => {
 fs.writeFileSync('note-data.json', JSON.stringify(notes)); // Storing data to file after converting to string
};
 
var addNotes = (title, body) => {
 console.log('Title', title, 'Body', body);
 var notes = fetchNotes();
 var note = {
  title,
  body
 };


 var duplicateNotes = notes.filter((note) => note.title === title);
 if(duplicateNotes.length === 0){
   notes.push(note); 
   saveNotes(notes);
   return note; 
 }
 
};

var getNotes = (title) => {
 console.log('Reading notes');
 var notes = fetchNotes();
 var readingNotes = notes.filter((note) => note.title === title);
 return readingNotes[0];
};

var getAll = () => {
 console.log('Getting all the notes');
};

var removeNotes = (title) => {
 console.log('Removing notes', title);
 var notes = fetchNotes();
 var removedNotes = notes.filter((note) => note.title != title);
 saveNotes(removedNotes);
 return notes.length != removedNotes.length;
};

module.exports = {
 addNotes,
 removeNotes,
 getAll,
 getNotes
};
