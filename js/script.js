const form = document.querySelector(".form");
const input = document.querySelector(".form__input");

input.addEventListener("focus", function () {
  form.classList.add("form--active");
});

input.addEventListener("blur", function () {
  form.classList.remove("form--active");
});

$(function () {
  var $page = $("html, body");
  $('a[href*="#"]').click(function () {
    $page.animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      400
    );
    return false;
  });
});
