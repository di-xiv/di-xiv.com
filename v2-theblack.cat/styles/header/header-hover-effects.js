const headerTitleTextMobile = document.getElementById('header-title-text-mobile');
const touchTarget = document.getElementById('touch-target');

// Function to simulate touch and remove hover effect
const simulateTouch = () => {
  const touchEvent = new Event('touchstart', {
    bubbles: true,
    cancelable: true,
    view: window
  });

  touchTarget.dispatchEvent(touchEvent);
};

// Function to handle the touchstart event on header-title-text-mobile
const handleTouchStart = () => {
  simulateTouch(); // Simulate a touch to remove the hover effect on touch-target
};

// Attach touchstart event listener to header-title-text-mobile
headerTitleTextMobile.addEventListener('touchstart', handleTouchStart);
