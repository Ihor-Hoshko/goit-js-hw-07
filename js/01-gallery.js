import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryAll = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join("");
galleryAll.insertAdjacentHTML("afterbegin", galleryMarkup);

gallerey.addEventListener("click", onImgClick);

function onImgClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
}

const instance = basicLightbox.create(
  ` 
    <img src="${e.target.dataset.source}" width="599" height="300" >
    `
);
instance.show();
