window.addEventListener('scroll', function() {
  const header = document.getElementById('topBar');
  const headerContent = document.querySelector('.header-content');
  const scrollAmount = window.scrollY;
  const scrollThreshold = 5; // 7vh

  if (scrollAmount >= scrollThreshold) {
    header.classList.remove('glassbox-25');
    header.classList.add('glassbox-10');
    header.style.height = '3vh';
    headerContent.style.fontSize = '70%';
  } else {
    header.classList.remove('glassbox-10');
    header.classList.add('glassbox-25');
    header.style.height = '5vh';
    headerContent.style.fontSize = '100%';
  }
});
