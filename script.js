const navButtons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const pageId = button.getAttribute("data-page");

    pages.forEach((page) => {
      page.classList.remove("active-page");
    });

    navButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active-page");
    button.classList.add("active");
  });
});