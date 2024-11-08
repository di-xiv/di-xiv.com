document.addEventListener('DOMContentLoaded', () => {
    const copyRegularCPlusButton = document.querySelector('.copy-button-cplus-regular');
    const codeCPlusRegular = document.querySelector('.code-cplus-regular');
  
    copyRegularCPlusButton.addEventListener('click', () => {
      const codeText = codeCPlusRegular.textContent;
  
      navigator.clipboard.writeText(codeText)
        .then(() => {
          console.log('Code copied to clipboard');
          copyRegularCPlusButton.innerHTML = '<img src="../../resources/images/icons/check.svg" width="19" height="19" class="inline-icon">';
          setTimeout(() => {
            copyRegularCPlusButton.innerHTML = '<img src="../../resources/images/icons/copy.svg" width="19" height="19" class="inline-icon img-inverter">';
          }, 3000);
        })
        .catch((err) => {
          console.error('Failed to copy code: ', err);
        });
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const copyEXQBCPlusButton = document.querySelector('.copy-button-cplus-exqb');
    const codeEXQBCPlus = document.querySelector('.code-cplus-exqb');
  
    copyEXQBCPlusButton.addEventListener('click', () => {
      const codeText = codeEXQBCPlus.textContent;
  
      navigator.clipboard.writeText(codeText)
        .then(() => {
          console.log('Code copied to clipboard');
          copyEXQBCPlusButton.innerHTML = '<img src="../../resources/images/icons/check.svg" width="19" height="19" class="inline-icon">';
          setTimeout(() => {
            copyEXQBCPlusButton.innerHTML = '<img src="../../resources/images/icons/copy.svg" width="19" height="19" class="inline-icon img-inverter">';
          }, 3000);
        })
        .catch((err) => {
          console.error('Failed to copy code: ', err);
        });
    });
  });