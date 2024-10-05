document.addEventListener('DOMContentLoaded', function () {
    var bodyCardsWrapper = document.getElementById('body-cards-wrapper');
    var wcifPage = document.getElementById('wcif-page');
    var wcifBackButton = document.getElementById('wcif-revert');
    var headerTitleText = document.getElementById('header-title-text');
    var headerTitleTextMobile = document.getElementById('header-title-text-mobile');

    function vibrate() {
        if ('vibrate' in navigator) {
            navigator.vibrate(100);
        }
    }

    function handleRevertAction() {
        vibrate();
        bodyCardsWrapper.style.display = '';
        wcifPage.style.display = 'none';
        wcifBackButton.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    document.getElementById('wcif-card').addEventListener('click', function () {
        vibrate();
        if (bodyCardsWrapper.style.display !== 'none') {
            bodyCardsWrapper.style.display = 'none';
            wcifPage.style.display = '';
            wcifBackButton.style.display = '';
        } else {
            handleRevertAction();
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('wcif-revert').addEventListener('click', function () {
        handleRevertAction();
    });

    headerTitleText.addEventListener('click', function () {
        handleRevertAction();
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
