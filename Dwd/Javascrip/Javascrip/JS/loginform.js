    //    const email = document.getElementById("email");
    //     const psw = document.getElementById("psw");
    //     const checkbox = document.getElementById("checkbox");
    //     const showIcon = document.querySelector('.show-password-icon');
    //     const hideIcon = document.querySelector('.hide-password-icon');

    //     function checkBox() {
    //         if (checkbox.checked) {
    //             psw.type = "text";
    //         } else {
    //             psw.type = "password";
    //         }
    //     }

    //     function checkPsw() {
    //         if (psw.type === "password") {
    //             psw.type = "text";
    //             showIcon.style.display = "none";
    //             hideIcon.style.display = "inline";
    //         } else {
    //             psw.type = "password";
    //             showIcon.style.display = "inline";
    //             hideIcon.style.display = "none";
    //         }
    //     }



    //     function validateInput(ele){
           
    //         if (ele.value.length === 0) {
    //             ele.style.borderColor = "rgb(128, 0, 0)";
    //             ele.style.backgroundColor = "rgb(255, 239, 239)";
    //         } else {
    //             ele.style.borderColor = "blue";
    //             // ele.style.backgroundColor = "rgb(203, 226, 181)";
    //         }
    //     }
        
    //     function submitForm(event) {
    //         event.preventDefault();  
    //         validateInput(psw)
    //         validateInput(email)
            
    //     }


    //     function userInput(param){
    //         document.addEventListener("input", () =>{
    //             console.log(param.value);
                
    //         })
    //     }
    //     userInput(psw);
    //     userInput(email)




       const email = document.getElementById("email");
        const psw = document.getElementById("psw");
        const checkbox = document.getElementById("checkbox");
        const showIcon = document.getElementById('show-password-icon');
        const hideIcon = document.getElementById('hide-password-icon');

        function togglePassword(isShowPassword){
            if(isShowPassword){
                hideIcon.style.display ="none";
                showIcon.style.display= "block";
                psw.type="password"
            }
            else{
                hideIcon.style.display ="block";
                showIcon.style.display= "none";
                psw.type="text"
            }
        }
