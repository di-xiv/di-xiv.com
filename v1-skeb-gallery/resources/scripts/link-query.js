function showDivsBasedOnQueryParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const link = urlParams.get('link');

    if (link === 'tbc') {
        toggleTBCDetails();
    } else if (link === 'author') {
        toggleAuthorDetails();
    } else if (link === 'galleries') {
        toggleGalleryDetails();
    }
}

// Execute the function on page load to check if there's a query parameter and show the corresponding divs
window.onload = showDivsBasedOnQueryParam;