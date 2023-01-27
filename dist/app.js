"use strict";
const add = (a, b = 1) => a + b;
const printOutput = output => console.log(output);
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => console.log(event));
}
printOutput(add(2));
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
const person = {
    name: 'Max',
    age: 30
};
const copiedPerson = Object.assign({}, person);
