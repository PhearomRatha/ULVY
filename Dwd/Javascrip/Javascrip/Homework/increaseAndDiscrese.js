let  box =  document.getElementById("box")
function increseBox(){
        box.style.width = `${ parseInt(box.style.width) + 300}px`;
        box.style.backgroundColor="red"
}
function dicreseBox(){
        box.style.width = `${ parseInt(box.style.width) - 100}px`;
        box.style.backgroundColor="blue"
}
