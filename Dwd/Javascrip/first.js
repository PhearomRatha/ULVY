// console.log("Hello map")

// let   x  = 10;
//       x += 10;

// const fn= [1,2,3]
//       fn[0] = 0
// console.log(x);
// console.log(fn);

// const text = "Hello, world!";
// const searchItem = "world";
// const position = text.indexOf(searchItem);

// if(position !== -1){
//     console.log(`found "${searchItem}" at position ${position}`);

// }else{
//     console.log(`"${searchItem}" not found`);
// }

const text = "javascrpt is awesome!";
const searchItem = "awesome";
const found = text.includes(searchItem);

if(found){
    console.log(`The text contains "${searchItem}"`);
}else{
    console.log(`"${searchItem}" not found.`);
}
