
document.getElementById("copy").addEventListener("click", ()=>{
    navigator.clipboard.writeText(document.getElementById("txt1").textContent)
    navigator.clipboard.readText()


})

document.getElementById("paste").addEventListener("click", () => {
    navigator.clipboard.readText().then((copytext) => {
        document.getElementById("txt2").textContent = copytext;
        // console.log(copytext);
    })
})
