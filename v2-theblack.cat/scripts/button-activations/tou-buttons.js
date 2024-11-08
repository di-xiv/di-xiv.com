document.addEventListener('DOMContentLoaded', function () {
    var bodyCardsWrapper = document.getElementById('body-cards-wrapper');
    var touPage = document.getElementById('tou-page');
    var touBackButton = document.getElementById('tou-revert');
    var headerTitleText = document.getElementById('header-title-text');
    var headerTitleTextMobile = document.getElementById('header-title-text-mobile');

    function vibrate() {
        if ('vibrate' in navigator) {
            navigator.vibrate(100);
        } else{
            console.log('vibrate() is not supported');
        }
    }

    function handleRevertAction() {
        vibrate(); // Add vibration effect
        bodyCardsWrapper.style.display = '';
        touPage.style.display = 'none';
        touBackButton.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    document.getElementById('tou-card').addEventListener('click', function () {
        vibrate(); // Add vibration effect
        if (bodyCardsWrapper.style.display !== 'none') {
            bodyCardsWrapper.style.display = 'none';
            touPage.style.display = '';
            touBackButton.style.display = '';
        } else {
            handleRevertAction();
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('tou-revert').addEventListener('click', function () {
        handleRevertAction();
        vibrate(); // Add vibration effect
    });

    headerTitleText.addEventListener('click', function () {
        handleRevertAction();
        vibrate(); // Add vibration effect
    });

    headerTitleTextMobile.addEventListener('click', function () {
        handleRevertAction();
        vibrate(); // Add vibration effect
    });

    // Add event listener for the 'Esc' key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            handleRevertAction();
            clearQueryString()
        }
    });
});

