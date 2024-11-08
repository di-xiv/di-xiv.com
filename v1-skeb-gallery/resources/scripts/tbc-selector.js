function toggleTBCDetails() {
  // Get the elements by their IDs
  const tbcShowTitleDiv = document.getElementById('tbc-show-title');
  const tbcShowContainerDiv = document.getElementById('tbc-show-container');
  const tbcShowBackDiv = document.getElementById('tbc-show-back');
  const linktreeContainerDiv = document.getElementById('linktree-container');
  const tbcDiv = document.getElementById('tbc');
  const authorDivContainer = document.getElementById('author');

  // Remove the "display: none;" style from the tbc details
  tbcShowTitleDiv.style.display = '';
  tbcShowContainerDiv.style.display = '';
  tbcShowBackDiv.style.display = '';

  // Add the "display: none;" style to linktree, tbc, and author
  linktreeContainerDiv.style.display = 'none';
  tbcDiv.style.display = 'none';
  authorDivContainer.style.display = 'none';

  // Remove the existing click event listener from tbcShowBackDiv
  tbcShowBackDiv.removeEventListener('click', toggleTBCBack);

  // Attach click event to the back button
  tbcShowBackDiv.addEventListener('click', toggleTBCBack);
}

function toggleAuthorDetails() {
  // Get the elements by their IDs
  const authorShowTitleDiv = document.getElementById('author-show-title');
  const authorShowContainerDiv = document.getElementById('author-show-container');
  const authorShowBackDiv = document.getElementById('author-show-back');
  const linktreeContainerDiv = document.getElementById('linktree-container');
  const tbcDiv = document.getElementById('tbc');
  const tbcShowTitleDiv = document.getElementById('tbc-show-title');
  const tbcShowContainerDiv = document.getElementById('tbc-show-container');
  const tbcShowBackDiv = document.getElementById('tbc-show-back');

  // Remove the "display: none;" style from the author details
  authorShowTitleDiv.style.display = '';
  authorShowContainerDiv.style.display = '';
  authorShowBackDiv.style.display = '';

  // Add the "display: none;" style to linktree, tbc details, and revert tbc-show
  linktreeContainerDiv.style.display = 'none';
  tbcDiv.style.display = 'none';
  tbcShowTitleDiv.style.display = 'none';
  tbcShowContainerDiv.style.display = 'none';
  tbcShowBackDiv.style.display = 'none';

  // Remove the existing click event listener from tbcShowBackDiv
  tbcShowBackDiv.removeEventListener('click', toggleTBCBack);

  // Attach click event to the back button
  authorShowBackDiv.addEventListener('click', toggleAuthorBack);
}

// Function to toggle gallery details and hide other sections
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

  // Show gallery details
  galleriesShowTitleDiv.style.display = '';
  galleriesShowContainerDiv.style.display = '';
  galleriesShowBackDiv.style.display = '';

  // Hide other sections
  tbcShowTitleDiv.style.display = 'none';
  tbcShowContainerDiv.style.display = 'none';
  tbcShowBackDiv.style.display = 'none';
  linktreeContainerDiv.style.display = 'none';
  tbcDiv.style.display = 'none';
  authorDivContainer.style.display = 'none';

  // Remove the existing click event listener from tbcShowBackDiv
  tbcShowBackDiv.removeEventListener('click', toggleTBCBack);

  // Attach click event to the back button for gallery details
  galleriesShowBackDiv.addEventListener('click', toggleGalleryBack);
}

// Set up event listener for the "Galleries" show button
const galleriesShowButton = document.getElementById('galleries-show-button');
galleriesShowButton.addEventListener('click', toggleGalleryDetails);

function toggleTBCBack() {
  const tbcShowTitleDiv = document.getElementById('tbc-show-title');
  const tbcShowContainerDiv = document.getElementById('tbc-show-container');
  const tbcShowBackDiv = document.getElementById('tbc-show-back');
  const linktreeContainerDiv = document.getElementById('linktree-container');
  const tbcDiv = document.getElementById('tbc');
  const authorDivContainer = document.getElementById('author');

  tbcShowTitleDiv.style.display = 'none';
  tbcShowContainerDiv.style.display = 'none';
  tbcShowBackDiv.style.display = 'none';
  linktreeContainerDiv.style.display = '';
  tbcDiv.style.display = '';
  authorDivContainer.style.display = '';
}

function toggleAuthorBack() {
  const authorShowTitleDiv = document.getElementById('author-show-title');
  const authorShowContainerDiv = document.getElementById('author-show-container');
  const authorShowBackDiv = document.getElementById('author-show-back');
  const linktreeContainerDiv = document.getElementById('linktree-container');
  const tbcDiv = document.getElementById('tbc');
  const tbcShowTitleDiv = document.getElementById('tbc-show-title');
  const tbcShowContainerDiv = document.getElementById('tbc-show-container');
  const tbcShowBackDiv = document.getElementById('tbc-show-back');

  // Hide author details
  authorShowTitleDiv.style.display = 'none';
  authorShowContainerDiv.style.display = 'none';
  authorShowBackDiv.style.display = 'none';

  // Show linktree, tbc, and tbc-show elements
  linktreeContainerDiv.style.display = '';
  tbcDiv.style.display = '';
  tbcShowTitleDiv.style.display = 'none';
  tbcShowContainerDiv.style.display = 'none';
  tbcShowBackDiv.style.display = 'none';

}

// Function to toggle back from gallery details and show other sections
function toggleGalleryBack() {
  const galleriesShowTitleDiv = document.getElementById('galleries-show-title');
  const galleriesShowContainerDiv = document.getElementById('galleries-show-container');
  const galleriesShowBackDiv = document.getElementById('galleries-show-back');
  const tbcShowTitleDiv = document.getElementById('tbc-show-title');
  const tbcShowContainerDiv = document.getElementById('tbc-show-container');
  const tbcShowBackDiv = document.getElementById('tbc-show-back');
  const linktreeContainerDiv = document.getElementById('linktree-container');
  const tbcDiv = document.getElementById('tbc');
  const authorDivContainer = document.getElementById('author');

  // Hide gallery details
  galleriesShowTitleDiv.style.display = 'none';
  galleriesShowContainerDiv.style.display = 'none';
  galleriesShowBackDiv.style.display = 'none';

  // Show other sections
  tbcShowTitleDiv.style.display = '';
  tbcShowContainerDiv.style.display = '';
  tbcShowBackDiv.style.display = '';
  linktreeContainerDiv.style.display = 'none';
  tbcDiv.style.display = '';
  authorDivContainer.style.display = 'none';

  // Attach click event to the back button for TBC details
  tbcShowBackDiv.addEventListener('click', toggleTBCBack);
}

// Set up event listener for the "Galleries" back button
const galleriesShowBackDiv = document.getElementById('galleries-show-back');
galleriesShowBackDiv.addEventListener('click', toggleGalleryBack);

