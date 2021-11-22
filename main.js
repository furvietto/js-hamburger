const icon = document.querySelector(".fas.fa-bars");
const hamburger = document.querySelector(".hamburger-menu"); 
const iconx = document.querySelector(".fas.fa-times");

icon.addEventListener('click', function() {
    hamburger.classList.add("active");   
});

iconx.addEventListener('click', function() {
    hamburger.classList.remove("active");
});