// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

gallery.style.cssText = `list-style: none;`;

const newImage = [];

const newFotoGallery = (object) => {
    object.map(({ preview, original, description }) => {
        newImage.push(`<li class="gallery__item"><a class="gallery__link" href="${original}" ><img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"/></a></li>`)
    })
    gallery.insertAdjacentHTML('beforeend', newImage.join(''));
}

newFotoGallery(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', { 
    sourceAttr: 'href', // завантаження файла з ...
    overlayOpacity: 0.4, // прозорість фону
    animationSpeed: 500, // Анімація перемикання слайдів (швидкість)
    captionsData: 'alt', // додаємо з опису
    captionPosition: 'bottom', // позиція
    captionDelay: 250, // затримка опису '250 ms'
 });
