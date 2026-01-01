// Toggle close & Open hamburger Menu
const menuEl = document.getElementById("mobile-screen-menu");
const menuBtnEl = document.getElementById("menu-btn");
const headerEl = document.getElementById("header");

// close menu when click outside of menu
document.querySelector("body").addEventListener("click", (e) => {
  //   console.log(
  //     e.target.parentElement,
  //     ":",
  //     e.target.parentElement.classList.contains("menu")
  //   );
  if (e.target.parentElement.classList.contains("menu")) {
    menuEl.classList.toggle("translate-x-full");
    menuButtonType();
  } else {
    menuEl.classList.add("translate-x-full");
    menuButtonType();
  }
});
function menuButtonType() {
  if (menuEl.classList.contains("translate-x-full")) {
    menuBtnEl.innerHTML =
      '<i class="bx bx-menu bx-rotate-90 bx-flip-vertical" style="color: #ffffff" ></i>';
  } else {
    menuBtnEl.innerHTML = "<i class='bx  bx-x' style='color:#ffffff'></i>";
  }
}

// Auto get Year for Footer
const copyrightEl = document.getElementById("year");
copyrightEl.textContent = new Date().getFullYear();
