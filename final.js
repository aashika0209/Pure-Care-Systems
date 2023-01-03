let burger = document.querySelector(".burger");
let Links = document.querySelector(".nav-links");
let TextArea = document.querySelector(".text");

burger.addEventListener('click',()=>{
   Links.classList.toggle("nav-show");
   TextArea.classList.toggle("textareahide");
})

