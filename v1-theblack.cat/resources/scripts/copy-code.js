document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.querySelector('.copy-button');
    const codeSnippet = document.querySelector('code');
  
    copyButton.addEventListener('click', () => {
      const codeText = codeSnippet.textContent;
  
      navigator.clipboard.writeText(codeText)
        .then(() => {
          console.log('Code copied to clipboard');
          copyButton.innerHTML = '<img src="https://cdn.theblack.cat/resources/thank-you-flaticons/check.png" width="19" height="19" class="inline-icon img-inverter">';
          setTimeout(() => {
            copyButton.innerHTML = '<img src="https://cdn.theblack.cat/resources/thank-you-flaticons/copy.png" width="19" height="19" class="inline-icon img-inverter">';
          }, 3000);
        })
        .catch((err) => {
          console.error('Failed to copy code: ', err);
        });
    });
  });