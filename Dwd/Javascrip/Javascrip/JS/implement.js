const fullname = document.getElementById('name');
const gender = document.getElementById('gender');
// const text1  = document.getElementById("text1")
// const text2  = document.getElementById("text2")

function checkValidation(event){
    event.preventDefault();
    if(fullname.value.length ==  0){
        document.getElementById("Validname").style.display = "inline";
    }
    if(gender.value.length == 0){
        document.getElementById("validgendr").style.display= "inline";

    }
}