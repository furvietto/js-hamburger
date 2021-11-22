const icon = document.querySelector(".header-right a i");
const hamburger = document.querySelector(".hamburger-menu"); 
const iconx = document.querySelector(".hamburger-menu a i");
const prova = document.getElementById("red");

icon.addEventListener('click', function() {
    hamburger.classList.toggle("active"); 
    prova.classList.add("red"); 
    hamburger.style.background-color = "red"; 
});

iconx.addEventListener('click', function() {
    hamburger.classList.toggle("active");
});