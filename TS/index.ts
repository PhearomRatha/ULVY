const n1: number = 10;
const s1: string= "hi";
const b1: boolean = true;
const a1: Array<number> = [1,2,3];
const a2: Array<string> = ["a","b","c"];
// declear an object with a type that has a name property of type string and an age property of type number
const o1:{name:string,age:number} = {name:"John",age:20};
// declear a function that takes two numbers and returns a number
// function sumNmber(q:number,w:number):number{
//     return q+w;
// }
// declear a variable with a type that is a union of two types

const u1: number | string = 10;
// declear a variable with a type that is any
const a3: any = "hello";
// what is interface in typescript?
// interface is a way to define a type for an object

interface Person{
    id:number;
    name:string;
    age:number;
    email:string;
    isAdmin:boolean;
}

const p1: Person = {
    id:1,
    name:"John",
    age:20,
    email:"john@gmail.com",
    isAdmin:false
};

console.log(p1.id);

