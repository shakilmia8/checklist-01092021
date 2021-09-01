// 1


const company = {
    name: 'php group',
    money: 500000000,
    employee: { name: 'MD Rahim Akbor', salary: 50000, degignation: 'Managr' },
    products: ['php deo tin', 'php still', 'php sheet', 'php ciment'],
    party: function (expence) {
        this.employee.salary = this.employee.salary - expence;
        // console.log(this.employee);
        return this.employee.salary;
    }

};

const bigParty = company.party(10000);
// console.log(bigParty);


// 2

const personality = `
Hi! ${company.employee.name}, 
How are your? 
Now you selling product ${company.products[1]}, ok & take your salary ${company.employee.salary}.`;
// console.log(personality);


// 3.1

const number = () => 89;
// console.log(number());

// 3.2

const divided = x => x / 7;
// console.log(divided(56));

// 3.3

const sum = (x, y) => (x + y) / 2;
// console.log(sum(4, 6));

// 3.4

const result = (a, b) => {
    const c = a + 7;
    const d = b + 7;
    return c + d;
};
// console.log(result(2, 1));

// 4

const numbers = [7, 14, 21, 28, 35];
const output = numbers.map(number => number / 7);
// console.log(output);

// 5 summary of map, forEach, filter, find


// 6
const student = { id: 1, name: 'Sobuj', address: 'Dhaka' };
const { address } = student;
// console.log(address);

const arr = [34, 56, 78, 32, 13];
const [first, balance] = arr;
// console.log(balance);

