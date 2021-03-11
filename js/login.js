function login(){
    user=document.getElementById("Username").value
    password=document.getElementById("Password").value
    if(user ==  "admin" && password == "admin"){
        window.open("user_screen.html")
    }
}
