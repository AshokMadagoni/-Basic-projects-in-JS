let password=document.querySelector("input")
let icon=document.getElementById("icon")

icon.onclick=function(){
    if(password.type==="password"){
        password.type="text"
        icon.className="fa-solid fa-eye"
    }
    else{
        password.type="password"
        icon.className="fa-solid fa-eye-slash"
    }
}