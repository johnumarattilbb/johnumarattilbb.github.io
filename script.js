document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

//variable declarations (step 1)//
var header=document.querySelector("#title-desc");
var link=document.querySelector(".link");
var titles=document.querySelectorAll(".article-title");

//event listeners (step 3)//
setTimeout(contentChange1,5000);
setTimeout(contentChange2,10000);
setTimeout(contentChange3,15000);
link.addEventListener("mouseover",titleBlack);
link.addEventListener("mouseout",titleRed);
titles.forEach(function(title) {
    title.addEventListener("mouseover", titleBlack);
    title.addEventListener("mouseout", titleRed);
});

//function definitions (step 2)//
function contentChange1(){
    header.textContent = "lets it ride on red.";
}
function contentChange2(){
    header.textContent = "slept here.";
}
function contentChange3(){
    header.textContent = "always leaves room for jello.";
}
function titleBlack(){
    this.style.color="#222";
}
function titleRed(){
    this.style.color = "";
}
