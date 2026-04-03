const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar .nav-link");
const navCollapse = document.getElementById("collapsibleNavbar");

// Scroll-based active menu highlight
window.addEventListener("scroll", () => {
  let current = "";
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollY + window.innerHeight / 2 >= sectionTop &&
      scrollY + window.innerHeight / 2 < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Click-based active menu highlight + close mobile menu
navLinks.forEach(link => {
  link.addEventListener("click", () => {

    // 1. Update active class on click
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // 2. Auto-close mobile navbar
    if (window.innerWidth < 992) { // close only in mobile/tablet
      const collapse = new bootstrap.Collapse(navCollapse, {
        toggle: true
      });
    }
  });
});









const imgList = document.getElementById("imgList");
const scrollRight = document.getElementById("scroll-right");
const scrollLeft = document.getElementById("scroll-left");

// Get the width of a single image (first <li>)
function getImageWidth() {
  const firstItem = imgList.querySelector("li");
  return firstItem ? firstItem.offsetWidth + 20 : 0; // 20 = gap between images
}

// Scroll right
scrollRight.addEventListener("click", () => {
  imgList.scrollBy({ left: getImageWidth(), behavior: "smooth" });
});

// Scroll left
scrollLeft.addEventListener("click", () => {
  imgList.scrollBy({ left: -getImageWidth(), behavior: "smooth" });
});

// Keep it centered on resize
window.addEventListener("resize", () => {
  imgList.scrollTo({ left: 0, behavior: "smooth" });
});
