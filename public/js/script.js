document.addEventListener('DOMContentLoaded', function () {
    var toggleMenu = document.getElementById('toggleMenu');
    var mobileMenu = document.getElementById('mobileMenu');

    toggleMenu.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });
});