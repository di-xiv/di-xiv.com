const imagesToUCard = [
  'resources/images/bg-images/vertical/freepik-capybara-vertical.avif',
];

function getimagesToUCard() {
  return imagesToUCard[Math.floor(Math.random() * imagesToUCard.length)];
}

function setRandomBackgroundBodyRefBG() {
  const selectedImage = getimagesToUCard();
  const containerToUCard = document.getElementById('tou-card');
  containerToUCard.style.backgroundImage = `url('${selectedImage}')`;
}

setRandomBackgroundBodyRefBG();
