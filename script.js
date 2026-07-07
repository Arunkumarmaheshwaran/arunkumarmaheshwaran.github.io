// ===============================
// ARUN KUMAR MAHESHWARAN PORTFOLIO
// script.js
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // SCROLL REVEAL
    // ==========================

    const reveals = document.querySelectorAll(".scroll-reveal");

    function revealSections() {

        const trigger = window.innerHeight * 0.85;

        reveals.forEach(section => {

            const top = section.getBoundingClientRect().top;

            if (top < trigger) {

                section.classList.add("active");

            }

        });

    }

    revealSections();

    window.addEventListener("scroll", revealSections);


    // ==========================
    // ACTIVE NAVBAR
    // ==========================

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });


    // ==========================
    // SMOOTH SCROLL
    // ==========================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e) {

            e.preventDefault();

            document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

        });

    });


    // ==========================
    // TYPING EFFECT
    // ==========================

    const typing = document.querySelector(".typing");

    const words = [

        "B.Tech IT Student",
        "Web Developer",
        "Java Programmer",
        "AI Enthusiast",
        "Problem Solver"

    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const current = words[wordIndex];

        if (!deleting) {

            typing.textContent = current.substring(0, charIndex++);

            if (charIndex > current.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;

            }

        }

        else {

            typing.textContent = current.substring(0, charIndex--);

            if (charIndex === 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex === words.length)

                    wordIndex = 0;

            }

        }

        setTimeout(typeEffect, deleting ? 60 : 120);

    }

    if (typing) typeEffect();


    // ==========================
    // COUNTER
    // ==========================

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        counter.innerText = "0";

        const update = () => {

            const target = +counter.getAttribute("data-target");

            const current = +counter.innerText;

            const increment = target / 100;

            if (current < target) {

                counter.innerText = `${Math.ceil(current + increment)}`;

                setTimeout(update, 20);

            }

            else {

                counter.innerText = target;

            }

        };

        update();

    });


    // ==========================
    // STICKY NAVBAR
    // ==========================

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.background = "rgba(5,8,22,.95)";
            navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.4)";

        }

        else {

            navbar.style.background = "rgba(0,0,0,.25)";
            navbar.style.boxShadow = "none";

        }

    });


    // ==========================
    // BACK TO TOP
    // ==========================

    const backTop = document.querySelector(".back-top");

    if(backTop){

        window.addEventListener("scroll",()=>{

            if(window.scrollY>500){

                backTop.style.opacity="1";
                backTop.style.visibility="visible";

            }

            else{

                backTop.style.opacity="0";
                backTop.style.visibility="hidden";

            }

        });

    }


    // ==========================
    // SCROLL PROGRESS BAR
    // ==========================

    const progress=document.createElement("div");

    progress.style.position="fixed";
    progress.style.top="0";
    progress.style.left="0";
    progress.style.height="5px";
    progress.style.background="linear-gradient(to right,#7c3aed,#06b6d4)";
    progress.style.width="0%";
    progress.style.zIndex="99999";

    document.body.appendChild(progress);

    window.addEventListener("scroll",()=>{

        const total=document.documentElement.scrollHeight-window.innerHeight;

        const percent=(window.scrollY/total)*100;

        progress.style.width=percent+"%";

    });


    // ==========================
    // HERO IMAGE TILT
    // ==========================

    const profile=document.querySelector(".profile-image");

    if(profile){

        profile.addEventListener("mousemove",(e)=>{

            const x=e.offsetX;
            const y=e.offsetY;

            const rotateY=(x-90)/12;
            const rotateX=(90-y)/12;

            profile.style.transform=
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        });

        profile.addEventListener("mouseleave",()=>{

            profile.style.transform="rotateX(0) rotateY(0)";

        });

    }


    // ==========================
    // DARK MODE
    // ==========================

    const toggle=document.querySelector("#themeToggle");

    if(toggle){

        toggle.addEventListener("click",()=>{

            document.body.classList.toggle("light-mode");

        });

    }


    // ==========================
    // PARTICLES
    // ==========================

    for(let i=0;i<35;i++){

        const particle=document.createElement("span");

        particle.classList.add("particle");

        particle.style.left=Math.random()*100+"vw";

        particle.style.animationDuration=
        Math.random()*8+8+"s";

        particle.style.animationDelay=
        Math.random()*5+"s";

        particle.style.opacity=Math.random();

        document.body.appendChild(particle);

    }

});
