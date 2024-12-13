// On cible les éléments à modifier
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;

// Vérifier si les éléments existent avant d'ajouter l'événement
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    // Mise à jour des attributs ARIA pour accessibilité
    toggle.ariaExpanded = isClosed;
    nav.ariaHidden = isOpen;
    page.classList.toggle("noscroll", isClosed);
  });
}
// Empêcher le défilement de la page lorsque le menu est ouvert
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    if (isOpen) {
      page.style.overflow = "hidden";
    } else {
      page.style.overflow = "";
    }
  });
}

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
