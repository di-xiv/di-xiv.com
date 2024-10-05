document.addEventListener('DOMContentLoaded', function () {
    var infoHeader = document.getElementById('header-info');
    var infoPageWrapper = document.getElementById('info-page-wrapper');

    function showInfoPage() {
        infoPageWrapper.style.display = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    infoHeader.addEventListener('click', showInfoPage);
});