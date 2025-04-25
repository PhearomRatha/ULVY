
// const text = 3;
// const getTagById = document.getElementById("My"); 
// getTagById.textContent = text;
// const textContent = getTagById.textContent;
// const className = getTagById.classList;

// console.log(textContent);
// console.log(getTagById);
// console.log(className);

// get element by id
function getById(param){
     const element  = document.getElementById(param)
     return element;
}

// get content
function getContent(My){
    const element = getById(My)
    const text = element.textContent;
    return text;
}
//get className
function getClassName(My){
    const element = getById(My);
    const className = element.className;
    return className;
}

function queryClassName(My){
    return document.querySelector(My);

}

function getTextContent(My){
    const element = queryClassName(My);
    return element.textContent;

}


console.log(getById('My'));
console.log(getContent('My'));
console.log(getClassName('My'));
console.log(queryClassName(".babe"));
console.log(getTextContent(".babe"));








