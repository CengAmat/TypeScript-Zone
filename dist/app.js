"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Amat', hobbies: ['Sports'] }, { age: 30 });
