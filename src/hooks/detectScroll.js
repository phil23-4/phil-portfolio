// Animated navbar

// We store the navbar element in a variable using the getElementById method and the id of the navbar
const animatedNavbar = document.getElementById('navbar');

// We add class .bg-white/95 to the navbar when the user scrolls down, and remove it when the navbar is at the top of the page
window.addEventListener('scroll', function () {
  // If windows.scrollY > 0 (that means the user has scrolled down) we add class .bg-white/95 to the navbar
  if (window.scrollY > 0) {
    animatedNavbar.classList.add('bg-white/95');
    animatedNavbar.classList.add('shadow-md');

    // If windows.scrollY = 0 (that means the navbar is at the top of the page) we remove class .bg-white/95 from the navbar
  } else {
    animatedNavbar.classList.remove('bg-white/95');
    animatedNavbar.classList.remove('shadow-md');
  }
});
