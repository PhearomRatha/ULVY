let number = 0;
let Num = document.getElementById("num")


function plusNumber(){
    Num.textContent=number +=1;
    if (number >5) {
        Num.classList.add("Plus")
        Num.style.color = "Green";
        
    }

}

function minusNumber(){
    Num.textContent=number -=1;
    if (number >5) {
        Num.classList.remove("Minu")
        Num.style.color = "Red";
        
    }

}
function mutiNumber(){
    Num.textContent=number *=2;
    if (number >20) {
        Num.classList.add("Muti")
        Num.style.color = "Pink";
        
    }

}

function devideNumber(){
    Num.textContent=number /=2;
    if (number >20) {
        Num.classList.remove("devide")
        Num.style.color = "Blue";
        
    }

}




const newP = document.createElement("p");
const parent = document.getElementById("parent");

newP.textContent = "Hi bru";
newP.classList= "hello bru";
newP.id = "fd";

parent.appendChild(newP)

