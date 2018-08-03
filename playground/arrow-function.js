var square = x => x * x;

console.log(square(3));

var user = {
  name: "Sunil",
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi: ${this.name}`);
  },
  sayAlt () {
    console.log(arguments);
    console.log(`Hi: ${this.name}`);
  }
};

user.sayHi(1,2,3);
