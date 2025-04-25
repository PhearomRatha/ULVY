const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailUser = document.getElementById("emailUser");
const password = document.getElementById("password");


function userInput(param){
    document.addEventListener("input", () =>{
        console.log(param.value);
        
    })
}
userInput(firstName);
userInput(lastName)
userInput(emailUser)
userInput(password)


function validateInput(ele){
    if (ele.value.length === 0) {
        ele.style.borderColor = "red";
    } else {
        ele.style.borderColor = "green";
    }
}

function submitForm(event) {
    event.preventDefault();  
    validateInput(firstName)
    validateInput(lastName)
    validateInput(emailUser)
    validateInput(password) 
}