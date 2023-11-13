

function renderGallery(){
    const galleryImages = [
        "Images/IMG_0614.png",
        "Images/IMG_0615.png",
        "Images/IMG_0620.png",
        "Images/IMG_0617.png",
        "Images/IMG_0618.png",
        "Images/IMG_0616.png",
    ] 

    const imageGallery = document.getElementById('image-gallery')

    const insertedGallery = galleryImages.forEach(function(image){
        return imageGallery.innerHTML += `<img src=${image}>`
    })
    
}


renderGallery()




