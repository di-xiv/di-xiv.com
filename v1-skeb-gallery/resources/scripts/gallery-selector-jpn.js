const tagContainer = document.getElementById('tagContainer');
const galleriesContainer = document.getElementById('galleries');
const urlParams = new URLSearchParams(window.location.search);
const selectedGallery = urlParams.get('gallery');

const tags = [
  { name: '完全な服装', backgroundColor: '#f9d999' },// Glamour Plates     
  { name: '頭服', backgroundColor: '#CB99C9' },     // Headpieces
  { name: '宝石', backgroundColor: '#F49AC2' },     // Jewelry
  { name: '胸当て', backgroundColor: '#80bad9' },   // Chest pieces   
  { name: '手袋', backgroundColor: '#c8a99f' },     // Handwear 
  { name: '脚衣', backgroundColor: '#AEC6CF' },     // Legwear
  { name: '履物', backgroundColor: '#99C7FF' },     // Footwear 
  { name: '戻る', backgroundColor: '#ffffff' },     // Back
];
const galleries = [
  {
    name: '服装第一',
    url_id: 'attire-one',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1EughyXwEkcQj6OpSDBYfuPIkowJlv_Zf?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',
    images: [
      { src: 'https://cdn.theblack.cat/gallery/attires/glamourplates/attire-one/1.png', tags: '完全な服装' },
      { src: 'https://cdn.theblack.cat/gallery/attires/glamourplates/attire-one/2.png', tags: '完全な服装' },
      { src: 'https://cdn.theblack.cat/gallery/attires/glamourplates/attire-one/3.png', tags: '完全な服装' },
      { src: 'https://cdn.theblack.cat/gallery/attires/glamourplates/attire-one/4.png', tags: '完全な服装' },
    ],
  },

  {
    name: '服装第一2',
    url_id: 'attire-two',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1t0WxaRpE3dQp2g7x40eioYj9GOeZ3vN2?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/attires/glamourplates/attire-two/1.png', tags: '完全な服装' },
      { src: 'https://cdn.theblack.cat/gallery/attires/glamourplates/attire-two/2.png', tags: '完全な服装' },
      { src: 'https://cdn.theblack.cat/gallery/attires/glamourplates/attire-two/3.png', tags: '完全な服装' },
      { src: 'https://cdn.theblack.cat/gallery/attires/glamourplates/attire-two/4.png', tags: '完全な服装' },
    ],
  },

  {
    name: '服装第一3',
    url_id: 'attire-three',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/19JVWBzmuPQfyh74R8H_alH2i02eisdvp?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/attires/glamourplates/attire-three/1.png', tags: '完全な服装' },
      { src: 'https://cdn.theblack.cat/gallery/attires/glamourplates/attire-three/2.png', tags: '完全な服装' },
      { src: 'https://cdn.theblack.cat/gallery/attires/glamourplates/attire-three/3.png', tags: '完全な服装' },
      { src: 'https://cdn.theblack.cat/gallery/attires/glamourplates/attire-three/4.png', tags: '完全な服装' },
    ],
  },

  {
    name: '服装第一4',
    url_id: 'attire-four',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1xwCdjI3RSIsvAxU8q7uBFIpFaVr4BiX6?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/attires/glamourplates/attire-four/1.png', tags: '完全な服装' },
      { src: 'https://cdn.theblack.cat/gallery/attires/glamourplates/attire-four/2.png', tags: '完全な服装' },
      { src: 'https://cdn.theblack.cat/gallery/attires/glamourplates/attire-four/3.png', tags: '完全な服装' },
      { src: 'https://cdn.theblack.cat/gallery/attires/glamourplates/attire-four/4.png', tags: '完全な服装' },
    ],
  },
  
  {
    name: '服装第一5',
    url_id: 'attire-five',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/15SxFGesX4uzpXayEqmscx-7SoJlwsN3-?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/attires/glamourplates/attire-five/1.png', tags: '完全な服装' },
      { src: 'https://cdn.theblack.cat/gallery/attires/glamourplates/attire-five/2.png', tags: '完全な服装' },
      { src: 'https://cdn.theblack.cat/gallery/attires/glamourplates/attire-five/3.png', tags: '完全な服装' },
      { src: 'https://cdn.theblack.cat/gallery/attires/glamourplates/attire-five/4.png', tags: '完全な服装' },
    ],
  },

  {
    name: '服装第一6',
    url_id: 'attire-six',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1uxJ9ySewWTnx2d-L3VCmYAJliaMZeB7W?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/attires/glamourplates/attire-six/1.png', tags: '完全な服装' },
      { src: 'https://cdn.theblack.cat/gallery/attires/glamourplates/attire-six/2.png', tags: '完全な服装' },
      { src: 'https://cdn.theblack.cat/gallery/attires/glamourplates/attire-six/3.png', tags: '完全な服装' },
      { src: 'https://cdn.theblack.cat/gallery/attires/glamourplates/attire-six/4.png', tags: '完全な服装' },
    ],
  },

  {
    name: 'ミニスカート',
    url_id: 'miniskirt',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1t_Kd3CbZvpK-bivvgna-G9AhxI258eAc?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/miniskirt/1.png', tags: '脚衣' },
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/miniskirt/2.png', tags: '脚衣' },
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/miniskirt/3.png', tags: '脚衣' },
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/miniskirt/4.png', tags: '脚衣' },
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/miniskirt/5.png', tags: '脚衣' },
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/miniskirt/6.png', tags: '脚衣' },
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/miniskirt/7.png', tags: '脚衣' },
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/miniskirt/8.png', tags: '脚衣' },
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/miniskirt/9.png', tags: '脚衣' },
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/miniskirt/10.png', tags: '脚衣' },
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/miniskirt/11.png', tags: '脚衣' },
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/miniskirt/12.png', tags: '脚衣' },
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/miniskirt/13.png', tags: '脚衣' },
    ],
  },

  {
    name: 'ハンドラッピング',
    url_id: 'handwraps',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1TlXUiVlmBmdRwt3ypOFtJZ_NPuCd3Awh?usp=sharing" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/handwraps/1.png', tags: '手袋' },
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/handwraps/2.png', tags: '手袋' },

    ],
  },

  {
    name: 'バレリーナ靴下',
    url_id: 'dancer-socks',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1nwOkBs3IwD1krj7MbEIp5YPN7OkX8XTV?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/dancer-socks/1.png', tags: '履物' },
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/dancer-socks/2.png', tags: '履物' },
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/dancer-socks/3.png', tags: '履物' },

    ],
  },

  {
    name: '"Spun Sugar" - ハイプラットフォームサンダル',
    url_id: 'spun-sugar',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1nwOkBs3IwD1krj7MbEIp5YPN7OkX8XTV?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/spun-sugar/1.png', tags: 'Footwear' },
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/spun-sugar/2.png', tags: 'Footwear' },
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/spun-sugar/3.png', tags: 'Footwear' },

    ],
  },  

  {
    name: 'ウィング・イヤースタッド',
    url_id: 'wing-earring',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1TlXUiVlmBmdRwt3ypOFtJZ_NPuCd3Awh?usp=sharing" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/jewelry/1.png', tags: '宝石' },
      { src: 'https://cdn.theblack.cat/gallery/jewelry/2.png', tags: '宝石' },
      { src: 'https://cdn.theblack.cat/gallery/jewelry/3.png', tags: '宝石' },
      { src: 'https://cdn.theblack.cat/gallery/jewelry/4.png', tags: '宝石' },

    ],
  },

  {
    name: '金色の爪',
    url_id: 'gilded-claws',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1OQTOMoxJked2Kfo1hWsFdT86txuKImnd?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/gilded-claws/2.png', tags: '宝石' },
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/gilded-claws/3.png', tags: '宝石' },
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/gilded-claws/4.png', tags: '宝石' },

    ],
  },

  {
    name: '金色の爪 2',
    url_id: 'golden-nails',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1pAOy5toBXO4Ph9C_LqQ81OHcqyB8RFZ0?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/golden-nails/1.png', tags: '宝石' },
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/golden-nails/2.png', tags: '宝石' },


    ],
  },

  {
    name: 'マーブルブレスレット',
    url_id: 'marble-bracelet',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1pAOy5toBXO4Ph9C_LqQ81OHcqyB8RFZ0?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/marble-bracelet/1.png', tags: '宝石' },

    ],
  },

  {
    name: '"Capricorn": 花と金の鎖の角',
    url_id: 'capricorn',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1pAOy5toBXO4Ph9C_LqQ81OHcqyB8RFZ0?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/capricorn/1.png', tags: '頭服' },
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/capricorn/2.png', tags: '頭服' },
      { src: 'https://cdn.theblack.cat/gallery/attires/accessories/capricorn/3.png', tags: '頭服' },
    ],
  },

  {
    name: '仰向けに寝ると、胸がベッドの方にこぼれる',
    url_id: 'spilling-breasts',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1SapaR2kiOfGFZEMuwmPJEsLTYqiEVdtE?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/hidden/reference-poses/spilling-breasts/1.jpg'},
      { src: 'https://cdn.theblack.cat/gallery/hidden/reference-poses/spilling-breasts/2.jpg'},
    ],
  },

  {
    name: 'アナルを差し出すポーズ',
    url_id: 'anus-offering',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1WiVDYLDSLL7zf-FvAjiHWLWSkYP0KqXp?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/hidden/reference-poses/anus-offering/1.png'},
    ],
  },

  {
    name: '"刺繍入りボディスーツ"',
    url_id: 'embroidered-bodysuit',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/18v5PZTEk4v1rdZRt8ABfCuCONkH71xs3?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/hidden/attires/embroidered-bodysuit/1.png'},
      { src: 'https://cdn.theblack.cat/gallery/hidden/attires/embroidered-bodysuit/2.png'},
      { src: 'https://cdn.theblack.cat/gallery/hidden/attires/embroidered-bodysuit/3.png'},
    ],
  },

  {
    name: '"穂高水着"',
    url_id: 'hotaka-swimsuit',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/11exRkDUDbGjy7kAh31jGHknXJuqiT6Or?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/hidden/attires/hotaka-swimswit/1.png'},
      { src: 'https://cdn.theblack.cat/gallery/hidden/attires/hotaka-swimswit/2.png'},
      { src: 'https://cdn.theblack.cat/gallery/hidden/attires/hotaka-swimswit/3.png'},
    ],
  },

  {
    name: '"アイドルのフリル付きドレス"',
    url_id: 'idol-ruffled-attire',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1v7GptQZ1TGHURWqnkSikNMaWYyry_dyS?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/hidden/attires/idol-ruffled-attire/1.png'},
      { src: 'https://cdn.theblack.cat/gallery/hidden/attires/idol-ruffled-attire/2.png'},
      { src: 'https://cdn.theblack.cat/gallery/hidden/attires/idol-ruffled-attire/3.png'},
      { src: 'https://cdn.theblack.cat/gallery/hidden/attires/idol-ruffled-attire/4.png'},
      { src: 'https://cdn.theblack.cat/gallery/hidden/attires/idol-ruffled-attire/5.png'},
      { src: 'https://cdn.theblack.cat/gallery/hidden/attires/idol-ruffled-attire/6.png'},
    ],
  },

  {
    name: '"レース水着"',
    url_id: 'lace-swimsuit',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/19-o8WzGtFr240En0UydvaXKc3KdycWh8?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/hidden/attires/lace-swimswit/1.png'},
      { src: 'https://cdn.theblack.cat/gallery/hidden/attires/lace-swimswit/2.png'},
      { src: 'https://cdn.theblack.cat/gallery/hidden/attires/lace-swimswit/3.png'},
    ],
  },

  {
    name: '"スリングビキニ2号"',
    url_id: 'sling-bikini',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1zD6cRydJKq4lMQxwrxxl8KD1bjepjvRM?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/hidden/attires/sling-bikini-2/1.png'},
      { src: 'https://cdn.theblack.cat/gallery/hidden/attires/sling-bikini-2/2.png'},
      { src: 'https://cdn.theblack.cat/gallery/hidden/attires/sling-bikini-2/3.png'},
    ],
  },

  {
    name: '"スリングビキニ"',
    url_id: 'sling-bikini',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1J0Wme-WDmcxHZSYltR7BR7gI6DmDnbgV?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/hidden/attires/sling-bikini/1.png'},
      { src: 'https://cdn.theblack.cat/gallery/hidden/attires/sling-bikini/2.png'},
      { src: 'https://cdn.theblack.cat/gallery/hidden/attires/sling-bikini/3.png'},
    ],
  },

  {
    name: '"ヴァージン・キラー"',
    url_id: 'virgin-destroyer',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1Lqln8JFvVoNOLpm-RDOr-vDxpomaQPYT?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/hidden/attires/virgin-destroyer/1.png'},
      { src: 'https://cdn.theblack.cat/gallery/hidden/attires/virgin-destroyer/2.png'},
      { src: 'https://cdn.theblack.cat/gallery/hidden/attires/virgin-destroyer/3.png'},
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

  if (tag.name === '戻る') {
    tagElement.addEventListener('click', function () {
      // Redirect to the desired website when the "Attires" tag is clicked
      window.location.href = 'https://skeb.theblack.cat';
    });
  } else {
    tagElement.addEventListener('click', function () {
      // Deselect all other tags and select the clicked tag
      const allTags = tagContainer.getElementsByClassName('tag');
      for (const t of allTags) {
        t.classList.remove('tag-selected');
      }
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

  if (selectedTag) {
    const selectedTagName = selectedTag.innerText.toLowerCase();
    for (const gallery of allGalleries) {
      const galleryTags = gallery.dataset.tags.toLowerCase().split(' ');
      const displayGallery = galleryTags.includes(selectedTagName);
      gallery.style.display = displayGallery ? 'block' : 'none';
    }
  } else {
    // If no tag is selected, show all galleries
    for (const gallery of allGalleries) {
      gallery.style.display = 'block';
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