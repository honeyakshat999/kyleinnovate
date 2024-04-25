var slideIndex = 0;
var slideTimer;

window.addEventListener("scroll", function() {
    var navbar = document.getElementById('navbar');
    var footer = document.getElementById('footer');
    if (window.scrollY > 0) {
        navbar.classList.add('nav-scroll');
        footer.classList.add('footer-copy-scroll');
    } else {
        navbar.classList.remove('nav-scroll');
        footer.classList.remove('footer-copy-scroll')
    }
    });

window.addEventListener("DOMContentLoaded", function() {
    showSlides();
});
    
function reloadPage() {
    window.location.reload();
}

function toggleNavbar() {
    var navbarCollapse = document.getElementById("navbarSupportedContent");
    navbarCollapse.classList.toggle("collapsed"); // Toggle the collapsed class
}

function expandqna(element){
    if (element.classList.contains('active')) {
        element.classList.remove('active');
    } else {
        element.classList.add('active');
    }
};

function scrollToSection(sectionId, link) {
    var navLinks = document.querySelectorAll('nav div ul li a');
    navLinks.forEach(function(navLink) {
        navLink.classList.remove('scrollToSection');
    });

    link.classList.add('scrollToSection');
    var section = document.getElementById(sectionId);
    var navbarHeight = document.querySelector('nav').offsetHeight; // Adjust selector to match your navbar
    var targetY = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
    var startY = window.scrollY;
    var distance = targetY - startY;
    var startTime = null;

    function scrollAnimation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var scrollProgress = Math.min(timeElapsed / 1000, 1); // Duration: 1 second
        var scrollPosition = startY + distance * easeInOutCubic(scrollProgress);
        window.scrollTo(0, scrollPosition);
        if (timeElapsed < 1000) requestAnimationFrame(scrollAnimation);
    }

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    requestAnimationFrame(scrollAnimation);
}
    
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("testimonial-item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    slideTimer = setTimeout(showSlides, 5000); // Change slide every 8 seconds
}


function plusSlides(n) {
    clearTimeout(slideTimer); // Clear the existing timeout
    slideIndex += n;
    var slides = document.getElementsByClassName("testimonial-item");
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    slideTimer = setTimeout(showSlides, 5000); // Reset the timeout after clicking a button
}


// function loopColors(){
//     const aboutColors = [
//         "#000000", "#111111", "#222222", "#333333", "#444444",
//         "#555555", "#666666", "#777777", "#888888", "#999999"
//     ]
//     let colorIndex = 0;
    
//     // Function to cycle through colors
//     function cycleColors() {
//         const colorBox = document.getElementById("section-6");
//         colorBox.style.backgroundColor = aboutColors[colorIndex];
//         colorIndex = (colorIndex + 1) % aboutColors.length; // Loop through colors
//     }
    
//     // Interval to change colors every 5 seconds
//     setInterval(cycleColors, 5000);
// }

    /*
    window.addEventListener("load", function(){
    const containers = document.getElementsByTagName('section');
    const numParticles = 250; // Adjust number of particles
    for (let i = 0; i < containers.length; i++) {
        if (i % 2 === 0) { // Check if index is even
            containers[i].classList.add("section-begin");
            for (let j = 0; j < numParticles; j++) {
                const particle = document.createElement('span');
                particle.className = 'particle';
                particle.textContent = Math.random() < 0.5 ? '0' : '1'; // Randomly set content to '0' or '1'
                particle.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
                particle.style.top = Math.random() * 100 + 'vh'; // Random vertical position
                particle.style.animationDelay = Math.random() * 2 + 's'; // Random delay for staggered animation start
                containers[i].appendChild(particle);
            }
        }
      }
    });*/