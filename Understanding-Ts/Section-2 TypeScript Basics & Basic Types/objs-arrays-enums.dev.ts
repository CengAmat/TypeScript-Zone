// Explicitly defined object type
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];

// } = {
//     // const person = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking '],
//     role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 5, READ_ONLY, AUTHOR }
console.log(Role.AUTHOR)

const person2 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking '],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favouriteActivities: string[];
favouriteActivities = ['Swimming'];

console.log(person2.name)

for (const hobby of person2.hobbies) {
    console.log(hobby);
    // console.log(hobby.map()); // !!! ERROR !!!
}

if (person2.role === Role.ADMIN) {
    console.log('is admin')
}

// let val: {} = 'some text';
// let val: {} = null;
let val: Record<string, string> = {
    name: 'Max',
    1: '30',
};
val.name = 'Max';


const someObject = {};