const imageUrls = [
    'resources/images/bg-images/horizontal/juurikun-bg.avif',
    'resources/images/bg-images/horizontal/chaosringen-bg.avif',
    'resources/images/bg-images/horizontal/ayaben-bg.avif',
    'resources/images/bg-images/horizontal/bushyHyur-bg.avif',
    'resources/images/bg-images/horizontal/kcc-bg.avif',
  ];
  function getRandomImage() {
    return imageUrls[Math.floor(Math.random() * imageUrls.length)];
  }
  function setRandomCommWorksBackground() {
    const randomImage = getRandomImage();
    const imageContainer = document.getElementById('oc-commworks');
    imageContainer.style.backgroundImage = `url('${randomImage}')`;
  }
  
  setRandomCommWorksBackground();