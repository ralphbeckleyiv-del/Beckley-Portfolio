const navButtons = document.querySelectorAll(".nav-btn");
const navLinkButtons = document.querySelectorAll(".nav-link-btn");
const pages = document.querySelectorAll(".page");

function showPage(pageId) {
  pages.forEach((page) => {
    page.classList.remove("active-page");
  });

  navButtons.forEach((button) => {
    button.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active-page");

  const activeButton = document.querySelector(`.nav-btn[data-page="${pageId}"]`);
  activeButton.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const pageId = button.getAttribute("data-page");
    showPage(pageId);
  });
});

navLinkButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const pageId = button.getAttribute("data-page");
    showPage(pageId);
  });
});