// function doubleClick(){
//     console.log("perform db click")
// }
// document.getElementById("para").addEventListener("dblclick",doubleClick())

// const p = document.getElementById("para")
// document.getElementById("para").addEventListener("mouseover",() =>{
//     console.log("mouse over");

//     p.style.backgroundColor="red";

// })

// const p1 = document.getElementById("para")
// document.getElementById("para").addEventListener("mouseout",() =>{
//     console.log("mouse out");
//     p1.style.backgroundColor="pink"


// })


// const p2 = document.getElementById("para")
// document.getElementById("para").addEventListener("dblclick",() =>{
//     console.log("clicked");
//     p2.onclick = () => { 
//         p2.remove(); 
//     }; 

// })


const button = document.createElement("button");
button.textContent= "click";
button.addEventListener('click', () => {
    console.log('Button clicked!');
  });
  

  document.body.appendChild(button);



  

