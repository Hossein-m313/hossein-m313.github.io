// const underlines = document.querySelectorAll("menu .menu-contents .underline");
// const options = document.querySelectorAll("menu .menu-contents li");
// const video = document.querySelector("#menu video");
// const video_cover = document.querySelector("#menu .video-container");
// const contents = document.querySelector("#menu .menu-contents");
const back_arrow = document.querySelector("menu svg");
const hamburger_menu = document.getElementById("hamburger-menu-icon");
const menu = document.querySelector("menu");
const header = document.querySelector("header");
const observer = new IntersectionObserver(([e]) => e.target.classList.toggle("pinned-header", e.intersectionRatio < 1), { threshold: [1] });

observer.observe(header);

function closeMenuFunction() {
  back_arrow.style.animation = "back-arrow-out 0.3s forwards";
  setTimeout(() => {
    menu.style.right = "calc(-2rem - var(--menu-size))";
    header.style.transform = "none";
  }, 300);
}
back_arrow.addEventListener("click", closeMenuFunction);

hamburger_menu.addEventListener("click", () => {
  back_arrow.style.animation = "none";
  menu.style.right = "0";
  header.style.transform = "translateY(-6rem)";
});
