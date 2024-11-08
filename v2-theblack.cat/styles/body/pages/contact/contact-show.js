document.addEventListener('DOMContentLoaded', function () {
    var headerContact = document.getElementById('header-contact');
    var contactPageWrapper = document.getElementById('contact-page-wrapper');

    function showContactPage() {
        contactPageWrapper.style.display = '';
    }

    function hideContactPage() {
        contactPageWrapper.style.display = 'none';
    }

    headerContact.addEventListener('click', showContactPage);

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            hideContactPage();
        }
    });
});