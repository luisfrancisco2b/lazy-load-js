const images = document.querySelectorAll(".container img");

images.forEach((image) => {
  image.src = image.src.replace("w=10", "w=1000");
});
