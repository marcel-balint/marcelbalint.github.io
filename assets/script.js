document.getElementById("currentYear").innerHTML = new Date().getFullYear();
const topImage = document.getElementById("top-img");

window.addEventListener("scroll", () => {
  decreaseOpacity();
});

function decreaseOpacity() {
  topImage.style.opacity = 1 - window.pageYOffset / 900;
  topImage.style.backgroundSize = 150 - window.pageYOffset / 12 + "%";
}

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
