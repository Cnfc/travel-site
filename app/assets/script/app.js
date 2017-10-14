var $ = require('jquery');

import Person from './modules/Person';

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes $0 in texes. ");
  }
}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Doe", "red");
jane.greet();
//jane.payTaxes();

$("h1").remove();
