const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const images = [
    "anhpeY/anh1.jpeg",
    "anhpeY/anh2.jpeg",
    "anhpeY/anh3.jpeg",
    "anhpeY/anh4.jpeg",
    "anhpeY/anh5.jpeg",
    "anhpeY/anh6.jpeg",
    "anhpeY/anh7.jpeg",
    "anhpeY/anh8.jpeg"
];

function openLightbox(index) {
    lightbox.style.display = "flex";
    lightboxImg.src = images[index];
}

function closeLightbox() {
    lightbox.style.display = "none";
}