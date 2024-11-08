document.addEventListener('DOMContentLoaded', function() {
  function copyEmailToClipboard() {
    var email = document.getElementById('email-addr').getAttribute('href').replace('mailto:', '');
    navigator.clipboard.writeText(email)
      .then(function() {
        console.log('Email copied to clipboard');
      })
      .catch(function(err) {
        console.error('Failed to copy email: ', err);
      });

    document.getElementById('email-copy-icon').src = "resources/images/icons/check.svg";
    setTimeout(function() {
      document.getElementById('email-copy-icon').src = "resources/images/icons/copy.svg";
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

    document.getElementById('dc-copy-icon').src = "resources/images/icons/check.svg";
    setTimeout(function() {
      document.getElementById('dc-copy-icon').src = "resources/images/icons/copy.svg";
    }, 2500);
  }

  document.getElementById('email-copy-icon').addEventListener('click', function() {
    copyEmailToClipboard();
  });

  document.getElementById('dc-copy-icon').addEventListener('click', function() {
    copyTextToClipboard();
  });

  // Adding the "img-inverter" class to the elements
    document.getElementById('email-copy-icon').classList.add('img-inverter');
    document.getElementById('dc-copy-icon').classList.add('img-inverter');
});
