const icon = document.querySelector(".header-right a i");
const hamburger = document.querySelector(".hamburger-menu"); 
const iconx = document.querySelector(".hamburger-menu a i");





icon.addEventListener('click', function() {
    hamburger.classList.add("active");  
});

iconx.addEventListener('click', function() {
    hamburger.classList.remove("active");

});