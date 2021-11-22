const icon = document.querySelector(".header-right a i");
const hamburger = document.querySelector(".hamburger-menu"); 
const iconx = document.querySelector(".hamburger-menu a i");
const red = document.querySelector(".hamburger-menu ul li:nth-child(1) a");
const red1 = document.querySelector(".hamburger-menu ul li:nth-child(2) a");
const red2 = document.querySelector(".hamburger-menu ul li:nth-child(3) a");
const red3 = document.querySelector(".hamburger-menu ul li:nth-child(4) a");

const add = document.querySelector(".adding");
const li = document.createElement("li");
const button = document.querySelector("button");
const remove = document.querySelector(".remove");
const buttonRed = document.querySelector(".color");
const addRemove = document.getElementById("addRemove")

addRemove.addEventListener("click", function() {
    const ciao = red.className;
    const ciao1 = red1.className;
    const ciao2 = red2.className;
    const ciao3 = red3.className;
    
    if (ciao == "red" ) {
        red.classList.remove("red")
        red1.classList.remove("red")
        red2.classList.remove("red")
        red3.classList.remove("red")
    } else {
        red.classList.add("red")
        red1.classList.add("red")
        red2.classList.add("red")
        red3.classList.add("red")
    }
})

buttonRed.addEventListener("click", function() {
     red.classList.add("red");
     red1.classList.add("red");
     red2.classList.add("red");
     red3.classList.add("red");
})

remove.addEventListener("click" , function() {
   li.innerHTML = ""; 

})

button.addEventListener("click", function() {  
    li.append("pippo");
    add.append(li);
})

icon.addEventListener('click', function() {
    hamburger.classList.add("active"); 
    // prova.classList.add("red"); 
    hamburger.style.backgroundColor = "green"; 
});

iconx.addEventListener('click', function() {
    hamburger.classList.remove("active");
    red.classList.remove("red");
     red1.classList.remove("red");
     red2.classList.remove("red");
     red3.classList.remove("red");

});