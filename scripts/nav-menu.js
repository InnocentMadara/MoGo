"use strict";
let handler = function (event) {
  document.querySelector("nav").classList.toggle("nav-active");
  document.querySelector(".burger-button").style.animation =
    "burger-background 0.3s ease-in";
  setTimeout(function () {
    document.querySelector(".burger-button").style.animation = "";
  }, 300);
  if (document.querySelector(".nav-active")) {
    document.body.style.overflow = "hidden";

    document.querySelector(".burger-button__line-top").style.transform =
      "translate(-50%, -30%) translateY(7.2px) rotate(45deg)";
    document.querySelector(".burger-button__line-top").style.width = "20px";

    document.querySelector(".burger-button__line-mid").style.transform =
      "translate(-50%, -50%);";
    document.querySelector(".burger-button__line-mid").style.opacity = "0";

    document.querySelector(".burger-button__line-bot").style.transform =
      "translate(-50%, -70%) translateY(-7.2px) rotate(-45deg)";
    document.querySelector(".burger-button__line-bot").style.width = "20px";
  } else {
    document.body.style.overflow = "auto";

    document.querySelector(".burger-button__line-top").style.transform = "";
    document.querySelector(".burger-button__line-top").style.width = "";

    document.querySelector(".burger-button__line-mid").style.transform = "";
    document.querySelector(".burger-button__line-mid").style.opacity = "";

    document.querySelector(".burger-button__line-bot").style.transform = "";
    document.querySelector(".burger-button__line-bot").style.width = "";
  }
};
document.querySelector(".burger-button").addEventListener("click", () => {
  handler();
});
