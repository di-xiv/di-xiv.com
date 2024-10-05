document.addEventListener("DOMContentLoaded", function () {
    var bodyCardsWrapper = document.getElementById('body-cards-wrapper');
    var infoPageWrapper = document.getElementById('info-page-wrapper');
    var contactPageWrapper = document.getElementById('contact-page-wrapper');
    var touPage = document.getElementById('tou-page');
    var touBackButton = document.getElementById('tou-revert');
    var wcifPage = document.getElementById('wcif-page');
    var wcifBackButton = document.getElementById('wcif-revert');
    var urlParams = new URLSearchParams(window.location.search);

    function showInfoPage() {
        infoPageWrapper.style.display = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function showContactPage() {
        contactPageWrapper.style.display = '';
    }

    function showTouPages() {
        bodyCardsWrapper.style.display = 'none';
        touPage.style.display = '';
        touBackButton.style.display = '';
    }
    function showWCIFPages() {
        bodyCardsWrapper.style.display = 'none';
        wcifPage.style.display = '';
        wcifBackButton.style.display = '';
    }

    if (urlParams.has("link") && urlParams.get("link") === "contact") {
        showContactPage();
    }

    if (urlParams.has("link") && urlParams.get("link") === "info") {
        showInfoPage();
    }

    if (urlParams.has("link") && urlParams.get("link") === "tou") {
        showTouPages();
    }

    if (urlParams.has("link") && urlParams.get("link") === "wcif") {
        showWCIFPages();
    }
});
