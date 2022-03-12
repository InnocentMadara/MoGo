"use strict";

document
  .querySelector(".activities__spoilers")
  .addEventListener("click", function (e) {
    if (!e.target.closest(".spoiler__title")) return;
    if (document.querySelector(".spoiler--active")) {
      document
        .querySelector(".spoiler--active")
        .classList.remove("spoiler--active");
    }
    e.target.closest(".spoiler").classList.toggle("spoiler--active");
  });
