const bubbleTrigger = document.querySelector('.bubble-trigger');
const bubble = document.querySelector('.bubble');
let bubbleVisible = false;

bubbleTrigger.addEventListener('click', () => {
  if (bubbleVisible) {
    hideBubble();
  } else {
    showBubble();
  }
});


document.addEventListener('click', (event) => {
  if (bubbleVisible && !bubble.contains(event.target) && !bubbleTrigger.contains(event.target)) {
    hideBubble();
  }
});

function showBubble() {
  bubble.style.display = 'block';
  bubbleVisible = true;
}

function hideBubble() {
  bubble.style.display = 'none';
  bubbleVisible = false;
}