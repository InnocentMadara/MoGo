"use strict";
let swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
    waitForTransition: false,
  },
});

document
  .querySelectorAll(".swiper-pagination-bullet")
  .forEach((item, index) => {
    let div = document.createElement("div");
    div.innerHTML =
      "<span>0" +
      (index + 1) +
      "</span> " +
      ["intro", "work", "about", "contacts"][index];
    div.className = "swiper-pagination-bullet-inner";
    return item.append(div);
  });
