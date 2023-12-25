//explicit types
var character;
var age;
var isLoggedIn;
age = 30;
isLoggedIn = true;
//arrays
var ninjas;
ninjas = ['abc', 'cde'];
//or
var people = [];
people.push('shawn');
//union types
var mixed = [];
mixed.push('hello');
mixed.push(12);
mixed.push(false);
console.log(mixed);
//objects
var ninjaOne;
ninjaOne = { name: 'Ryu', belt: 'black' };
var people2;
people2 = { name: 'mario', age: 21, beltcolor: 'black' };
console.log(people2);
