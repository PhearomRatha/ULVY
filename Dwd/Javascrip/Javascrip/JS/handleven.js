// const fruit_name = document.createElement("p");
// fruit_name.textContent = "inputValue.value";

// fruit_name.onclick = () => {
//     fruit_name.remove();
// };

// document.body.appendChild(fruit_name)



const inputId =  document.getElementById("input");


function getElemnt(){
    const paragraph = document.createElement("p");
    paragraph.textContent =inputId.value;
    paragraph.id = "paragraph";
    document.body.appendChild(paragraph)

    paragraph.onclick = () => { 
        paragraph.remove(); 
    }; 
}














