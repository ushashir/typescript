import { type } from "os";

type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable){
    let result;
    if(typeof input1 === 'number' || typeof input2 === 'number'){
        result = +input1 + +input2;
    } else {
        if(typeof input1 === 'string' || typeof input2 === 'string'){
            result = input1.toString() + input2.toString(); 
    }
    return result;
}

emum Role {ADMIN =5, READ_ONLY = 100, AUTHOR = 200}
const person:  {
    name: string;
    age: number;
} = {
    name: 'Ushahemba',
    age: 30,
    bobbies: ["sports", "cooking"],
    role: Role.ADMIN
};
console.log(person);