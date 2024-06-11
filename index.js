// burger button handler
const burgerBtn = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// hover on features handler
const slideWrappers = document.querySelectorAll('.constraint__content__slide-wrapper__main');

function toggleActiveClass(event) {
    const currentElement = event.currentTarget;

    currentElement.classList.toggle('active');

    const childDiv = currentElement.querySelector('div');
    const childP = currentElement.querySelector('p');

    childDiv.classList.toggle('active', currentElement.classList.contains('active'));
    childP.classList.toggle('active', currentElement.classList.contains('active'));

}

slideWrappers.forEach(slideWrapper => {
    slideWrapper.addEventListener('mouseover', toggleActiveClass);
});
slideWrappers.forEach(slideWrapper => {
    slideWrapper.addEventListener('mouseout', toggleActiveClass);
});

// hover on gallery handler
const gallerySlideWrappers = document.querySelectorAll('.gallery__content__slide__image-block');

function toggleGalleryActiveClass(event) {
    const currentElement = event.currentTarget;

    currentElement.classList.toggle('active');

    const childDiv = currentElement.querySelector('div');
    const childP = currentElement.querySelector('p');

    childDiv.classList.toggle('active', currentElement.classList.contains('active'));
    childP.classList.toggle('active', currentElement.classList.contains('active'));
}

gallerySlideWrappers.forEach(slideWrapper => {
    slideWrapper.addEventListener('mouseover', toggleGalleryActiveClass);
});
gallerySlideWrappers.forEach(slideWrapper => {
    slideWrapper.addEventListener('mouseout', toggleGalleryActiveClass);
});

// modal button handler
const modalBtn = document.getElementById('video-modal-button');
const modal = document.querySelector('.video-modal');
const youtubeVideo = document.getElementById('youtubeVideo');

const openModal = () => {
    modal.classList.add('active');
    youtubeVideo.src += "?autoplay=1";
}

const closeModal = () => {
    modal.classList.remove('active');
    // trying close video
    youtubeVideo.src = youtubeVideo.src.replace("?autoplay=1", "");
    youtubeVideo.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}

modalBtn.addEventListener('click', () => {
    openModal()
});

window.onclick = function (event) {
    if (event.target === modal) {
        closeModal()
    }
}

// modal
document.getElementById('contact-form').addEventListener('submit', (event)=> {
    event.preventDefault();

    const name = document.getElementById('form-name').value;

    alert('Submitted!\nName: ' + name);
});