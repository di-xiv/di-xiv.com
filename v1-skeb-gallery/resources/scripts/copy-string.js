    function copyEmailToClipboard() {
        var email = document.getElementById('email-content').getAttribute('href').replace('mailto:', '');
        navigator.clipboard.writeText(email)
          .then(function() {
            console.log('Email copied to clipboard');
          })
          .catch(function(err) {
            console.error('Failed to copy email: ', err);
          });
  
        document.getElementById('emailImage').src = "https://cdn.theblack.cat/resources/thank-you-flaticons/check.png";
        setTimeout(function() {
          document.getElementById('emailImage').src = "https://cdn.theblack.cat/resources/thank-you-flaticons/copy.png";
        }, 2500);
      }
  
      // Function to handle text copying
      function copyTextToClipboard() {
        var dcHandletoCopy = "di_theblackcat";
        navigator.clipboard.writeText(dcHandletoCopy)
          .then(function() {
            console.log('Text copied to clipboard');
          })
          .catch(function(err) {
            console.error('Failed to copy text: ', err);
          });
  
        document.getElementById('discordImage').src = "https://cdn.theblack.cat/resources/thank-you-flaticons/check.png";
        setTimeout(function() {
          document.getElementById('discordImage').src = "https://cdn.theblack.cat/resources/thank-you-flaticons/copy.png";
        }, 2500);
      }
  

  document.getElementById('emailImage').addEventListener('click', function() {
    copyEmailToClipboard();
  });

  document.getElementById('discordImage').addEventListener('click', function() {
    copyTextToClipboard();
  });

  // Adding the "img-inverter" class to the elements
  document.getElementById('emailImage').classList.add('img-inverter');
  document.getElementById('discordImage').classList.add('img-inverter');