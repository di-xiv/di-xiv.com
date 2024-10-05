const imageUrlsBodyRefBG = [
    'https://cdn.theblack.cat/resources/background/horizontal/bodyrefBG/1.png',
    'https://cdn.theblack.cat/resources/background/horizontal/bodyrefBG/2.png',
    'https://cdn.theblack.cat/resources/background/horizontal/bodyrefBG/3.png',
    'https://cdn.theblack.cat/resources/background/horizontal/bodyrefBG/4.png',
    'https://cdn.theblack.cat/resources/background/horizontal/bodyrefBG/5.png',
    // Add more image URLs as needed
  ];

  // Function to select a random image URL
  function getRandomImageBodyRefBG() {
    return imageUrlsBodyRefBG[Math.floor(Math.random() * imageUrlsBodyRefBG.length)];
  }

  // Function to set the random image as the background
  function setRandomBackgroundBodyRefBG() {
    const randomImageBodyRefBG = getRandomImageBodyRefBG();
    const imageContainerBodyRefBG = document.getElementById('galleries');
    imageContainerBodyRefBG.style.backgroundImage = `url('${randomImageBodyRefBG}')`;
  }

  // Call the function on page load to set an initial random background
  setRandomBackgroundBodyRefBG();