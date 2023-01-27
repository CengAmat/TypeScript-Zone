// const button = document.querySelector('button');

// function clickHandler(message: string) {
//     console.log("Clicked! " + message);
// }

// if (button) {
//     button.addEventListener('click', clickHandler.bind(null, "You're welcome"))
// }

// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button')

// if (button) {
//     button.addEventListener('click', event => console.log(event))
// }

// printOutput(add(2));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
    name: 'Max',
    age: 30
}

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0)
}

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers)