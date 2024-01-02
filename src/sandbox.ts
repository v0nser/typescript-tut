//classes

class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        return `Cliente: ${this.client}\nDetalle: ${this.details}\nImporte: $${this.amount}`;
    }
}

const invoice = new Invoice("mario", "work on the mario", 250);
console.log(invoice);

let invoices: Invoice[] = [];

invoices.push(invoice);

console.log(invoices);