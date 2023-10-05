let lastKnownScrollPosition = 0;
let ticking = false;
let navbar = document.getElementById("navbar");

function addBg(scrollPos) {
  if (scrollPos == 0) {
    
  }
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      addBg(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
