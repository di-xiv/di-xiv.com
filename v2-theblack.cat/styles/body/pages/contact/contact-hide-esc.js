document.addEventListener('DOMContentLoaded', function () {
    var contactPageWrapper = document.getElementById('contact-page-wrapper');

    function hideContactPage() {
        contactPageWrapper.style.display = 'none';
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            hideContactPage();
            clearQueryString()
        }
    });
    contactPageWrapper.addEventListener('click', hideContactPage);
});
