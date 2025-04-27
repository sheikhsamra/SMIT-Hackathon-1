let menuIcon = document.getElementById('menuIcon');
let navLinks = document.getElementById('navLinks');

menuIcon.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});