let A = 10;
let B = 20;
const  operator = "-";
let result = A - B ;
//exercise 1

console.log(`The result is ${result}`);

//Exercise 2

if(result >= 0){
    console.log(`You result: ${result} is positive!`)
}
else{
    console.log(`You result: ${result} is Nagative!`)
}

//Exercise 3
let age = 15;

if (age <= 12 ){
    console.log(`Your age ${age} years old.so you are a chile `)
}else if(age <= 19){
    console.log(`Your age ${age} years old.so you are a teenager `)

}else if(age <= 59){
    console.log(`Your age ${age} years old.so you are an adult `)

}else if(age >= 60 ){
    console.log(`Your age ${age} years old.so you are a senior `)
}