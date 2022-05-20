const fade = document.getElementsByClassName("fade-in");

window.addEventListener("scroll", () => {
    for(let i = 0; i < fade.length; i ++) {
        if((window.innerHeight) - fade[i].getBoundingClientRect().top > 0) {
            fade[i].classList.add("scrolled");
        }
        else {
            fade[i].classList.remove("scrolled");
        }
    }
})