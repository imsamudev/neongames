const hamburgerMenu = document.getElementById("hamburger-menu");
const navbarLinks = document.getElementById("navbar-links");

hamburgerMenu.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// returnBtn function
var btn = document.querySelector(".returnBtn");

window.onload = function () {
  btn.style.display = "none";
};

window.onscroll = function () {
  var navbar = document.querySelector(".navbar").offsetHeight;
  if (window.pageYOffset > navbar) {
    btn.style.display = "block";
    btn.style.transition = "opacity 0.5s";
    btn.style.opacity = "1";
  } else {
    btn.style.opacity = "0";
    setTimeout(function () {
      if (window.pageYOffset <= navbar) {
        btn.style.display = "none";
      }
    }, 500);
  }
};
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
