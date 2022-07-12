
function showLogin(){
    let conteinerL = document.getElementById("login");
    let conteinerR = document.getElementById("register");
    conteinerL.style.display = "block";
    conteinerR.style.display = "none";
    conteinerL.getElementsByClassName("select").style = {
        border: 0,
        background: "transparent"
    }
}
function showRegister(){
    let conteinerL = document.getElementById("login");
    let conteinerR = document.getElementById("register");
    conteinerL.style.display = "none";
    conteinerR.style.display = "block";
    conteinerR.getElementsByClassName("select").style = {
        border: 0,
        background: "transparent"
    }
}