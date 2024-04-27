$(window).on("load",function (){
	$.scrollIt({
	easing: 'swing',      // the easing function for animation
	scrollTime: 900,       // how long (in ms) the animation takes
	activeClass: 'active', // class given to the active nav element
	onPageChange: null,    // function(pageIndex) that is called when page is changed
	topOffset: -63
	});
});

document.addEventListener("DOMContentLoaded", function() {
    var pureCounterElements = document.querySelectorAll('[data-purecounter-start]');
  
    pureCounterElements.forEach(function(element) {
        var startCount = parseInt(element.getAttribute('data-purecounter-start'));
        var targetCount = parseInt(element.getAttribute('data-purecounter-end'));
        var duration = parseInt(element.getAttribute('data-purecounter-duration'));
        var steps = Math.abs(targetCount - startCount);
        // var delay = duration/steps;
        var delay = 50
        var currentCount = startCount;
  
        var counterInterval = setInterval(function() {
            if (currentCount < targetCount) {
                currentCount++;
            } else if (currentCount > targetCount) {
                currentCount--;
            } else {
                clearInterval(counterInterval);
            }
            animateCount(element, currentCount);
        }, delay); // Increment every delay milliseconds
    });
});

function animateCount(element, currentCount) {
    element.textContent = currentCount;
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

function scrollToTop() {
    const scrollToTopBtn = document.documentElement;

    scrollToTopBtn.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function reloadPage() {
    window.location.reload();
}
//   document.addEventListener("DOMContentLoaded", function() {
//     var slider = document.querySelector('.slider');
//     if (slider) {
//       var bxSlider = new BxSlider(slider, {
//         pager: false
//       });
//     }
//   });

// script.js
