const imageUrls = [
    'https://cdn.theblack.cat/resources/background/horizontal/juurikun-horizontal.png',
    'https://cdn.theblack.cat/resources/background/horizontal/chaosringen-sketch-horizontal.jpg',
    'https://cdn.theblack.cat/resources/background/horizontal/chaosringen-color-horizontal.png',
    'https://cdn.theblack.cat/resources/background/horizontal/korodrawsaug2023-horizontal.jpeg',
    'https://cdn.theblack.cat/resources/background/horizontal/romupand-aug2023-horizontal.png',
    'https://cdn.theblack.cat/resources/background/horizontal/mijeh-aug2023-horizontal.jpeg',
    'https://cdn.theblack.cat/resources/background/horizontal/ayaben-oct2023-bw.png',
    'https://cdn.theblack.cat/resources/background/horizontal/ayaben-oct2023-fullcolor.jpeg',
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