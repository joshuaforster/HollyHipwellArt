import { imageData } from "./imagedata.js";

// Function to render a specific gallery
function renderGallery(galleryName, targetElementId) {
    const targetGallery = document.getElementById(targetElementId);

    const galleryHTML = imageData
        .filter(image => image.ImageGallery === galleryName)
        .map(image => `<img class="enlarge" src="${image.src}" alt="Image from ${galleryName}">`)
        .join('');

    targetGallery.innerHTML = galleryHTML;

    targetGallery.addEventListener('click', function(event) {
        if (event.target.classList.contains('enlarge')) {
            const clickedImageSrc = event.target.src; // Get the source of the clicked image
            document.querySelectorAll('.black').forEach(function(x) {
                x.style.display = 'flex'; // Use flex to center the image
                x.innerHTML = `<img src="${clickedImageSrc}" alt="Enlarged image">`; // Set the inner HTML with the correct image source
            });
        }
    });

    

}

// Call the function for different galleries
renderGallery('Swedish project', 'sweden-gallery');

renderGallery('Spanish project', 'spain-gallery');