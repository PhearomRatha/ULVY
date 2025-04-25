// 1. Sum of digits
// console.log(sumOfDigits(123)); // 6

// const num = 123;
// const text= num.toString()
// let sum = 0;
// for (let i = 0; i < text.length; i++) {
//     const toInt = parseInt(text[i])
//   sum = sum + toInt
// }

// console.log(`Your result is ${sum}`);

//2.Write a function that converts a string to title case. Title case means the first letter of each word is capitalized.
//console.log(titleCase("hello world")); // "Hello World"

// const word = "it is time to buid your legend";
// let currentResult = ""
// let result = " ";
// for (let index = 0; index < word.length; index++) {
//     const element = word[index];
//     if(element !== " "){
//         currentResult = currentResult + element;
//     }else{
//         if(currentResult.length > 0 ){
//             console.log(currentResult);
            
//             result = result + " " + currentResult[0].toUpperCase() +  currentResult.substring(1, currentResult.length)
//             currentResult = "";
//         }
    
//     }
    
// }
// console.log(result);




// function toTitleCase(str) {
//     return str.replace( 
//         /\w\S*/g,
//       text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
//     );
//   }
  
//   console.log(`"${word}" becomes "${toTitleCase(word)}"`);




// 3.Write a function that converts a string from camelCase to kebab-case.
//   console.log(camelToKebab("camelCaseString")); // "camel-case-string"

// const  = 'camelCaseString'




//convert letter that before space has Upper.letter
// const text = " I am badgirl hell oo tt ";

// let result = "";
// let letterNext = true;

// for (let i = 0; i < text.length; i++) {
//     if (letterNext && text[i] !== ' ') {
//         result += text[i].toUpperCase();
//         letterNext = false;
//     } else {
//         result += text[i];
//     }
    
//     if (text[i] === ' ') {
//         letterNext = true;
//     }
// }

// console.log(result);

// const array = [1, 6, 2, 4, 3];
// let min = array[0];

// for (const number of array) {
//     if (number < min) {
//         min = number;
//     }
// }

// console.log(min);


