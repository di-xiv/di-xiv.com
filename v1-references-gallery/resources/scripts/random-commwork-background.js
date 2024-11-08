const imageUrls = [
    'https://cdn.theblack.cat/resources/background/horizontal/juurikun-horizontal.png',
    'https://cdn.theblack.cat/resources/background/horizontal/chaosringen-sketch-horizontal.jpg',
    'https://cdn.theblack.cat/resources/background/horizontal/chaosringen-color-horizontal.png',
    // Add more image URLs as needed
  ];

  // Function to select a random image URL
  function getRandomImage() {
    return imageUrls[Math.floor(Math.random() * imageUrls.length)];
  }

  // Function to set the random image as the background
  function setRandomBackground() {
    const randomImage = getRandomImage();
    const imageContainer = document.getElementById('random-commwork-image');
    imageContainer.style.backgroundImage = `url('${randomImage}')`;
  }

  // Call the function on page load to set an initial random background
  setRandomBackground();