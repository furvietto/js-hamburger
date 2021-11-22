const icon = document.querySelector(".fas.fa-bars");
const hamburger = document.querySelector(".hamburger-menu"); 

icon.addEventListener('click', function() {
    hamburger.classList.add(".active");   
})