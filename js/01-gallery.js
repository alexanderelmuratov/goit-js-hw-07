import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryItemsMarkup(items) {
    return items
        .map(({ preview, original, description }) => {
            return `
              <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                  <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                  />
                </a>
              </div>
            `;
        })
        .join('');
}

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }    

    const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}">`);
    instance.show(() => {
        window.addEventListener('keydown', onKeyPress);        
    });

    function onKeyPress(evt) {
        if (evt.code === 'Escape') {
            instance.close();
        };
        console.log(evt);
    }
}
