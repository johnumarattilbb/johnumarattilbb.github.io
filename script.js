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
//var link=document.querySelector("#link");
var titles=document.querySelectorAll(".article-title");

var haha=document.querySelector("#dog-scri");


//event listeners (step 3)//
setTimeout(contentChange1,5000);
setTimeout(contentChange2,10000);
setTimeout(contentChange3,15000);
//link.addEventListener("mouseover",mouseOver);
//link.addEventListener("mouseout",mouseOut);
titles.forEach(function(title) {
    title.addEventListener("mouseover",mouseOver);
    title.addEventListener("mouseout",mouseOut);
});

haha.addEventListener("mouseover",mouseOver);
haha.addEventListener("mouseout",mouseOut);

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
    if (this.id === "dog-scri") {
        this.textContent="His name was Cooper and in this picture he’s three years old. He was my first Welsh Springer Spaniel. Cooper topped out at about forty-nine pounds; he enjoyed swimming, eating plastic, sitting on top of the newspaper while I was reading it, and roast chicken. He is dearly missed. I now keep company with another Welshie (the delightful Ivy) and a Smooth Fox Terrier (the devilish but also delightful Buck) and a very tolerant cat (Leo)."
    }
}
function mouseOut(){
    this.style.color="";
    if (this.id === "dog-scri") {
        this.textContent="Yes, he was the most handsome dog in the world."
    }
}
/* EventLinstener for Contact page*/
