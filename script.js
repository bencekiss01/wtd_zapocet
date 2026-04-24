const images = document.querySelectorAll(".gallery-image");

images.forEach(function(image) {
  image.addEventListener("click", function() {
    window.open(image.src, "_blank");
  });
});
