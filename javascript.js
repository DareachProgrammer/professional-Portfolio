const observeOptions = {
    threshold: 0.5,
};

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        const progressBars = entry.target.querySelectorAll(".skill-progress");
        progressBars.forEach((bar) => {
            const progress = bar.getAttribute("data-progress");
            bar.style.width = progress + "%";
        });
    })
}, observeOptions);

const skillsSection = document.querySelector(".skills");
if(skillsSection) {
    observer.observe(skillsSection);
}

// Project Filter 
const filterBtns = document.querySelectorAll(".filter-btn");
const projectItems = document.querySelectorAll(".project-item");

filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");

        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        projectItems.forEach((items) => {
            if (filter === "all" || items.getAttribute("data-category") === filter){
                items.style.display = "block";
                setTimeout(() => {
                    items.style.opacity = "1";
                    items.style.transform = "scale(1)";
                }, 10)
            } else {
                items.style.opacity = "0";
                items.style.transform = "scale(0.8)";
                setTimeout(() => {
                    items.style.display = "none";
                }, 300);
            }
        })
    })
})

const menu = document.getElementById("menu");
const navbar = document.querySelector("header nav");

menu.addEventListener("click", (e) => {
    e.preventDefault();
    navbar.classList.toggle("open"); 
});

// Show Scroll up 
const scrollUp = () => {
    const scrollUp = document.getElementById("scrollup");

    //when the scroll is higher than 350 vh , add the show scroll class 
    this.scrollY >= 800 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);

// Active and Remove Menu
const navLink = document.querySelectorAll('nav a');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active-menu')) 
    this.classList.add('active-menu');

    //remove menu mobile
    const navMenu = document.querySelector('.open');
    navMenu.classList.remove('open');
    console.log(navMenu)
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// TYPE EFFECT 
var typingEffect = new Typed(".typeText", {
    strings: ["Ren <br> Dareach","Coder"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
});

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
});

// HOME

sr.reveal('.hero-text', {})
sr.reveal('.btn', {delay: 100})
sr.reveal('.hero-img', {delay: 150})
sr.reveal('.feature-card', {delay: 200})
sr.reveal('.section-label', {delay: 300})
sr.reveal('.section-title', {delay: 350})

