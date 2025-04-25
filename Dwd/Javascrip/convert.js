const text = "neeDYOU";
let result = "";


for (let index = 0; index < text.length; index++) {
    const convert = text[index];
    if (convert == convert.toLowerCase()) {
        result = result +  convert.toLocaleUpperCase();
        //testing
        // console.log(result)
    } else {
        result = result +  convert.toLowerCase();
        //testing
        // console.log(result)
    }
}

console.log(result); 
