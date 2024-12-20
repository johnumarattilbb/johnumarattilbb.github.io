document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    //variable declarations (step 1)//
    var header=document.querySelector("#title-desc");
    //var link=document.querySelector("#link");
    var titles=document.querySelectorAll(".article-title");

    var headerTitle=document.querySelector(".header-title");
    var nav=document.querySelector("nav");

    var haha=document.querySelector("#dog-scri");


    //event listeners (step 3)//
    setTimeout(contentChange1,5000);
    setTimeout(contentChange2,10000);
    setTimeout(contentChange3,15000);
    titles.forEach(function(title) {
        title.addEventListener("mouseover",mouseOver);
        title.addEventListener("mouseout",mouseOut);
    });

    window.addEventListener("scroll",changesize);

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

    function changesize(){
        var scrollTop = window.scrollY;
        if(scrollTop>200){
            headerTitle.style.transform="scale(0.8)"
            headerTitle.style.opacity="0.8"
            headerTitle.style.transition="transform 0.5s,opacity 0.5s"
        }
        else{
            headerTitle.style.transform = 'scale(1)';
            headerTitle.style.opacity = '1';
        }
        if (nav) {
            if (scrollTop > 100) {
                nav.style.transform = "scale(0.95)";
                nav.style.opacity = "0.9";
                nav.style.transition = "transform 0.5s, opacity 0.5s";
            } 
            else {
                nav.style.transform = "scale(1)";
                nav.style.opacity = "1";
            }
        }
    }

});
    /* Eventlinstener for Purchase page*/
var books=document.querySelectorAll(".book-item1")
var cart=document.getElementById("cart")
var cartTotalElement=document.getElementById("cart-total")
var checkoutButton=document.getElementById("checkout-button")
var cartTotal=0 


books.forEach(function(book){
    book.addEventListener("dragstart",handleDragStart)
    book.addEventListener("dragend",handleDragEnd)
})
cart.addEventListener("dragover",handleDragOver)
cart.addEventListener("dragleave",handleDragLeave)
cart.addEventListener("drop",handleDrop)
checkoutButton.addEventListener("click",handleCheckButton)

function handleDragStart(event){
    event.dataTransfer.setData('text/plain', this.getAttribute('data-price'));//get the price into the drag item
    this.style.opacity="0.5"
}
function handleDragEnd(){
    this.style.opacity="1.0"
}
function handleDragOver(event){
    event.preventDefault()
    cart.classList.add("drag-over")
}
function handleDragLeave(){
     cart.classList.remove('drag-over')
}
function handleDrop(event) {
    event.preventDefault()
    cart.classList.remove('drag-over')
     var price = parseFloat(event.dataTransfer.getData('text/plain'))//get the price from the drag item and transfer it into number
     if (!isNaN(price)) {
        cartTotal += price
        cartTotalElement.textContent = cartTotal.toFixed(2)//xiao shu dian
    }
}
function handleCheckButton(){
    if (cartTotal>0) {
        alert(`Payment Successful! Total paid: $${cartTotal.toFixed(2)}`)
        cartTotal=0
        cartTotalElement.textContent = cartTotal.toFixed(2)
    }
    else{
        alert("Your cart is empty. Please add items before proceeding to payment.")
    }
}
/* Eventlinstener for Purchase page end !!!!!*/