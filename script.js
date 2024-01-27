document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector('nav');
    const contentContainers = document.querySelectorAll('.content-container');

    // Change the background color of the navigation menu on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = '#3498db';
        } else {
            nav.style.backgroundColor = '#333';
        }
    });

    // Handle navigation link clicks with smooth scrolling
    document.querySelectorAll('nav a').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Get the target section ID
            const targetSectionId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                // Calculate the offset position of the target section, considering centering
                const offsetPosition = targetSection.offsetTop - (window.innerHeight - targetSection.clientHeight) / 2 -25;

                // Scroll smoothly to the target section
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
