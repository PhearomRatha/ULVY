// const str = "Hello world";
// let  result = " ";
// const lasti = str.length
// for(let i=0; i<str.length; i++){
//     if(i !== 0 && i !== lasti - 1) 
//     result += str[i]
// }

// console.log(result);


// const Digit = "Hello everyone";
// let  result1 = " ";

// for(let i=0; i<Digit.length; i++){
//     if(Digit[i] !== "o"){
//         result1 = result1 + Digit[i];
//     }
// }
// console.log(result1);


// const userInput = [1,2,3,4,5,6,7,8,9,10,11];
// let  sum =  0;
// for(let i=0; i<userInput.length; i++){
//     sum = sum + userInput[i];
// }
// console.log(sum);



// const Digit1 = "Hello world";
// let isfound = 0;
// let firstindex0 = 0;
// for(let i=0; i<Digit1.length; i++){
//     if(Digit1[i] == "o" && isfound == 0){
//         firstindex0 = i;
//         isfound = 1;

//     }
// }
// console.log(firstindex0)


//Exercise 1
// const Digit = "Hello";
// let result = "";
// for (let i = Digit.length - 1; i >= 0; i--) {
//     result = result + Digit[i];
// }
// console.log(result);


// const Digit2 = "Hello";
// const lengthOfDigit = (Digit2.length) - 1;
// let result2 = " ";
// for (let index = 0; index < Digit2.length; index++) {
//     result2 =result2 + Digit2[lengthOfDigit - index]
    
// }
// console.log(result2);


//Exercise 2
// const Digit1 = "Hello";
// const startIndex = 0;
// const endIndex = 3;
// let result1 = " ";
// for (let i = 0; i < Digit1.length; i++) {
//     if (i >= startIndex && i <= endIndex) {
//         result1 = result1 + Digit1[i];
//     }
// }
// console.log(result1); 
 

// const Digit3 = "Hello";
// let result3= " ";
// for (let index = 0; index < Digit3.length; index++) {
//     if(index < 4){
//         result3 += Digit3[index]
//     }
    
// }
// console.log(result3);



// const Digit = "H09876543234567890e2-2o";
// let result = 0;
// for (let index = 0; index < Digit.length; index++) {
//     const checkNumber = Number(Digit[index]);
//     if(checkNumber >=0){
//         result = result + checkNumber;
//     }
    
// }
// console.log(result);


//Exanple2
// const Digit = "H012345675o";
// let result = 0;
// for (let index = 0; index < Digit.length; index++) {
//     const checkNumber = Number(Digit[index]);
//         if( Number(Digit[index+1] > Number(Digit[index]))){
//             result = Number(Digit[index+1])

//         }
// }
// console.log(result);






// 3. Generate a New String with Each Digit Doubled
//  console.log(doubleDigits("123")); // Output: "112233"

// const Digit ="123"
// let doubleNumber = "";
// for (let index = 0; index < Digit.length; index++) {
//     const isNumber = Number(Digit[index]);
//     if(isNumber >= 0){
//         doubleNumber = doubleNumber + Digit[index] + Digit[index] ;
//     }
    
// }
// console.log(doubleNumber)




// 4. Sub string betwen [] only
//output poo

// console.log('hi[poo]k[dfd') 
const text = "hello [wrold] [pp";

let openBracket = false;
let closeBracket = false;

let result = "";
let currentResult = "";

for (let index = 0; index < text.length; index++) {

    if (openBracket && text[index] != ']') {
        currentResult += text[index]
    } else if (text[index] == '[') {
        openBracket = true;
    } else if (text[index] == ']') {
        openBracket = false;
        result += currentResult;
        currentResult = '';
    }

}

console.log(result);




