// ======================================
// MOBILE MENU
// ======================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// ======================================
// CLOSE MOBILE MENU AFTER CLICK
// ======================================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ======================================
// SIMPLE SCROLL REVEAL
// ======================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

sections.forEach(section => {

    observer.observe(section);

});