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
