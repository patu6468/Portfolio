// ==========================
// Mobile Menu
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (menuBtn.classList.contains("fa-bars")) {
        menuBtn.classList.remove("fa-bars");
        menuBtn.classList.add("fa-times");
    } else {
        menuBtn.classList.remove("fa-times");
        menuBtn.classList.add("fa-bars");
    }
});

// Close menu after click

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.classList.remove("fa-times");
        menuBtn.classList.add("fa-bars");

    });

});


// ==========================
// Typing Animation
// ==========================

const text = [
    "Java Full Stack Developer",
    "Spring Boot Developer",
    "React Developer",
    "Frontend Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {

        setTimeout(() => {

            index = 0;
            count++;
            type();

        }, 1500);

    } else {

        setTimeout(type, 120);

    }

})();


// ==========================
// Scroll Animation
// ==========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(sec => {

    sec.classList.add("fade");

    observer.observe(sec);

});


// ==========================
// Active Navbar
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================
// Sticky Header Shadow
// ==========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ==========================
// Contact Form
// ==========================
// ==========================
// Contact Form - Formspree
// ==========================

const form = document.getElementById("contactForm");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill all fields.");
        return;
    }

    try {

        const response = await fetch(
            "https://formspree.io/f/mjybrpva",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },

                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            }
        );

        if (response.ok) {

            alert("Thank you! Your message has been sent successfully.");

            form.reset();

        } else {

            const data = await response.json();

            console.error(data);

            alert("Something went wrong. Please try again.");

        }

    } catch (error) {

        console.error(error);

        alert("Unable to send message. Please try again later.");

    }

});


// ==========================
// Scroll To Top Button
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "#000";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
