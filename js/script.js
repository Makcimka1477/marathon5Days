const slides = document.querySelectorAll('.slide'),
      heading = document.querySelectorAll('.slide_heading');


// add and remove classes ACTIVE
function addClassActive() {
    slides.forEach(slide => {
        slide.addEventListener('click', (evt) => {
            const target = evt.target;
            if (target && target.classList.contains('slide')) {
                removeClasses();
                slide.classList.add('active');
            }
        });
    });
}
function removeClasses() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
}
addClassActive();

const photos = ['url("../photo/cycling01.jpg")', 'url("../photo/running02.jpg")', 'url("../photo/swimming03.jpg")', 'url("../photo/gym04.jfif")', 'url("../photo/dancing05.jfif")'],
      headers = ['Cycling', 'Running', 'Swimming', 'Gyming', 'Dancing'];

function removePhotos() {
    slides.forEach(slide => {
        slide.style.backgroundImage = '';
    });
}
removePhotos();


function changePhoto(massivePhotos, massiveTexts) {
    slides.forEach(function(slide, i) {
        slide.style.backgroundImage = massivePhotos[i];
    });
    heading.forEach(function(elem, i) {
        elem.textContent = massiveTexts[i];
    });
}

changePhoto(photos, headers);
