// JavaScript for changing navbar style on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.backgroundColor = "#222"; // Change background color on scroll
    } else {
        document.getElementById("navbar").style.backgroundColor = "#333"; // Revert back to original color
    }
}

// JavaScript for hover effect on nav links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#555'; // Change background color on hover
    });

    link.addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; // Revert back to original background color
    });
});
