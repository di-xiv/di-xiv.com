      // Check if the browser supports matchMedia
      if (window.matchMedia) {
        // Check if the browser prefers dark mode
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        console.log(prefersDarkMode);  
        if (prefersDarkMode) {
          // Dark mode is enabled, activate the dark mode script here
          console.log('Dark mode is enabled.');
          window.onloadTurnstileCallback = function() {
            turnstile.render('#turnstile-widget', {
              sitekey: '0x4AAAAAAAHvIx2O_lyI4AvC',
              theme: 'dark',
              callback: function(token) {
                console.log(`Challenge Success ${token}`);
                hideCaptchaAndShowContent();
              },
            });
          };
          function hideCaptchaAndShowContent() {
            document.querySelector(".captcha-box").style.display = "block";
            document.querySelector(".captcha-widget").style.display = "none";
          }
        } else {
          // Dark mode is not enabled, activate the light mode script here
          window.onloadTurnstileCallback = function() {
            turnstile.render('#turnstile-widget', {
              sitekey: '0x4AAAAAAAHvIx2O_lyI4AvC',
              theme: 'light',
              callback: function(token) {
                console.log(`Challenge Success ${token}`);
                hideCaptchaAndShowContent();
              },
            });
          };
          function hideCaptchaAndShowContent() {
            document.querySelector(".captcha-box").style.display = "block";
            document.querySelector(".captcha-widget").style.display = "none";
          }
        }
      } else {
        // Fallback for older browsers that do not support matchMedia
        console.log('matchMedia not supported, unable to determine dark mode.');
        // You can either activate dark mode by default or show a message about unsupported feature
        // Activate your preferred mode (dark/light) by default or display an error message here
      }