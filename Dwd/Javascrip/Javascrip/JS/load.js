const img = document.getElementById("img");

img.addEventListener("load", ()=>{
    console.log("img display");
    
})

img.addEventListener("error", ()=>{
    console.log("img error");
    
})

if(navigator.onLine){
    alert("online")
}else{
    alert("offline")
}


function navigatorToOtherPage(){
    window.location.href="linkbyjs.html"
}

console.log(window.location.hostname);

console.log(window.location.protocol);

console.log(window.location.pathname);


//key,value

localStorage.setItem("Dara","Sophi")
localStorage.setItem("nath","neth")
localStorage.setItem("nath","ratha")

//get value from local storage by key
const value = localStorage.getItem("Dara")
// localStorage.clear()
// localStorage.removeItem("nath")
console.log(value);
