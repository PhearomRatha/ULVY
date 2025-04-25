// get text cotetent in html tag
function getTextContent(param){
    const element = getTagById(param);
    return text  = element.textContent;
 }

//  get element by id
function getTagById(params){
    return element = document.getElementById(params)
}

// //get element by class name
function getTagByClass(params){
    return document.querySelector(params);
}

 //get class name in html tage 
function getClassName(params){
    const element = getTagById(params);
    const className = element.className;
    return className;
}

// get id in html tage 
function getID(params){
    const element = document.querySelector(params);
    return element.id;

}


console.log(getTextContent('hi'));
console.log(getTagById('hi'));
console.log(getTagByClass('.greeting'));
console.log(getClassName('hi'));
console.log(getID('.greeting'));