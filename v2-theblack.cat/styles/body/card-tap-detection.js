var tapOCCommWorks = document.getElementById('oc-commworks');
var tapBodyReferences = document.getElementById('oc-body-references');
var tapTouCard = document.getElementById('tou-card');
var tapWcifCard = document.getElementById('wcif-card');
var tapHeaderTitle = document.getElementById('header-title-text');

document.addEventListener('touchstart', function (event) {
    if (tapOCCommWorks.contains(event.target)) {
        tapOCCommWorks.classList.add('card-wrapper-hover');
    } else {
        tapOCCommWorks.classList.remove('card-wrapper-hover');
    }
    if (tapBodyReferences.contains(event.target)) {
        tapBodyReferences.classList.add('card-wrapper-hover');
    } else {
        tapBodyReferences.classList.remove('card-wrapper-hover');
    }
    if (tapTouCard.contains(event.target)) {
        tapTouCard.classList.add('card-wrapper-hover');
    } else {
        tapTouCard.classList.remove('card-wrapper-hover');
    }
    if (tapWcifCard.contains(event.target)) {
        tapWcifCard.classList.add('card-wrapper-hover');
    } else {
        tapWcifCard.classList.remove('card-wrapper-hover');
    }
    if (tapHeaderTitle.contains(event.target)) {
        tapHeaderTitle.classList.add('header-title-text-hover');
    } else {
        tapHeaderTitle.classList.remove('header-title-text-hover');
    }
});
