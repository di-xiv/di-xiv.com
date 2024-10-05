const imagesWCIFCard = [
  'resources/images/bg-images/horizontal/bodyrefBG/1.avif',
  'resources/images/bg-images/horizontal/bodyrefBG/2.avif',
  'resources/images/bg-images/horizontal/bodyrefBG/3.avif',
  'resources/images/bg-images/horizontal/bodyrefBG/4.avif',
  'resources/images/bg-images/horizontal/bodyrefBG/5.avif',
];

function getimagesWCIFCard() {
  return imagesWCIFCard[Math.floor(Math.random() * imagesWCIFCard.length)];
}

function setRandomWCIFBackground() {
  const selectedImage = getimagesWCIFCard();
  const containerWCIFCard = document.getElementById('wcif-card');
  containerWCIFCard.style.backgroundImage = `url('${selectedImage}')`;
}

setRandomWCIFBackground();
