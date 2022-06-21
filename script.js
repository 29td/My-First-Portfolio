let ham = document.querySelector(".ham");
let logo = document.querySelector(".logo");
let icons = document.querySelector(".icons");
let iconLink = document.querySelectorAll(".iconLink");

ham.addEventListener("click", () => {
        ham.classList.toggle("active");
        logo.style.visibility = "hidden";
        icons.style.display = "block";
    })
    // iconLink.addEventListener("click", () => {
    //     icons.style.display = "none";
    // })