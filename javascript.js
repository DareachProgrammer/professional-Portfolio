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
})