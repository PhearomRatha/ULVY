const dbList = document.getElementById("dplist");
let toggleMenu = false;

function toggleDisplay(){
    toggleMenu = !toggleMenu;
    toggleMenu ? showDropDown() : hideDropDown();
}


function showDropDown(){
    dbList.style.display ="block";
    // dbList.style.backgroundColor ="Red"
}

function hideDropDown(){
    dbList.style.display = "none";
}