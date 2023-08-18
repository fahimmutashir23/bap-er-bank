

// emailValue.addEventListener('keyup', function(event){
//     event.preventDefault();
//     if(event.key === "Enter"){
//         btn.click();
//     }
// })
function btnEventHandeler (){
     const emailValue = document.getElementById("loginInputemail");
     const email = emailValue.value
     const passwordValue = document.getElementById("loginInputPassword");
     const password = passwordValue.value;
 
    if(email === "fahimit23@gmail.com" && password === "fahimit23"){
         window.location.href = "login.html"
    }
    else{
     alert("your password & email are not valid")
    }
    emailValue.value  = "";
    passwordValue.value = ""; 
}


document.getElementById("loginInputBtn").addEventListener('click', btnEventHandeler)

document.getElementById("loginInputPassword").addEventListener("keyup", function(e){
     if(e.key === "Enter"){
          btnEventHandeler()
     }
})