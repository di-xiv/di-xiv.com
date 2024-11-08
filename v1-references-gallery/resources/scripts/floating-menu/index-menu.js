document.addEventListener('DOMContentLoaded', function () {
    // Get references to the elements
    const indexMenuButton = document.getElementById('index-menu-button');
    const indexMenu = document.getElementById('index-menu');
    const menuIconBottomLeft = document.getElementById('index-menu-close-button');

    // Function to toggle the display of index-menu and index-menu-button with a delay
    function toggleMenuWithDelay() {
        setTimeout(function () {
            if (indexMenu.style.display === 'none' || indexMenu.style.display === '') {
                indexMenu.style.display = 'block';
                indexMenuButton.style.display = 'none';
            } else {
                indexMenu.style.display = 'none';
                indexMenuButton.style.display = 'block';
            }
        }, 30); // 300 milliseconds (0.3 seconds) delay
    }

    // Add a click event listener to the index-menu-button
    indexMenuButton.addEventListener('click', toggleMenuWithDelay);

    // Add a click event listener to the index-menu-close-button
    menuIconBottomLeft.addEventListener('click', function () {
        // Hide the index-menu and show the index-menu-button
        indexMenu.style.display = 'none';
        indexMenuButton.style.display = 'block';
    });
});