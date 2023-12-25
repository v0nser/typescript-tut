//Dynamic types
let age: any;


age = true;

console.log(age);

age= 'hello'
console.log(age);

let mixed: any[] = []
;

mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);

let ninja: {
    name: any,
    age: any
};

ninja={
    name: 'vaibhav',
    age: 21
}

console.log(ninja);