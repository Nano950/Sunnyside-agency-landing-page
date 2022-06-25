let count = 0;

function openMenu() {
    let menu = document.getElementById("menu"); 
    menu.style.display = "block"; 
    count += 1;
    if (count == 2) {
        menu.style.display = "none";
        count = 0;
    }
};