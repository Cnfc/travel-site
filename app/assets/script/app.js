function Person(fullName, favColor) {
  this.name = fullName;
  this.color = favColor;
  this.greet = function() {
    console.log("Hello, my name is " + this.name + "and my favorite color is " + favColor + ".");
  }
}



var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Doe", "green");
jane.greet();
