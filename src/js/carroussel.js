const carroussel = document.querySelector('.carroussel');
const prevButton = document.querySelector('.carroussel__button--prev');
const nextButton = document.querySelector('.carroussel__button--next');
const premierItem = document.querySelector(".carroussel__item");
const scrollAmount = premierItem.clientWidth;


// Largeur de défilement d’un item
if (carroussel) {
  // Scroll au clic sur le bouton précédent
  prevButton.addEventListener("click", () => {
    carroussel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  // Scroll au clic sur le bouton suivant
  nextButton.addEventListener("click", () => {
    carroussel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
}
