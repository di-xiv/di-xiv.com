window.addEventListener('scroll', function () {
    // Calculate 5vh in pixels based on the current window height
    const tenVhInPixels = window.innerHeight * 0.05;

    // Get the topBar element by its ID
    const topBar = document.getElementById('topBar');

    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Check if the scroll position is greater than or equal to 10vh in pixels
    if (scrollPosition >= tenVhInPixels) {
      // Add the "glassbox-10" class to the topBar element
      topBar.classList.add('header-glassbox-10');
    } else {
      // Remove the "glassbox-10" class if the scroll position is less than 10vh
      topBar.classList.remove('header-glassbox-10');
    }
  });