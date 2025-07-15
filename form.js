const username = document.querySelector("#username")
const password = document.querySelector("#password")
const button = document.querySelector("button")
const message = document.querySelector("#message")

button.addEventListener("click", () =>{
    if(username.value === " " || password.value === ""){
        message.style.color = "red"
        message.textContent = "Please fill the input"
        return;
    }



    if(username.value === "Yoonis" & password.value === "1234"){
        message.style.color = "green"
        message.textContent = "Login Succes"
    }
    else{
        message.style.color = "red"
        message.textContent = "Error: Invalid Username or Password"
    }
})

