document.addEventListener('DOMContentLoaded', function() {
  var footer = document.getElementById('footer');
  var footerWrapper = document.getElementById('footer-wrapper');
  var windowHeight = window.innerHeight;

  function checkFooterVisibility() {
    var contentHeight = footerWrapper.offsetHeight;

    if (contentHeight < windowHeight) {
      footer.style.display = '';
    } else {
      footer.style.display = 'none';
    }
  }

  checkFooterVisibility();

  window.addEventListener('resize', function() {
    windowHeight = window.innerHeight;
    checkFooterVisibility();
  });
});

  