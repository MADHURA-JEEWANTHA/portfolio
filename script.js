
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Adjust scroll speed by changing the duration (in ms)
            const duration = 1000; // 1 second (increase to slow down)
            const startPosition = window.pageYOffset;
            const targetPosition = targetElement.getBoundingClientRect().top + startPosition;
            const distance = targetPosition - startPosition;
            let startTime = null;

            function animation(currentTime) {
                if (!startTime) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            // Easing function for smooth acceleration/deceleration
            function easeInOutQuad(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        }
    });
});


//  nav bar script ------------------------------------------------

const menu_btn = document.querySelector('#menu_btn');
const nav_Menu = document.querySelector('#nav');
const menu_btn_close = document.querySelector('#menu_btn_close');

menu_btn.addEventListener('click', function () {
    this.style.display = "none";
    nav_Menu.style.display = "flex";

});

menu_btn_close.addEventListener('click', function () {

    nav_Menu.style.display = "none";
    menu_btn.style.display = "flex";

});

// Hero section script-----------------------
// change text script ------------------------

const texts = [
    "Web Designer...",
    "UI/UX Enthusiast...",
    "Creative Thinker...",
    "Frontend Developer...",
    "Digital Artist..."
];

let index = 0;
const span = document.getElementById("changing-text");

function typeEffect(text, callback) {
    let charIndex = 0;
    span.textContent = "";

    function type() {
        if (charIndex <= text.length) {
            span.textContent = text.substring(0, charIndex);
            charIndex++;
            setTimeout(type, 200);
        } else if (callback) {
            setTimeout(callback, 1000);
        }
    }

    type();
}

function startTypingLoop() {
    typeEffect(texts[index], () => {
        index = (index + 1) % texts.length;
        startTypingLoop();
    });
}

startTypingLoop();

// script for skill section

const percent_html = 85;
const percent_Css = 80;
const percent_Javascript = 65;
const percent_React = 70;
const percent_Tailwind = 75;
const percent_Phython = 75;
const percent_boostrap = 75;
const percent_php = 65;



const circle = document.querySelectorAll('.donut-ring');
const text = document.querySelectorAll('.donut-text');

let count = 0
for (const element of circle) {
    if (count == 0) {
        present_animation(percent_html, element);
        count++;
    } else if (count == 1) {
        present_animation(percent_Css, element);
        count++;
    } else if (count == 2) {
        present_animation(percent_Javascript, element);
        count++;
    }
    else if (count == 3) {
        present_animation(percent_React, element);
        count++;
    } else if (count == 4) {
        present_animation(percent_Tailwind, element);
        count++;
    }

    else if (count == 5) {
        present_animation(percent_Phython, element);
        count++;
    }
    else if (count == 6) {
        present_animation(percent_boostrap, element);
        count++;
    }
    else if (count == 7) {
        present_animation(percent_php, element);
        count++;
    }
}
count = 0
for (const element of text) {
    if (count == 0) {
        present_text(percent_html, element);
        count++;
    } else if (count == 1) {
        present_text(percent_Css, element);
        count++;
    } else if (count == 2) {
        present_text(percent_Javascript, element);
        count++;
    } else if (count == 3) {
        present_text(percent_React, element);
        count++;
    } else if (count == 4) {
        present_text(percent_Tailwind, element);
        count++;
    }
    else if (count == 5) {
        present_text(percent_Phython, element);
        count++;
    }
    else if (count == 6) {
        present_text(percent_boostrap, element);
        count++;
    }
    else if (count == 7) {
        present_text(percent_php, element);
        count++;
    }
}

function present_animation(percent, circle) {
    const radius = 60;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    // Trigger animation
    setTimeout(() => {
        const offset = circumference - (percent / 100 * circumference);
        circle.style.strokeDashoffset = offset;
    }, 500);

}

function present_text(percent, text) {
    // Animate number
    let current = 0;
    const interval = setInterval(() => {
        if (current < percent) {
            current++;
            text.textContent = `${current}%`;
        } else {
            clearInterval(interval);
        }
    }, 25);

}

// professional skills section Script

document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    const skills = document.querySelectorAll('.skill');
    const percentages = document.querySelectorAll('.percentage');

    // More elaborate loading animation
    setTimeout(() => {
        // Show content
        content.classList.add('loaded');

        // Animate skills one by one
        skills.forEach((skill, index) => {
            setTimeout(() => {
                skill.classList.add('animate-in');

                // Animate the bar and dots
                const bar = skill.querySelector('.bar');
                const dots = skill.querySelectorAll('.dot, .big-dot');
                const percentage = skill.querySelector('.percentage');
                const targetWidth = bar.dataset.width;

                bar.style.width = targetWidth + '%';

                dots.forEach(dot => {
                    dot.style.left = targetWidth + '%';
                    setTimeout(() => {
                        dot.classList.add('animate-in');
                    }, 300);
                });

                // Animate percentage counter
                let current = 0;
                const duration = 1500;
                const increment = targetWidth / (duration / 16);

                const updatePercentage = () => {
                    current += increment;
                    if (current < targetWidth) {
                        percentage.textContent = Math.round(current);
                        requestAnimationFrame(updatePercentage);
                    } else {
                        percentage.textContent = targetWidth;
                    }
                };

                setTimeout(updatePercentage, 200);

            }, index * 200);
        });

        // Hide loader with style
        loader.style.opacity = '0';
        loader.style.transform = 'scale(1.5)';

        setTimeout(() => {
            loader.style.display = 'none';
        }, 800);

    }, 1500);
});

// Full Skill Section script

const coding_skill = document.querySelector('#coding_skill');
const Education_skill = document.querySelector('#Education_skill');
const Professional_skill = document.querySelector('#Professional_skill');

const Technical_btn = document.querySelector('#Technical');
const Education_btn = document.querySelector('#Education');
const Professional_btn = document.querySelector('#Professional');

Technical_btn.addEventListener("click", function () {
    coding_skill.style.display = "grid";
    Education_skill.style.display = "none";
    Professional_skill.style.display = "none";
});

Education_btn.addEventListener("click", function () {
    coding_skill.style.display = "none";
    Education_skill.style.display = "grid";
    Professional_skill.style.display = "none";
});

Professional_btn.addEventListener("click", function () {
    coding_skill.style.display = "none";
    Education_skill.style.display = "none";
    Professional_skill.style.display = "grid";
});