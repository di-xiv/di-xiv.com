const header = document.querySelector('header');
const infoButton = document.getElementById('info-button-info');
const contactButton = document.getElementById('contact-button-text');
let isGlassboxAdded = false;

const initialHeaderHeight = header.clientHeight;

window.addEventListener('scroll', function () {
    const scrollPositionVh = window.scrollY / window.innerHeight * 100;

    if (scrollPositionVh >= 3.5 && !isGlassboxAdded) {
        setTimeout(() => {
            header.classList.add('glassbox-25');
            infoButton.style.transition = 'opacity 0s ease';
            contactButton.style.transition = 'opacity 0s ease';
            infoButton.style.opacity = 0;
            contactButton.style.opacity = 0;
            setTimeout(() => {
                infoButton.style.display = 'none';
                contactButton.style.display = 'none';
            }, 500);
        }, 100);
        isGlassboxAdded = true;
    } else if (scrollPositionVh < 3.5 && isGlassboxAdded) {
        header.classList.remove('glassbox-25');
        infoButton.style.display = '';
        contactButton.style.display = '';
        setTimeout(() => {
            infoButton.style.transition = '';
            contactButton.style.transition = '';
            infoButton.style.opacity = 1;
            contactButton.style.opacity = 1;
        }, 100);
        isGlassboxAdded = false;    
    }
});
