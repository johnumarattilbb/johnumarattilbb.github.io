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
link.addEventListener("mouseover",mouseOver);
link.addEventListener("mouseout",mouseOut);
titles.forEach(function(title) {
    title.addEventListener("mouseover", mouseOver);
    title.addEventListener("mouseout", mouseOut);
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
function mouseOver(){
    this.style.color="#222";
}
function mouseOut(){
    this.style.color = "";
}
