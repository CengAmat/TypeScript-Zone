// const button = document.querySelector('button');

// function clickHandler(message: string) {
//     console.log("Clicked! " + message);
// }

// if (button) {
//     button.addEventListener('click', clickHandler.bind(null, "You're welcome"))
// }

// default parameters
// const add = (a: number, b: number = 1) => a + b;

// type inference with arrow functions
// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button')

// if (button) {
//     button.addEventListener('click', event => console.log(event))
// }

// printOutput(add(2));


// spread operator
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
    firstName: 'Max',
    age: 30
}

const copiedPointer = person;

// copiedPointer.age = 29;
// console.log(person);

const copiedPerson = { ...person };
copiedPerson.age = 29;
console.log(copiedPerson);
console.log(person);



const add2 = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0)
}

const addedNumbers = add2(5, 10, 2, 3.7);
console.log(addedNumbers);

// array destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

// object destructuring
const { firstName: userName2, age } = person;
console.log(userName2, age)