function toggleGalleryDetails() {
    // Get the elements by their IDs
    const galleriesShowTitleDiv = document.getElementById('galleries-show-title');
    const galleriesShowContainerDiv = document.getElementById('galleries-show-container');
    const galleriesShowBackDiv = document.getElementById('galleries-show-back');
    const tbcShowTitleDiv = document.getElementById('tbc-show-title');
    const tbcShowContainerDiv = document.getElementById('tbc-show-container');
    const tbcShowBackDiv = document.getElementById('tbc-show-back');
    const linktreeContainerDiv = document.getElementById('linktree-container');
    const tbcDiv = document.getElementById('tbc');
    const authorDivContainer = document.getElementById('author');
  
    // Remove the "display: none;" style from the gallery details
    galleriesShowTitleDiv.style.display = '';
    galleriesShowContainerDiv.style.display = '';
    galleriesShowBackDiv.style.display = '';
  
    // Add the "display: none;" style to tbc details and revert linktree, tbc, and author
    tbcShowTitleDiv.style.display = 'none';
    tbcShowContainerDiv.style.display = 'none';
    tbcShowBackDiv.style.display = 'none';
    linktreeContainerDiv.style.display = '';
    tbcDiv.style.display = '';
    authorDivContainer.style.display = '';
  
  // Attach click event to the back button
  tbcShowBackDiv.addEventListener('click', function() {
    // Revert the display changes when the back button is clicked
    tbcShowTitleDiv.style.display = 'none';
    tbcShowContainerDiv.style.display = 'none';
    tbcShowBackDiv.style.display = 'none';
    linktreeContainerDiv.style.display = '';
    tbcDiv.style.display = '';
    authorDivContainer.style.display = '';
  });
}
function toggleGalleryDetails() {
    // Get the elements by their IDs
    const galleriesShowTitleDiv = document.getElementById('galleries-show-title');
    const galleriesShowContainerDiv = document.getElementById('galleries-show-container');
    const galleriesShowBackDiv = document.getElementById('galleries-show-back');
    const tbcShowTitleDiv = document.getElementById('tbc-show-title');
    const tbcShowContainerDiv = document.getElementById('tbc-show-container');
    const tbcShowBackDiv = document.getElementById('tbc-show-back');
    const linktreeContainerDiv = document.getElementById('linktree-container');
    const tbcDiv = document.getElementById('tbc');
    const authorDivContainer = document.getElementById('author');
  
    // Remove the "display: none;" style from the gallery details
    galleriesShowTitleDiv.style.display = '';
    galleriesShowContainerDiv.style.display = '';
    galleriesShowBackDiv.style.display = '';
  
    // Add the "display: none;" style to tbc details, linktree, tbc, and author
    tbcShowTitleDiv.style.display = 'none';
    tbcShowContainerDiv.style.display = 'none';
    tbcShowBackDiv.style.display = 'none';
    linktreeContainerDiv.style.display = 'none';
    tbcDiv.style.display = 'none';
    authorDivContainer.style.display = 'none';
  
    // Attach click event to the back button
    galleriesShowBackDiv.addEventListener('click', function() {
      // Revert the display changes when the back button is clicked
      galleriesShowTitleDiv.style.display = 'none';
      galleriesShowContainerDiv.style.display = 'none';
      galleriesShowBackDiv.style.display = 'none';
      tbcShowTitleDiv.style.display = '';
      tbcShowContainerDiv.style.display = '';
      tbcShowBackDiv.style.display = '';
      linktreeContainerDiv.style.display = '';
      tbcDiv.style.display = '';
      authorDivContainer.style.display = '';
    });
  }