document.querySelectorAll(".faq-item").forEach((item) => {
  const question = item.querySelector(".faq-question");
  const icon = question.querySelector("i");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    const isVisible = answer.style.display === "block";

    // Close all
    document
      .querySelectorAll(".faq-answer")
      .forEach((ans) => (ans.style.display = "none"));
    document.querySelectorAll(".faq-question i").forEach((ic) => {
      ic.classList.remove("fa-angle-up");
      ic.classList.add("fa-angle-down");
    });

    // Toggle current
    if (!isVisible) {
      answer.style.display = "block";
      icon.classList.remove("fa-angle-down");
      icon.classList.add("fa-angle-up");
    }
  });
});





function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const iconOpen = document.getElementById("iconOpen");
  const iconClose = document.getElementById("iconClose");

  const isOpen = menu.style.display === "flex";

  menu.style.display = isOpen ? "none" : "flex";
  iconOpen.style.display = isOpen ? "inline" : "none";
  iconClose.style.display = isOpen ? "none" : "inline";
}

function handleResize() {
  const width = window.innerWidth;
  const nav = document.getElementById("navMenu");
  const button = document.getElementById("navButton");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  const iconOpen = document.getElementById("iconOpen");
  const iconClose = document.getElementById("iconClose");

  if (width < 768) {
    hamburger.style.display = "block";
    nav.style.display = "none";
    button.style.display = "none";
    mobileMenu.style.display = "none";

    iconOpen.style.display = "inline";
    iconClose.style.display = "none";
  } else {
    hamburger.style.display = "none";
    nav.style.display = "flex";
    button.style.display = "flex";
    mobileMenu.style.display = "none";

    iconOpen.style.display = "none";
    iconClose.style.display = "none";
  }
}

window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);



