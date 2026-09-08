// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navList = document.getElementById("nav-list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the menu after a link is tapped (mobile)
  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year, always current
document.getElementById("year").textContent = new Date().getFullYear();
