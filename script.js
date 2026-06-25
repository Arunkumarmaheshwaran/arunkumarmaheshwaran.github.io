// ===============================
// PORTFOLIO JAVASCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // SCROLL REVEAL ANIMATION
    // ===============================

    const revealElements = document.querySelectorAll(".scroll-reveal");

    function revealOnScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add("active");
            }
        });
    }

    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);


    // ===============================
    // ACTIVE NAVBAR HIGHLIGHT
    // ===============================

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    function highlightNavLink() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active-link");

            if (
                link.getAttribute("href") === `#${currentSection}`
            ) {
                link.classList.add("active-link");
            }
        });
    }

    window.addEventListener("scroll", highlightNavLink);


    // ===============================
    // SMOOTH SCROLLING
    // ===============================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: "smooth"
                });

            }

        });

    });


    // ===============================
    // TYPING EFFECT
    // ===============================

    const typingElement =
        document.querySelector(".gradient-text");

    const textArray = [
        "Full Stack Developer",
        "UI/UX Designer",
        "Web Creator",
        "Frontend Engineer"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        if (!typingElement) return;

        const currentText =
            textArray[textIndex];

        if (!deleting) {

            typingElement.textContent =
                currentText.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentText.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;
            }

        } else {

            typingElement.textContent =
                currentText.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                textIndex++;

                if (textIndex >= textArray.length) {
                    textIndex = 0;
                }
            }
        }

        setTimeout(typeEffect, deleting ? 60 : 120);
    }

    typeEffect();


    // ===============================
    // ANIMATED COUNTERS
    // ===============================

    const counters =
        document.querySelectorAll(".stat-card h3");

    let counterStarted = false;

    function animateCounters() {

        const statsSection =
            document.querySelector(".stats-section");

        if (!statsSection) return;

        const sectionTop =
            statsSection.getBoundingClientRect().top;

        if (
            sectionTop < window.innerHeight &&
            !counterStarted
        ) {

            counterStarted = true;

            counters.forEach(counter => {

                const text =
                    counter.innerText;

                const number =
                    parseInt(text.replace(/\D/g, ""));

                let count = 0;

                const increment =
                    Math.ceil(number / 60);

                const updateCounter = () => {

                    count += increment;

                    if (count >= number) {

                        counter.innerText = text;

                    } else {

                        if (text.includes("+")) {

                            counter.innerText =
                                count + "+";

                        } else if (text.includes("%")) {

                            counter.innerText =
                                count + "%";

                        } else {

                            counter.innerText =
                                count;
                        }

                        requestAnimationFrame(
                            updateCounter
                        );
                    }

                };

                updateCounter();

            });

        }

    }

    window.addEventListener(
        "scroll",
        animateCounters
    );

    animateCounters();


    // ===============================
    // BACK TO TOP BUTTON
    // ===============================

    const backToTop =
        document.querySelector(".footer a");

    if (backToTop) {

        backToTop.addEventListener(
            "click",
            (e) => {

                e.preventDefault();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }

});


// ===============================
// NAVBAR SHADOW ON SCROLL
// ===============================

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.25)";

    } else {

        navbar.style.boxShadow =
            "none";
    }

});
