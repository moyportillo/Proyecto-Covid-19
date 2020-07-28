var hamburgerBtn = null;
var menu = null;
var move = null;
var isMenuHidden = true;

document.addEventListener("DOMContentLoaded", page_load);

function page_load(e){
    hamburgerBtn = document.querySelector("header nav section");
    menu = document.querySelector("header nav ul");
    hamburgerBtn.addEventListener("click", hamburguer_clicked);
}

function hamburguer_clicked(e){
    e.preventDefault();
    e.stopPropagation();
    if(isMenuHidden){
        menu.className = "";
    }
    else{
        menu.className = "hidden";
        hamburgerBtn.className = "hamburguer move-menu";
    }
    isMenuHidden = !isMenuHidden;
 }
