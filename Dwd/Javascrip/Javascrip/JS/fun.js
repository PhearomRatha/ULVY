function getValuefromInput(id){
    const element = getTagById(id);
    return element.value;
}

function getTagById(id){
    return document.querySelector(id);
}
function changeBorderStyle(id){
    const element = getTagById(id);
    element.style.border = "2px solid pink";
}

function changeImageSrc(id){
    const image = getTagById(id);
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6dNRhjl4UF5NmyZS8NrtdUf0wWv4UD0iqB1DgjxQQvvGxZtrrYQAsDn2-yYGmAOaXQ&s"


}

const btnDisplayValue = getTagById("#btnDisplayValue");
// after user click it 
btnDisplayValue.addEventListener("click", () => {
   changeBorderStyle("#fn");
   changeBorderStyle("#ln");
   changeImageSrc("#img-url")
    
    
})

