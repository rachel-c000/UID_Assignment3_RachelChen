const images = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

const wordCards = document.querySelectorAll('.word-card');
const lightbox = document.getElementById('word-lightbox');
const lightboxWord = document.getElementById('lightbox-word');

wordCards.forEach(card => {
  card.addEventListener('click', () => {
    lightboxWord.textContent = card.textContent;
    lightbox.style.display = 'flex';
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

const items = document.querySelectorAll('.carousel-item');
let currentIndex = 1;

function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove('active');
    item.style.display = Math.abs(index - currentIndex) > 1 ? 'none' : 'block';
  });

  if (items[currentIndex]) {
    items[currentIndex].classList.add('active');
  }
}

function moveCarousel(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > items.length - 1) currentIndex = items.length - 1;
  updateCarousel();
}

// Initialize carousel
updateCarousel();