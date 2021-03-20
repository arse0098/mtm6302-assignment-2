const $gallery = document.getElementById("images")
const $images = $gallery.getElementsByTagName("img")

const $modalImg = document.getElementById("modal-image")

const $modal = document.getElementById("modal")

const $modalClose = document.getElementById("close")

function imageClick(e) {
    let $targetImg = e.target
    console.log(e.target)
    $modalImg.src = $targetImg.src
    $modal.style.display = "block";
    $modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

function closeModal() {
    $modal.style.display = "none";
}

$modalClose.addEventListener("click", closeModal)

for (let i = 0; i < $images.length; i++) {
    let $img = $images[i]
    $img.addEventListener("click", imageClick)
}