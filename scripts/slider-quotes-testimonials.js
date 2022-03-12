{
  const slidesQuotesCount = document.querySelectorAll(".quotes__slide").length;
  const slidesQuotes = document.querySelector(".quotes__slides");
  let positionQuotes = 0;

  document
    .querySelector(".quotes__button-left")
    .addEventListener("click", e => {
      positionQuotes -= 1;
      if (positionQuotes < 0) positionQuotes = slidesQuotesCount - 1;
      slidesQuotes.style.transform = "translateX(-" + positionQuotes + "00%)";
    });
  document
    .querySelector(".quotes__button-right")
    .addEventListener("click", e => {
      positionQuotes += 1;
      if (positionQuotes > slidesQuotesCount - 1) positionQuotes = 0;
      slidesQuotes.style.transform = "translateX(-" + positionQuotes + "00%)";
    });
}

{
  const slidesTestimonialsCount = document.querySelectorAll(
    ".testimonials__slide"
  ).length;
  const slidesTestimonials = document.querySelector(".testimonials__slides");
  let positiontestimonials = 0;

  document
    .querySelector(".testimonials__button-left")
    .addEventListener("click", e => {
      positiontestimonials -= 1;
      if (positiontestimonials < 0)
        positiontestimonials = slidesTestimonialsCount - 1;
      slidesTestimonials.style.transform =
        "translateX(-" + positiontestimonials + "00%)";
    });
  document
    .querySelector(".testimonials__button-right")
    .addEventListener("click", e => {
      positiontestimonials += 1;
      if (positiontestimonials > slidesTestimonialsCount - 1)
        positiontestimonials = 0;
      slidesTestimonials.style.transform =
        "translateX(-" + positiontestimonials + "00%)";
    });
}
