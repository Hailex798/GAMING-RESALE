var menuT = document.getElementById("menuList");

menuT.style.maxHeight = "0px"

function toggleMenu(){
    if(menuT.style.maxHeight == "0px"){
        menuT.style.maxHeight = "200px"
    }else{
        menuT.style.maxHeight = "0px"
    }
}