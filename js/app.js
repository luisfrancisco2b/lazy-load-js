const images = document.querySelectorAll(".container img");

// Configuração do Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const image = entry.target;

    image.src = image.src.replace("w=10", "w=1000");

    observer.unobserve(image);
  });
}, {});

// Ativa a observação das imagens
images.forEach((image) => {
  observer.observe(image);
});
