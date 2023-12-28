//function signatures


//example 1
let greet: (a: string, b:string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

//example2

let calc: (a: number, b: number, c: string) => number;

calc = (x: number, y: number, op: string): number => {
    if (op === '+') {
        return x + y;
    } else if (op === '-') {
        return x - y;
    } else {
        // Default case for unsupported operations
        console.error("Unsupported operation: " + op);
        return NaN; // or any other appropriate value
    }
};


//exampe3

let logDetails: (obj: {name: string, age: number}) => void;
type person = {name: string, age: number};

logDetails = (ninja:person) => {
    console.log(`${ninja.name} is ${ninja.age} yeas old`);
}
