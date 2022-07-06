// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

console.log(galleryItems);

const GalleryBox = document.querySelector('.gallery');

function GalleryCard (galleryItems) {
  const GalleryCardMarkup = galleryItems.map(({original, description, preview}) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" 
    src="${preview}" 
    alt="${description}" />
  </a>`
  }).join('');

  return GalleryCardMarkup;
};

GalleryBox.insertAdjacentHTML('beforeend', GalleryCard(galleryItems));

let lightbox = new SimpleLightbox('.gallery a', {captions:true , captionsData: 'alt', captionDelay:250});