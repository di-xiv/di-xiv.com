function toggleAuthorDetails() {
  // Get the elements by their IDs
  const authorShowTitleDiv = document.getElementById('author-show-title');
  const authorShowContainerDiv = document.getElementById('author-show-container');
  const authorShowBackDiv = document.getElementById('author-show-back');
  const linktreeContainerDiv = document.getElementById('linktree-container');
  const tbcDiv = document.getElementById('tbc');
  const authorDivContainer = document.getElementById('author');

  // Remove the "display: none;" style from the author details
  authorShowTitleDiv.style.display = '';
  authorShowContainerDiv.style.display = '';
  authorShowBackDiv.style.display = '';

  // Add the "display: none;" style to linktree, tbc, and author
  linktreeContainerDiv.style.display = 'none';
  tbcDiv.style.display = 'none';
  authorDivContainer.style.display = 'none';

  // Attach click event to the back button
  authorShowBackDiv.addEventListener('click', function() {
    // Revert the display changes when the back button is clicked
    authorShowTitleDiv.style.display = 'none';
    authorShowContainerDiv.style.display = 'none';
    authorShowBackDiv.style.display = 'none';
    linktreeContainerDiv.style.display = '';
    tbcDiv.style.display = '';
    authorDivContainer.style.display = '';
  });
}