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

//function updateCarousel() {
 // items.forEach((item, index) => {
   // item.classList.remove('active');
   // item.style.display = Math.abs(index - currentIndex) > 1 ? 'none' : 'block';
 // });

 // if (items[currentIndex]) {
 //   items[currentIndex].classList.add('active');
 // }
//}

//function moveCarousel(direction) {
 // currentIndex += direction;
 // if (currentIndex < 0) currentIndex = 0;
 // if (currentIndex > items.length - 1) currentIndex = items.length - 1;
 // updateCarousel();
//}//

// Initialize carousel
updateCarousel();

const images = document.querySelectorAll('.hover-swap');

images.forEach(img => {
  const original = img.src;
  const alt = img.getAttribute('data-alt'); // gets the hover image

  img.addEventListener('mouseenter', () => {
    img.src = alt;
  });

  img.addEventListener('mouseleave', () => {
    img.src = original;
  });
});

// search bar
document.getElementById('searchToggle').addEventListener('click', function () {
  const searchBar = document.getElementById('searchBar');
  searchBar.style.display = searchBar.style.display === 'inline-block' ? 'none' : 'inline-block';
  if (searchBar.style.display === 'inline-block') {
    searchBar.focus();
  }
});

  function moveCarousel(direction) {
    const track = document.querySelector('.carousel-track');
    const itemWidth = track.querySelector('.carousel-item').offsetWidth;
    track.scrollBy({
      left: direction * (itemWidth + 16), // 16 = your gap
      behavior: 'smooth'
    });
  }

// quantity button

  const decreaseBtn = document.getElementById("decrease");
  const increaseBtn = document.getElementById("increase");
  const quantityInput = document.getElementById("quantity");

  decreaseBtn.addEventListener("click", () => {
    let value = parseInt(quantityInput.value, 10);
    if (value > 1) {
      quantityInput.value = value - 1;
    }
  });

  increaseBtn.addEventListener("click", () => {
    let value = parseInt(quantityInput.value, 10);
    quantityInput.value = value + 1;
  });

  // spice carousel

  

