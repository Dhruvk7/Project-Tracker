
document.addEventListener('DOMContentLoaded', function () {
    // Get all the anchor tags in the navigation
    const navLinks = document.querySelectorAll('nav li a');

    // Loop through the anchor tags and add the event listener
    navLinks.forEach((link) => {
        link.addEventListener('click', toggleActiveStatus);
    });

    function toggleActiveStatus(e) {
        // Prevent the default link behavior (i.e., don't navigate to the href)
        // e.preventDefault();

        // Remove the "active" class from all other <li> elements
        navLinks.forEach((link) => {
            link.parentElement.classList.remove('active');
        });

        // Add the "active" class to the clicked <li> element
        e.target.parentElement.classList.add('active');
    }
});
