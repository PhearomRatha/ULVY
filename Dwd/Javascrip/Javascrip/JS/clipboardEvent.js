// navigator.clipboard.writeText("paste")

document.getElementById("txt").addEventListener("click", ()=>{
    navigator.clipboard.writeText(document.getElementById("txt").textContent)
    navigator.clipboard.readText()


})

document.getElementById("paste").addEventListener("click", ()=>{
    navigator.clipboard.readText().then((copyText) =>{
        document.getElementById("paste").textContent += copyText;
    })
    


})