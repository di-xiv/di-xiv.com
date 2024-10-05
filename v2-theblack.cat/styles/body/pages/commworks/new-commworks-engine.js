document.addEventListener('DOMContentLoaded', function() {
  // This array will store the image data
  const imageDataStore = [];

  // This array will store the available tags with their respective background colors
  const tags = [
    { name: 'Fullbody', backgroundColor: '#f57dad' },
    { name: 'Halfbody', backgroundColor: '#2af791' },
    { name: 'Portrait', backgroundColor: '#2a83f7' },
    { name: 'SafeForWork', backgroundColor: '#2ac955' },
    { name: 'Suggestive', backgroundColor: '#f5a92f' },
    { name: 'NSFW', backgroundColor: '#ad1a00' },
    { name: 'Erotica', backgroundColor: '#f75a2a' },
    { name: 'Pornographic', backgroundColor: '#f72a2a' },
    { name: 'Degen', backgroundColor: '#b62af7' },
  ];

  // Fetch the JSON file and store the data in imageDataStore
  fetch('styles/body/pages/commworks/commworks-gallery.json')
    .then(response => response.json())
    .then(data => {
      imageDataStore.push(...data); // Store the fetched data
      createTags(); // Create tags and add event listeners
      console.log('Image data loaded:', imageDataStore); // Check the structure of the loaded data
    })
    .catch(error => {
      console.error('Error fetching image data:', error);
    });


  // Function to add an image or video to the gallery based on file type
  function addImageToGallery(image) {
    console.log('Loading image:', image.src); // Log when an image is about to load
    const gallery = document.getElementById('gallery');
    const mediaCard = document.createElement('div');
    mediaCard.classList.add('image-card');

    let mediaElement;
    const fileExtension = image.src.split('.').pop().toLowerCase();

    if (fileExtension === 'mp4') {
      mediaElement = document.createElement('video');
      mediaElement.controls = true;
      mediaElement.classList.add('gallery-item');
      const sourceElement = document.createElement('source');
      sourceElement.src = image.src;
      sourceElement.type = 'video/mp4';
      mediaElement.appendChild(sourceElement);
    } else {
      mediaElement = document.createElement('img');
      mediaElement.classList.add('gallery-item');
      mediaElement.src = image.src;
      mediaElement.alt = 'Gallery image';
    }

    mediaCard.appendChild(mediaElement);

    const mediaInfo = document.createElement('div');
    mediaInfo.classList.add('image-info');
    mediaInfo.innerHTML = image.description;

    mediaCard.appendChild(mediaInfo);
    gallery.appendChild(mediaCard);
  }

  // Function to create tags and append them to the tag container
  function createTags() {
    console.log('Creating tags...'); // Check if tags are being created
    const tagContainer = document.getElementById('tagContainer');
    if (!tagContainer) {
      console.error('Tag container not found');
      return;
    }

    // Assuming 'tags' array is defined elsewhere in your code as provided in your previous message
    tags.forEach(tag => {
      const tagElement = document.createElement('div');
      tagElement.classList.add('tag');
      tagElement.innerText = tag.name;
      tagElement.style.backgroundColor = tag.backgroundColor;
      tagElement.dataset.tag = tag.name.toLowerCase();

      tagElement.addEventListener('click', function() {
        // Deselect all tags
        document.querySelectorAll('.tag').forEach(t => {
          t.classList.remove('tag-selected');
        });
        // Select the clicked tag
        this.classList.add('tag-selected');
        loadImagesForTag(tagElement.dataset.tag);
      });

      tagContainer.appendChild(tagElement);
    });
  }

  // Function to load images for a specific tag
  function loadImagesForTag(tag) {
    console.log('Loading images for tag:', tag); // Check if this function is called
    // Clear the gallery
    document.getElementById('gallery').innerHTML = '';
  
    // Filter imageDataStore for images with the selected tag and add them to the gallery
    imageDataStore.filter(image => image.tags.toLowerCase().split(' ').includes(tag.toLowerCase()))
      .forEach(image => addImageToGallery(image));
  }

  document.getElementById('gallery').addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
      const modal = document.querySelector('.modal');
      const modalImg = document.querySelector('.modal img');
      const modalDismiss = document.getElementById('modal-dismiss');
  
      if (modal && modalImg && modalDismiss) {
        modalImg.src = event.target.src;
        modalDismiss.style.display = 'block';
        modal.style.display = 'block';
      }
    }
  });
  
  document.querySelector('.modal').addEventListener('click', function() {
    this.style.display = 'none';
  });
  
  document.addEventListener('keydown', function(event) {
    const modal = document.querySelector('.modal');
    if (event.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
    }
  });
});