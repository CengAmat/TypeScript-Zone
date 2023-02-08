"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
console.log(merge({ name: 'Amat' }, { age: 30 }));
