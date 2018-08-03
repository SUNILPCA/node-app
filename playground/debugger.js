// Debugging node application
// command : node inspect <followed by filename>
// n (next line debug)
// c (continue end of the file)
// debugger (middle for any function or file for debugger break point)

var person = {
  name: "Sunil"
};

person.age = 34;

debugger;

person.name = "Kranthi";

console.log(person);
