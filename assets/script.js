const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Gestion des points
const dotsContainer = document.querySelector(".dots");
slides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dotsContainer.appendChild(dot);

  // On ajoute la classe "dot_selected" au premier point
  if (index === 0) {
    dot.classList.add("dot_selected");
  }
});

// Index du slide de départ
let i = 0;

// Mettre à jour le slide en fonction de i
function updateSlide() {
  const currentSlide = slides[i];
  document.querySelector(".banner-text").innerHTML = currentSlide.tagLine;
  document.querySelector(
    ".banner-img"
  ).src = `/assets/images/slideshow/${currentSlide.image}`;

  // Mettre à jour les points
  const allDots = document.querySelectorAll(".dot");
  allDots.forEach((dot) => dot.classList.remove("dot_selected"));
  allDots[i].classList.add("dot_selected");
}

// Initialiser avec le premier slide
updateSlide();

// Gestion des flèches
document.querySelector(".arrow_left").addEventListener("click", () => {
  console.log("Vous avez cliqué sur la flèche de gauche");
  i = (i - 1 + slides.length) % slides.length;
  updateSlide();
});

document.querySelector(".arrow_right").addEventListener("click", () => {
  console.log("Vous avez cliqué sur la flèche de droite");
  i = (i + 1) % slides.length;
  updateSlide();
});
