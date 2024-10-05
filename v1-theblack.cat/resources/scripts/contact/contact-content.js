document.addEventListener("DOMContentLoaded", function () {
  const buttons = [
    { button: document.getElementById('contact-email-button'), content: document.getElementById('contact-content-email') },
    { button: document.getElementById('contact-twitter-button'), content: document.getElementById('contact-content-twitter') },
    { button: document.getElementById('contact-discord-button'), content: document.getElementById('contact-content-discord') },
    { button: document.getElementById('contact-misskey-button'), content: document.getElementById('contact-content-misskey') },
    { button: document.getElementById('contact-pixiv-button'), content: document.getElementById('contact-content-pixiv') },
    { button: document.getElementById('contact-aethy-button'), content: document.getElementById('contact-content-aethy') }
  ];

  const defaultContent = document.getElementById('contact-content-default');
  defaultContent.style.display = 'none';

  function showContent(selectedContent) {
    buttons.forEach(item => {
      item.content.style.display = (item === selectedContent) ? '' : 'none';
      
      if (item === selectedContent && item.button) {
        item.button.classList.add('hovered');
      } else {
        item.button.classList.remove('hovered');
      }
    });

    defaultContent.style.display = 'none';
  }

  buttons.forEach(item => {
    item.button.addEventListener('click', () => {
      showContent(item);
    });
  });

  defaultContent.style.display = '';
});
