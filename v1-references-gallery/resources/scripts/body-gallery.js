const tagContainer = document.getElementById('tagContainer');
const galleriesContainer = document.getElementById('galleries');
const urlParams = new URLSearchParams(window.location.search);
const selectedGallery = urlParams.get('gallery');

const tags = [
  { name: '360ºPics', backgroundColor: '#f9d999' },
  { name: 'Breasts', backgroundColor: '#CB99C9' },
  //{ name: 'Face', backgroundColor: '#F49AC2' },
  { name: 'Hairstyles', backgroundColor: '#80bad9' },
  { name: 'Hands', backgroundColor: '#c8a99f' },
    //{ name: 'Jewelry', backgroundColor: '#AEC6CF' },
  { name: 'Tattoos', backgroundColor: '#99C7FF' },
  { name: 'COCK', backgroundColor: '#ffbdbd' },
  { name: 'Attires', backgroundColor: '#ffffff' },
];
const galleries = [
  {
    name: '360º (COCK Version)',
    url_id: 'fullbody-penis',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1hZUPjMAKtc7mMYvsjmIUd50ZrOWk64Gw?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',
    images: [
      { src: 'https://cdn.theblack.cat/gallery/fullbody/1.png', tags: '360ºPics' },
      { src: 'https://cdn.theblack.cat/gallery/fullbody/2.png', tags: '360ºPics' },
      { src: 'https://cdn.theblack.cat/gallery/fullbody/3.png', tags: '360ºPics' },
      { src: 'https://cdn.theblack.cat/gallery/fullbody/4.png', tags: '360ºPics' },
      { src: 'https://cdn.theblack.cat/gallery/fullbody/5.png', tags: '360ºPics' },
    ],
  },

  {
    name: '360º',
    url_id: 'fullbody',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1rK4cF_DiEXPA7bVPu2YhdLnVt5vzs-93?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',
    images: [
      { src: 'https://cdn.theblack.cat/gallery/fullbody-vagina/1.png', tags: '360ºPics' },
      { src: 'https://cdn.theblack.cat/gallery/fullbody-vagina/2.png', tags: '360ºPics' },
      { src: 'https://cdn.theblack.cat/gallery/fullbody-vagina/3.png', tags: '360ºPics' },
      { src: 'https://cdn.theblack.cat/gallery/fullbody-vagina/4.png', tags: '360ºPics' },
      { src: 'https://cdn.theblack.cat/gallery/fullbody-vagina/5.png', tags: '360ºPics' },
    ],
  },

  {
    name: 'Breasts',
    url_id: 'breasts',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/10TOcT8cfFCJ26IX-54VsAnuUy-86rVuL?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/breasts/1.png', tags: 'Breasts' },
      { src: 'https://cdn.theblack.cat/gallery/breasts/2.png', tags: 'Breasts' },
      { src: 'https://cdn.theblack.cat/gallery/breasts/3.png', tags: 'Breasts' },
      { src: 'https://cdn.theblack.cat/gallery/breasts/4.png', tags: 'Breasts' },
      { src: 'https://cdn.theblack.cat/gallery/breasts/5.png', tags: 'Breasts' },
      { src: 'https://cdn.theblack.cat/gallery/breasts/6.png', tags: 'Breasts' },
    ],
  },

  {
    name: '"Still Waters"',
    url_id: 'hairstyle-stillwaters',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1MmT2lqo385UnTngLtrKkcru346R9iau0?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/still-waters/1.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/still-waters/2.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/still-waters/3.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/still-waters/4.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/still-waters/5.png', tags: 'Hairstyles' },
    ],
  },

  {
    name: '"The Ewer Hair"',
    url_id: 'hairstyle-ewerhair',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1CA80Q3tfnCpJJ8Zl4xCiceqRCRAURdi8?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/the-ewer-hair/1.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/the-ewer-hair/2.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/the-ewer-hair/3.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/the-ewer-hair/4.png', tags: 'Hairstyles' },

    ],
  },
  
  {
    name: '"Alessandra"',
    url_id: 'hairstyle-alessandra',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1bVn8urEkiZZ61fHs1vHiHSakf7H8x_0m?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/alessandra/1.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/alessandra/2.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/alessandra/3.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/alessandra/4.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/alessandra/5.png', tags: 'Hairstyles' },

    ],
  },

  {
    name: '"Twinkle Twinkle"',
    url_id: 'hairstyle-twinkletwinkle',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/12GmWFkieYT7r7aTe0vpV6a8lX-CvjGV2?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/bob-hair/1.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/bob-hair/2.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/bob-hair/3.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/bob-hair/4.png', tags: 'Hairstyles' },
    ],
  },

  {
    name: '"Thorns"',
    url_id: 'hairstyle-thorns',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1ZUbwpqu_T4ZMVmid6y1-ZKB0jZ8llKEM?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/bob-hair-2/1.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/bob-hair-2/2.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/bob-hair-2/3.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/bob-hair-2/4.png', tags: 'Hairstyles' },
    ],
  },

  {
    name: '"Fifthteen"',
    url_id: 'hairstyle-fiftheen',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1EXTS3RUodfKtGs_w_AzM77bl0m6PjP1E?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/fifthteen/1.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/fifthteen/2.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/fifthteen/3.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/fifthteen/4.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/fifthteen/5.png', tags: 'Hairstyles' },
    ],
  },

  {
    name: '"Snow Corridor"',
    url_id: 'hairstyle-snowcorridor',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1GyQgVw7eV2-xRH2Lp-UB7xvFCbkIeJIE?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/snow-corridor/1.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/snow-corridor/2.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/snow-corridor/3.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/snow-corridor/4.png', tags: 'Hairstyles' },
    ],
  },

  {
    name: '"Violet"',
    url_id: 'hairstyle-violet',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1bRj9aVhmFdOsURKRd5-F7EraxYhyo3hU?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/violet-hair/1.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/violet-hair/2.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/violet-hair/3.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/violet-hair/4.png', tags: 'Hairstyles' },
    ],
  },
  {
    name: 'Hands',
    url_id: 'hands',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1zyr_lSEilFrZaxrTOpuajAVBfFEby80N?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/hands/1.png', tags: 'Hands' },
      { src: 'https://cdn.theblack.cat/gallery/hands/2.png', tags: 'Hands' },
      { src: 'https://cdn.theblack.cat/gallery/sfw-hands/1.png', tags: 'Hands' },
      { src: 'https://cdn.theblack.cat/gallery/sfw-hands/2.png', tags: 'Hands' },
      { src: 'https://cdn.theblack.cat/gallery/hands/3.png', tags: 'Hands' },
      { src: 'https://cdn.theblack.cat/gallery/hands/4.png', tags: 'Hands' },
      { src: 'https://cdn.theblack.cat/gallery/sfw-hands/4.png', tags: 'Hands' },
    ],
  },

  {
    name: 'Wing Earrings',
    url_id: 'Jewelry',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1ae_L5VYMx6kc3nytSS4XHdRrhikMbSWF?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/jewelry/1.png', tags: 'Jewelry' },
      { src: 'https://cdn.theblack.cat/gallery/jewelry/2.png', tags: 'Jewelry' },
      { src: 'https://cdn.theblack.cat/gallery/jewelry/3.png', tags: 'Jewelry' },
      { src: 'https://cdn.theblack.cat/gallery/jewelry/4.png', tags: 'Jewelry' },
    ],
  },

  {
    name: 'Tattoo nº1 Textures',
    url_id: 'tattoo-texture',
    download_icon: '&nbsp',
    images: [
      { src: 'https://cdn.theblack.cat/gallery/hidden/reference-textures/tattoo-texture/1.png', tags: 'Tattoos' },
      { src: 'https://cdn.theblack.cat/gallery/hidden/reference-textures/tattoo-texture/2.png', tags: 'Tattoos' },
    ],
  },

  {
    name: 'Tattoos (COCK Version)',
    url_id: 'tattoos-penis',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1-0kvdh6IKrGv-y8SozTgy6o3eF31a-Jn?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/tattoo/1.png', tags: 'Tattoos' },
      { src: 'https://cdn.theblack.cat/gallery/tattoo/2.png', tags: 'Tattoos' },
      { src: 'https://cdn.theblack.cat/gallery/tattoo/3.png', tags: 'Tattoos' },
      { src: 'https://cdn.theblack.cat/gallery/tattoo/4.png', tags: 'Tattoos' },
      { src: 'https://cdn.theblack.cat/gallery/tattoo/5.png', tags: 'Tattoos' },
    ],
  },

  {
    name: 'Tattoos',
    url_id: 'tattoos',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1-0kvdh6IKrGv-y8SozTgy6o3eF31a-Jn?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/tattoo-vagina/1.png', tags: 'Tattoos' },
      { src: 'https://cdn.theblack.cat/gallery/tattoo-vagina/2.png', tags: 'Tattoos' },
      { src: 'https://cdn.theblack.cat/gallery/tattoo-vagina/3.png', tags: 'Tattoos' },
      { src: 'https://cdn.theblack.cat/gallery/tattoo-vagina/5.png', tags: 'Tattoos' },
    ],
  },

  {
    name: 'Tattoo Texture:',
    url_id: 'tattoos-texture',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1-0kvdh6IKrGv-y8SozTgy6o3eF31a-Jn?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/hidden/reference-textures/tattoo-texture/1.png' },
      { src: 'https://cdn.theblack.cat/gallery/hidden/reference-textures/tattoo-texture/2.png' },
    ],
  },

  {
    name: 'COCK',
    url_id: 'penis',
    download_icon: '&nbsp<a href="hhttps://drive.google.com/drive/folders/1SXLYg_-aAxMfmwW9sC1Azlsuaym4-6lc?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/futanari/1.png', tags: 'COCK' },
      { src: 'https://cdn.theblack.cat/gallery/futanari/2.png', tags: 'COCK' },
      { src: 'https://cdn.theblack.cat/gallery/futanari/3.png', tags: 'COCK' },
      { src: 'https://cdn.theblack.cat/gallery/futanari/4.png', tags: 'COCK' },
      { src: 'https://cdn.theblack.cat/gallery/futanari/5.png', tags: 'COCK' },
      { src: 'https://cdn.theblack.cat/gallery/futanari/6.png', tags: 'COCK' },
    ],
  },

  {
    name: '"Ebyssia"',
    url_id: 'hairstyle-ebyssia',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1dbLyfEcCTjjmnsJD_o-9WgqsNz8pv-aJ?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/ebyssia/1.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/ebyssia/2.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/ebyssia/3.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/ebyssia/4.png', tags: 'Hairstyles' },
      { src: 'https://cdn.theblack.cat/gallery/hairstyles/ebyssia/5.png', tags: 'Hairstyles' },
    ],
  },

];


function createGallery(gallery) {
  const galleryElement = document.createElement('div');
  galleryElement.classList.add('gallery');
  galleryElement.dataset.tags = gallery.images.reduce((tags, image) => `${tags} ${image.tags}`, '');


  // Create the gallery title element
  const titleElement = document.createElement('div');
  titleElement.classList.add('gallery-title');

  // Create the download icon element and add the download_icon HTML
  const downloadIconElement = document.createElement('div');
  downloadIconElement.classList.add('download-icon');
  downloadIconElement.innerHTML = gallery.download_icon;

  // Add the download icon and gallery name to the title element
  titleElement.appendChild(downloadIconElement);
  const nameElement = document.createElement('span'); // Use a <span> instead of <div> for the name
  nameElement.innerHTML = gallery.name;
  titleElement.appendChild(nameElement);

  // Append the title element to the gallery element
  galleryElement.appendChild(titleElement);

  // ... Rest of the function remains the same ...
  const largeImageContainer = document.createElement('div');
  largeImageContainer.classList.add('large-image-container');
  const largeImage = document.createElement('img');
  largeImage.src = gallery.images[0].src;
  largeImageContainer.appendChild(largeImage);

  const thumbnailsContainer = document.createElement('div');
  thumbnailsContainer.classList.add('thumbnails-container');

  gallery.images.forEach((image) => {
    const thumbnail = document.createElement('img');
    thumbnail.src = image.src;
    thumbnail.classList.add('thumbnail'); // Add a class for thumbnail images
    thumbnail.addEventListener('click', () => {
      largeImage.src = image.src;
    });
    thumbnailsContainer.appendChild(thumbnail);
  });

  galleryElement.appendChild(largeImageContainer);
  galleryElement.appendChild(thumbnailsContainer);

  // Check if the current gallery's url_id matches the selectedGallery from the URL
  if (gallery.url_id === selectedGallery) {
    galleryElement.classList.add('selected-gallery');
  }

  return galleryElement;
}


function addTagToContainer(tag) {
  const tagElement = document.createElement('div');
  tagElement.classList.add('tag', 'tag-' + tag.name.toLowerCase());
  tagElement.innerText = tag.name;
  tagElement.style.backgroundColor = tag.backgroundColor;

  if (tag.name === 'Attires') {
    tagElement.addEventListener('click', function () {
      // Redirect to the desired website when the "Attires" tag is clicked
      window.location.href = 'attire-gallery'; // Replace with the desired URL
    });
  } else {
    tagElement.addEventListener('click', function () {
      // Deselect all tags first
      const selectedTags = Array.from(tagContainer.getElementsByClassName('tag-selected'));
      for (const selectedTag of selectedTags) {
        selectedTag.classList.remove('tag-selected');
      }
      // Select the clicked tag
      tagElement.classList.add('tag-selected');

      // Update the galleries based on the selected tag.
      updateGalleries();
    });
  }

  tagContainer.appendChild(tagElement);
}

function updateGalleries() {
    const selectedTag = tagContainer.querySelector('.tag-selected');
    const allGalleries = galleriesContainer.getElementsByClassName('gallery');
  
    if (!selectedTag) {
      // If no tag is selected, show all galleries
      for (const gallery of allGalleries) {
        gallery.style.display = 'block';
      }
    } else {
      const selectedTagName = selectedTag.innerText.toLowerCase();
      // Show galleries that have the selected tag (using "AND" operation)
      for (const gallery of allGalleries) {
        const galleryTags = gallery.dataset.tags.toLowerCase().split(' ');
        const displayGallery = galleryTags.includes(selectedTagName);
        gallery.style.display = displayGallery ? 'block' : 'none';
      }
    }
  }

function addGalleryToContainer(gallery) {
  const galleryElement = createGallery(gallery);

  // Check if any galleries are currently displayed in the container
  if (galleriesContainer.firstChild) {
    // Get the first gallery element currently in the container
    const firstGallery = galleriesContainer.firstChild;
    
    // Insert the new gallery element before the first gallery
    galleriesContainer.insertBefore(galleryElement, firstGallery);
  } else {
    // If no galleries are displayed, simply append the new gallery to the container
    galleriesContainer.appendChild(galleryElement);
  }
}


tags.forEach(tag => addTagToContainer(tag));
galleries.forEach(gallery => addGalleryToContainer(gallery));

document.addEventListener('click', (event) => {
  const zoomedGallery = galleriesContainer.querySelector('.gallery.zoomed');
  if (zoomedGallery && !zoomedGallery.contains(event.target)) {
    // If a zoomed gallery exists and the click is outside of it, revert the zoom
    if (zoomedImage) {
      zoomedImage.classList.remove('zoomed');
      zoomedImage = null;
    }
  }
});

function getURLParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function showGalleryByName(galleryName) {
  const galleryId = galleryName.toLowerCase().replace(/\s/g, '-');
  const galleryElement = document.getElementById(galleryId);
  if (galleryElement) {
    galleryElement.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const allGalleries = galleriesContainer.getElementsByClassName('gallery');

  for (const gallery of allGalleries) {
    if (gallery.classList.contains('selected-gallery')) {
      gallery.style.display = 'block';
    } else {
      gallery.style.display = 'none';
    }
  }
});