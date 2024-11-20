# PeYy
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Album Ảnh</title>
    </head>
<body>
<style>
    body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: url("anhpeY/cute.jpg")
}

.album {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.photo {
    cursor: pointer;
    transition: transform 0.3s;
}

.photo img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.photo:hover {
    transform: scale(1.05);
}

.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: none;
    justify-content: center;
    align-items: center;
}

.lightbox img {
    max-width: 90%;
    max-height: 80%;
    border-radius: 8px;
}

.close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
}

.close:hover {
    color: #ff0000;
}
</style>
<div class="album">
        <div class="photo" onclick="openLightbox(0)">
            <img src="anhpeY/anh1.jpeg" alt="Ảnh 1">
        </div>
        <div class="photo" onclick="openLightbox(1)">
            <img src="anhpeY/anh2.jpeg" alt="Ảnh 2">
        </div>
        <div class="photo" onclick="openLightbox(2)">
            <img src="anhpeY/anh3.jpeg" alt="Ảnh 3">
        </div>
        <div class="photo" onclick="openLightbox(3)">
            <img src="anhpeY/anh4.jpeg" alt="Ảnh 4">
        </div>
        <div class="photo" onclick="openLightbox(4)">
            <img src="anhpeY/anh5.jpeg" alt="Ảnh 5">
        </div>
        <div class="photo" onclick="openLightbox(5)">
            <img src="anhpeY/anh6.jpeg" alt="Ảnh 6">
        </div>
        <div class="photo" onclick="openLightbox(6)">
            <img src="anhpeY/anh7.jpeg" alt="Ảnh 7">
        </div>
        <div class="photo" onclick="openLightbox(7)">
            <img src="anhpeY/anh8.jpeg" alt="Ảnh 8">
        </div>
    </div>

    <!-- Lightbox -->
    <div id="lightbox" class="lightbox" onclick="closeLightbox()">
        <span class="close">&times;</span>
        <img id="lightbox-img" src="" alt="">
    </div>
    <script>
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
</script>
</body>
</html>
