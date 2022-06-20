// let ham = document.querySelector(".ham");
let logo = document.querySelector(".logo");
let icons = document.querySelector(".icons");

   ham.addEventListener("click", ()=> {
        ham.classList.toggle("active");
        logo.style.visibility = "hidden";
        icons.style.display = "none";
   })

   