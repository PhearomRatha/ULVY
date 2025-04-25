// local storage
const str ={id:1};

localStorage.setItem("obj",JSON.stringify(str));
console.log(typeof localStorage.getItem("obj"));

const newObj = JSON.parse(localStorage.getItem("obj"));
console.log(typeof newObj);


//sesction storage


function setItemToSS(){
    sessionStorage.setItem("key","Value")
}


// incoke function or call function

function greet(){
    console.log(("Hello bru"));
    
}
greet();

// reference function
function onClick(){
}
document.getElementById("d").addEventListener("click",onclick)

    