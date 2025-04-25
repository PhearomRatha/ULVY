
const ol = document.getElementById("myList");

function createNewli(){
    const inputValue = document.getElementById("itemInput").value;
    const li = document.createElement("li");
    li.textContent= inputValue;
    ol.appendChild(li);
    
}