const header = document.querySelector(".accordion-header");
const content = document.querySelector(".accordion-content");

header.addEventListener("click", function () {
    content.classList.toggle("active");
});
