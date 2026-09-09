// ===============================
// MOBILE MENU
// ===============================

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");


menuIcon.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

const navItems = document.querySelectorAll(".nav-links a");


navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ===============================
// TYPING EFFECT
// ===============================

const typingText = document.getElementById("typing-text");


const words = [

    "Web, Frontend & Mobile App Developer",
    "Computer Engineering Technology Student",
    "AI & Computer Vision Developer",
    "MERN Stack Developer"

];


let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;


function typeEffect() {


    const currentWord = words[wordIndex];


    if (!isDeleting) {


        typingText.textContent =
            currentWord.substring(0, charIndex + 1);


        charIndex++;


        if (charIndex === currentWord.length) {


            isDeleting = true;


            setTimeout(typeEffect, 1500);


            return;

        }


    } else {


        typingText.textContent =
            currentWord.substring(0, charIndex - 1);


        charIndex--;

    }



    if (isDeleting && charIndex === 0) {


        isDeleting = false;


        wordIndex++;


        if (wordIndex === words.length) {

            wordIndex = 0;

        }

    }



    const typingSpeed = isDeleting ? 50 : 100;


    setTimeout(typeEffect, typingSpeed);

}


// START TYPING EFFECT

typeEffect();


// ===============================
// CONTACT FORM
// ===============================

const contactForm =
    document.getElementById("contactForm");


const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {


    event.preventDefault();


    const name =
        document.getElementById("name").value;


    formMessage.textContent =
        `Thank you ${name}! Your message has been received.`;


    contactForm.reset();


});


// ===============================
// NAVBAR SHADOW ON SCROLL
// ===============================

window.addEventListener("scroll", () => {


    const header =
        document.querySelector("header");


    if (window.scrollY > 50) {


        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.3)";


    } else {


        header.style.boxShadow =
            "none";

    }


});