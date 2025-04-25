


// function remove(){
//     const pa = document.getElementById("header");
//     const parent = document.getElementById("parent"); 
//     parent.removeChild(pa)
// }



// use for make section
const section = document.createElement("section");
// use for make div
const div1   = document.createElement("div")
const div2   = document.createElement("div")
//use for make p
const para1  = document.createElement("p");
const para2  = document.createElement("p");
const para3  = document.createElement("p");
const para4  = document.createElement("p");

// give section id
section.id = "parent";  
//give div id 
div1.id   = "child1"
div2.id   = "child2"
// give p id
para1.id = "grandchild1";
para2.id = "grandchild2";
para3.id = "grandchild3";
para4.id = "grandchild4";

// give text to p text 
para1.textContent = "paragraph1";
para2.textContent = "paragraph2";
para3.textContent = "paragraph3";
para4.textContent = "paragraph4";

div1.appendChild(para1)
div1.appendChild(para2)
div2.appendChild(para3)
div2.appendChild(para4)

section.appendChild(div1)
section.appendChild(div2)
document.body.appendChild(section);





