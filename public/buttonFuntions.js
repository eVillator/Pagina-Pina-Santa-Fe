function pineappleMenu(idSection) {

    const productA = document.getElementById("colorA");
    productA.style.backgroundColor = "inherit";
    const productB = document.getElementById("colorB");
    productB.style.backgroundColor = "inherit";
    const productC = document.getElementById("colorC");
    productC.style.backgroundColor = "inherit";


    switch (idSection) {
        case "colorA":
            productA.style.backgroundColor = "rgba(255, 255, 204, .5)";
            break;
        case "colorB":
            productB.style.backgroundColor = "rgba(255, 255, 179, .5)";
            break;
        case "colorC":
            productC.style.backgroundColor = "rgba(255, 255, 153, .5)";
            break;
        default:
            break;
    }
}

function showAndHideNav(){
    const navList = document.querySelector(".Nav-list");
    if(navList.style.display == "none"){
        navList.style.display = "block";
    }
    else{
        navList.style.display = "none"
    } 
} 