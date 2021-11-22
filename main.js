const icon = document.querySelector(".header-right a i");
const hamburger = document.querySelector(".hamburger-menu"); 
const iconx = document.querySelector(".hamburger-menu a i");
const prova = document.getElementById("red");
const add = document.querySelector(".adding");
const li = document.createElement("li");
const button = document.querySelector("button");
const remove = document.querySelector(".remove")

remove.addEventListener("click" , function() {
   li.innerHTML = ""; 
})

button.addEventListener("click", function() {  
    li.append("pippo");
    add.append(li);
})

icon.addEventListener('click', function() {
    hamburger.classList.toggle("active"); 
    prova.classList.add("red"); 
    hamburger.style.backgroundColor = "green"; 
});

iconx.addEventListener('click', function() {
    hamburger.classList.toggle("active");
});