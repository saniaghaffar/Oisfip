const photoElements = document.getElementsByClassName("photo");
const lightboxOverlay = document.createElement("div");
const lightboxContent = document.createElement("div");
const lightboxImage = document.createElement("img");
const lightboxPrevButton = document.createElement("div");
const lightboxNextButton = document.createElement("div");

lightboxOverlay.classList.add('lightbox');
lightboxContent.classList.add('lightbox-content');
lightboxPrevButton.classList.add('lightbox-prev');
lightboxNextButton.classList.add('lightbox-next');

lightboxPrevButton.innerHTML = `<i class="fas fa-chevron-left"></i>`;
lightboxNextButton.innerHTML = `<i class="fas fa-chevron-right"></i>`;

lightboxOverlay.appendChild(lightboxContent);
lightboxContent.appendChild(lightboxImage);
lightboxContent.appendChild(lightboxPrevButton);
lightboxContent.appendChild(lightboxNextButton);

document.body.appendChild(lightboxOverlay);

let currentPhotoIndex = 0;

const showLightbox = (index) => {
  lightboxImage.src = photoElements[index].querySelector('img').src;
  lightboxOverlay.style.display = 'block';
  currentPhotoIndex = index;
};

const hideLightbox = () => {
  lightboxOverlay.style.display = 'none';
};

const showPreviousPhoto = () => {
  if (currentPhotoIndex === 0) {
    currentPhotoIndex = photoElements.length - 1;
  } else {
    currentPhotoIndex--;
  }
  showLightbox(currentPhotoIndex);
};

const showNextPhoto = () => {
  if (currentPhotoIndex === photoElements.length - 1) {
    currentPhotoIndex = 0;
  } else {
    currentPhotoIndex++;
  }
  showLightbox(currentPhotoIndex);
};

Array.from(photoElements).forEach((photoElement, index) => {
  photoElement.addEventListener('click', () => showLightbox(index));
});

lightboxOverlay.addEventListener('click', (event) => {
  if (event.target === lightboxOverlay || event.target === lightboxPrevButton || event.target === lightboxNextButton) {
    hideLightbox();
  }
});

lightboxPrevButton.addEventListener('click', showPreviousPhoto);
lightboxNextButton.addEventListener('click', showNextPhoto);
