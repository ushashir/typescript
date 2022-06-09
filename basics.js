"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

function combine(input1, input2) {
    let result;
    if (typeof input1 === 'number' || typeof input2 === 'number') {
        result = +input1 + +input2;
    }
    else {
        if (typeof input1 === 'string' || typeof input2 === 'string') {
            result = input1.toString() + input2.toString();
        }
        return result;
    }
    combine(3,4);

    emum;
    Role;
    {
        ADMIN = 5, READ_ONLY = 100, AUTHOR = 200;
    }
    const person = {
        name: 'Ushahemba',
        age: 30,
        bobbies: ["sports", "cooking"],
        role: Role.ADMIN
    };
    console.log(person);
}
