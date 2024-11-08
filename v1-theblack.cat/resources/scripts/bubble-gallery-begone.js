const bubbleTriggerGallery = document.querySelector('.bubble-trigger-gallery');
const bubbleGallery = document.querySelector('.bubble-gallery');
let bubbleGalleryVisible = false;

bubbleTriggerGallery.addEventListener('click', () => {
  if (bubbleGalleryVisible) {
    hideGalleryBubble();
  } else {
    showGalleryBubble();
  }
});


document.addEventListener('click', (event) => {
  if (bubbleGalleryVisible && !bubbleGallery.contains(event.target) && !bubbleTriggerGallery.contains(event.target)) {
    hideGalleryBubble();
  }
});

function showGalleryBubble() {
  bubbleGallery.style.display = 'block';
  bubbleGalleryVisible = true;
}

function hideGalleryBubble() {
  bubbleGallery.style.display = 'none';
  bubbleGalleryVisible = false;
}