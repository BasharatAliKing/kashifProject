const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeMenu = document.getElementById('close-menu');

hamburger.addEventListener("click", () => {
    navMenu.classList.remove('hidden');
});

closeMenu.addEventListener("click", () => {
    navMenu.classList.add('hidden');
});
