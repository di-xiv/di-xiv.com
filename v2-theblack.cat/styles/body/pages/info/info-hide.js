document.addEventListener('DOMContentLoaded', function () {
    var infoPageWrapper = document.getElementById('info-page-wrapper');

    function hideInfoPage() {
        infoPageWrapper.style.display = 'none';
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            hideInfoPage();
            clearQueryString()
        }
    });
    infoPageWrapper.addEventListener('click', hideInfoPage);
});
