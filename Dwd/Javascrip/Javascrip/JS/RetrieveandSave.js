// Local storage
const array = [1, 2, 3, 4, 5]; 

function SaveArray() {
    localStorage.setItem("arr", JSON.stringify(array));
    console.log(typeof localStorage.getItem("arr")); 
}

function RetrievenArray() {
    const newObj = JSON.parse(localStorage.getItem("arr"));
    console.log(typeof newObj); 
}

// Homework two
const userInput = document.getElementById("UserInput");

function SaveUserInput() {
    localStorage.setItem("userInput", userInput.value); 
    console.log(userInput.value); 
}



