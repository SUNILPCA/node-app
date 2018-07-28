console.log('Starting notes.js');

var addNotes = () => {
 console.log('Adding notes');
};

var readNotes = () => {
 console.log('Reading notes');
};

var listNotes = () => {
 console.log('Listing all the notes');
};

var removeNotes = () => {
 console.log('Removing notes');
};

module.exports = {
 addNotes,
 removeNotes,
 listNotes,
 readNotes
};
