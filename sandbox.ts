//explicit types
let character: string;

let age: number;

let isLoggedIn: boolean;

age= 30;

isLoggedIn= true;

//arrays
let ninjas: string[];

ninjas= ['abc', 'cde'];

           //or

let people: string[]=[];

people.push('shawn');

//union types
let mixed: (string|number|boolean)[] =[];
mixed.push('hello');
mixed.push(12);
mixed.push(false);
console.log(mixed);

//objects
let ninjaOne: object;
ninjaOne={name:'Ryu', belt:'black'};

let people2:{
    name: string,
    age: number,
    beltcolor: string,
}

people2 = {name: 'mario', age: 21, beltcolor: 'black'};

console.log(people2);
