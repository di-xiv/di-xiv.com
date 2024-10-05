const tagContainer = document.getElementById('tagContainer');
const gallery = document.getElementById('gallery');

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

function addTagToContainer(tag) {
  const tagElement = document.createElement('div');
  tagElement.classList.add('tag', 'tag-' + tag.name.toLowerCase());
  tagElement.innerText = tag.name;
  tagElement.style.backgroundColor = tag.backgroundColor;

  tagElement.addEventListener('click', function () {
    const isExclusiveTag = ['NSFW', 'Suggestive', 'Erotica', 'Pornographic', 'Degen', 'SafeForWork', 'Fullbody', 'Halfbody', 'Portrait'].includes(tag.name);
    if (isExclusiveTag) {
      const exclusiveTags = ['NSFW', 'Suggestive', 'Erotica', 'Pornographic', 'Degen', 'SafeForWork', 'Fullbody', 'Halfbody', 'Portrait'];
      for (const exclusiveTag of exclusiveTags) {
        const exclusiveTagElement = document.querySelector('.tag-' + exclusiveTag.toLowerCase());
        if (exclusiveTag !== tag.name) {
          exclusiveTagElement.classList.remove('tag-selected');
        }
      }
    }
    tagElement.classList.toggle('tag-selected');
    updateGallery();
  });

  tagContainer.appendChild(tagElement);
}


function updateGallery() {
  const selectedTags = Array.from(tagContainer.getElementsByClassName('tag-selected')).map(tag => tag.innerText.toLowerCase());
  const imageCards = document.querySelectorAll('.image-card');

  if (selectedTags.length === 0) {
    gallery.style.display = 'none';
  } else {
    gallery.style.display = 'flex';
    for (const card of imageCards) {
      const tagsInCard = card.dataset.tags.toLowerCase();
      const displayCard = selectedTags.every(tag => tagsInCard.includes(tag));
      card.style.display = displayCard ? 'block' : 'none';
    }
  }
}

function createTagElement(tag, imageCard, selected = false) {
  const tagElement = document.createElement('div');
  tagElement.classList.add('tag', selected ? 'tag-selected' : '');
  tagElement.innerText = tag;

  imageCard.appendChild(tagElement);
}

function generateTagsHTML(tags) {
  return tags
    .split(' ')
    .map(tag => `<div class="tag">${tag}</div>`)
    .join('');
}

function addTagsToCard(imageCard, tags) {
  const imageInfo = imageCard.querySelector('.image-info');
  const tagsParagraph = document.createElement('p');
  tagsParagraph.classList.add('image-tags');

  tagsParagraph.innerHTML = generateTagsHTML(tags);

  imageInfo.appendChild(tagsParagraph);
}

function addImageToGallery(mediaSrc, tags, descriptionHTML) {
  const imageCard = document.createElement('div');
  imageCard.classList.add('image-card');
  imageCard.dataset.tags = tags;

  const mediaElement = mediaSrc.includes('.mp4')
    ? createVideoElement(mediaSrc)
    : createImageElement(mediaSrc);

  const imageInfo = document.createElement('div');
  imageInfo.classList.add('image-info');
  const descriptionParagraph = document.createElement('p');
  descriptionParagraph.innerHTML = descriptionHTML;

  imageInfo.appendChild(descriptionParagraph);
  imageCard.appendChild(mediaElement);
  imageCard.appendChild(imageInfo);
  gallery.appendChild(imageCard);
}

function createImageElement(imageSrc) {
  const imgElement = document.createElement('img');
  imgElement.src = imageSrc;
  imgElement.alt = 'Image Description';
  return imgElement;
}

function createVideoElement(videoSrc) {
  const videoElement = document.createElement('video');
  videoElement.src = videoSrc;
  videoElement.controls = true;
  return videoElement;
}

tags.forEach(tag => addTagToContainer(tag));

addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/utsuro-atomo/1109b.png', 'Degen', 'Skeb commission by <a href="https://skeb.jp/@utsuro_atomo" target="_blank">ウツロ</a>.<br><span class="latex-italic">Drill and breed session.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/kcc/kcc-bimbo-portrait.png', 'SafeForWork Portrait', 'Skeb commission by <a href="https://skeb.jp/@kacico_l2" target="_blank">知らない✘✘</a>.<br><span class="latex-italic">Coy bimbo.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/ayaben/oct2023/ayaben-fullbody.png', 'SafeForWork Fullbody', 'Fullbody sketch commission by <a href="https://ayaben.carrd.co" target="_blank">ayaben</a>.<br><span class="latex-italic">Unending curves.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/kaydenlockes/buchukisu_1.jpg', 'NSFW Erotica', 'GPose giveaway by <a href="https://linktr.ee/kaydenlockes" target="_blank">Zel</a>.<br><span class="latex-italic">Enticing.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/kaydenlockes/Buchukisu_2.jpg', 'NSFW Erotica', 'GPose giveaway by <a href="https://linktr.ee/kaydenlockes" target="_blank">Zel</a>.<br><span class="latex-italic">Sloppy.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/gpose/zel/giveaway-chained2.png', 'Degen', 'GPose giveaway by <a href="https://twitter.com/ZelErohcir" target="_blank">Zel</a>.<br><span class="latex-italic">Turns out...</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/gpose/zel/giveaway-chained.png', 'Degen', 'GPose giveaway by <a href="https://twitter.com/ZelErohcir" target="_blank">Zel</a>.<br><span class="latex-italic">Not unlockable.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/gpose/achisa/oct2023/achisa-1.png', 'Degen', 'GPose commission by <a href="https://ko-fi.com/chihaya72" target="_blank">Achisa</a>.<br><span class="latex-italic">Dominance.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/gpose/achisa/oct2023/achisa-2.png', 'Degen', 'GPose commission by <a href="https://ko-fi.com/chihaya72" target="_blank">Achisa</a>.<br><span class="latex-italic">Plaything.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/gpose/achisa/oct2023/achisa-3.png', 'Degen', 'GPose commission by <a href="https://ko-fi.com/chihaya72" target="_blank">Achisa</a>.<br><span class="latex-italic">Reward.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/gpose/hairyhyur/garlean-twins-intermission-steamy.png', 'Degen', 'GPose commission by <a href="https://baraag.net/@hairyhyur" target="_blank">Bushy♡Hyur</a>.<br><span class="latex-italic">Intermission.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/gpose/hairyhyur/garlean-twins-deepdive-steamy.png', 'Degen', 'GPose commission by <a href="https://baraag.net/@hairyhyur" target="_blank">Bushy♡Hyur</a>.<br><span class="latex-italic">Deepdive cuddle.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/gpose/hairyhyur/kugane-exposure-steam.png', 'NSFW Pornographic', 'GPose commission by <a href="https://twitter.com/BushiestGarlic" target="_blank">Bushy♡Hyur</a>.<br><span class="latex-italic">Steamy Aftermath.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/iyo_yom/1582441-signed.png', 'Degen', 'Skeb commission by <a href="https://skeb.jp/@iyo_yom/" target="_blank">いよよむ</a>.<br><span class="latex-italic">Red light.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/iyo_yom/1582441-tandem-lingerie.png', 'Degen', 'Skeb commission by <a href="https://skeb.jp/@iyo_yom/" target="_blank">いよよむ</a>.<br><span class="latex-italic">Play time.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/iyo_yom/1582441-tandem-nolingerie.png', 'Degen', 'Skeb commission by <a href="https://skeb.jp/@iyo_yom/" target="_blank">いよよむ</a>.<br><span class="latex-italic-bold">Play time.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/nezi_hs2/1546854-1.output.png', 'NSFW Pornographic', 'Skeb commission by <a href="https://skeb.jp/@nezi_hs2" target="_blank">ねじ</a>.<br><span class="latex-italic-bold">Newfound Adventure.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/shrinesgate2/sept2023/1544972-1.mp4', 'Degen', 'Skeb commission by <a href="https://skeb.jp/@shrinesgate2" target="_blank">シュライン</a>.<br><span class="latex-italic-bold">Loli breeding.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/mandragoragogo/mandragoragogo-1.png', 'Degen', 'Skeb commission by <a href="https://skeb.jp/@mandoragogo" target="_blank">マンドラ</a>.<br><span class="latex-italic">Give.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/mandragoragogo/mandragoragogo-2.png', 'Degen', 'Skeb commission by <a href="https://skeb.jp/@mandoragogo" target="_blank">マンドラ</a>.<br><span class="latex-italic-bold">Mutual.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/mandragoragogo/mandragoragogo-5.png', 'Degen', 'Skeb commission by <a href="https://skeb.jp/@mandoragogo" target="_blank">マンドラ</a>.<br><span class="latex-italic">Receive.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/mandragoragogo/mandragoragogo-9.png', 'Degen', 'Skeb commission by <a href="https://skeb.jp/@mandoragogo" target="_blank">マンドラ</a>.<br><span class="latex-italic-bold">Cum.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/Mijeh/July2023/1547235-1.output.png', 'NSFW Pornographic', 'Skeb commission by <a href="https://skeb.jp/@mm_mijeh" target="_blank">Mijeh</a>.<br><span class="latex-italic">Peeking.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/Mijeh/July2023/1547235-5.output.png', 'NSFW Pornographic', 'Skeb commission by <a href="https://skeb.jp/@mm_mijeh" target="_blank">Mijeh</a>.<br><span class="latex-italic">Longing.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/Mijeh/July2023/1547235-7.output.png', 'NSFW Pornographic', 'Skeb commission by <a href="https://skeb.jp/@mm_mijeh" target="_blank">Mijeh</a>.<br><span class="latex-italic-bold">Caught.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/Mijeh/July2023/1547235-8.output.png', 'NSFW Pornographic', 'Skeb commission by <a href="https://skeb.jp/@mm_mijeh" target="_blank">Mijeh</a>.<br><span class="latex-italic">Going.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/Mijeh/July2023/1547235-11.output.png', 'NSFW Pornographic', 'Skeb commission by <a href="https://skeb.jp/@mm_mijeh" target="_blank">Mijeh</a>.<br><span class="latex-italic-bold">Gone.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/romupand/aug-2023/romupand-aug2023-full.png', 'NSFW Erotica', 'Simple Reference Sheet commission by <a href="https://romucommss.carrd.co/" target="_blank">Romupand</a>.<br>Full Version');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/romupand/aug-2023/romupand-aug2023-clothed.png', 'SafeForWork Fullbody', 'Simple Reference Sheet commission by <a href="https://romucommss.carrd.co/" target="_blank">Romupand</a>.<br>Clothed Version');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/romupand/aug-2023/romupand-aug2023-nude.png', 'NSFW Erotica', 'Simple Reference Sheet commission by <a href="https://romucommss.carrd.co/" target="_blank">Romupand</a>.<br>Nude Version');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/nikuyaking1/aug2023.png', 'Degen', 'Skeb commission by <a href="https://skeb.jp/@nikuyaking1" target="_blank">ニクヤキ</a>.<br><span class="latex-italic">The madam and the kittens.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/korodraws/aug-2023/korodraws-aug2023-clothed.png', 'SafeForWork Suggestive Fullbody', 'Fullbody Character commission by <a href="https://korodraws.carrd.co/" target="_blank">Koro</a>.<br>Clothed version');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/korodraws/aug-2023/korodraws-aug2023-naked.png', 'NSFW Erotica', 'Fullbody Character commission by <a href="https://korodraws.carrd.co/" target="_blank">Koro</a>.<br>Naked version');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/korodraws/aug-2023/korodraws-aug2023-full.png', 'NSFW Erotica', 'Fullbody Character Study commission by <a href="https://korodraws.carrd.co/" target="_blank">Koro</a>.<br>Full version');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/iaminsamity/ych-jul2023.png', 'NSFW Pornographic', 'YCH version 2A commission from <a href="https://iaminsamity.carrd.co/" target="_blank">SAMANTHA</a>.');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/MiFa/fullbody-tentacle-rape/v1.png', 'Degen', 'Fullbody commission from <a href="https://www.patreon.com/Ozzay041" target="_blank">MiFa</a>.<br><span class="latex-italic">Feeling it.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/MiFa/fullbody-tentacle-rape/v2.png', 'Degen', 'Fullbody commission from <a href="https://www.patreon.com/Ozzay041" target="_blank">MiFa</a>.<br><span class="latex-italic-bold">Really</span><span class="latex-italic"> Feeling it.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/MiFa/fullbody-tentacle-rape/v3.png', 'Degen', 'Fullbody commission from <a href="https://www.patreon.com/Ozzay041" target="_blank">MiFa</a>.<br><span class="latex-italic-bold">Cummin.</span>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/skeb/hamo19574270/hamo19574270-fullbody.png', 'Degen', 'Skeb commission from <a href="https://skeb.jp/@hamo19574270" target="_blank">鱧</a>.');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/chaosringen/chaosringen-fullbody-bust.png', 'SafeForWork Suggestive Portrait', 'Full render portrait commission by <a href="https://linktr.ee/chaosringen" target="_blank">chaosringen</a>');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/juurikun/juurikun-sketchy-fullbody.png', 'SafeForWork Fullbody', 'Sketchy fullbody artwork commission by <a href="https://www.instagram.com/juurikun/" target="_blank">juurikun</a><br>🙏');
addImageToGallery('https://cdn.theblack.cat/gallery/commissioned-works/chaosringen/chaosringen-fullbody-sketch.jpg', 'SafeForWork Suggestive Portrait', 'Sketch for a full render portrait commission by <a href="https://linktr.ee/chaosringen" target="_blank">chaosringen</a>');

document.querySelectorAll('.image-card img').forEach(img => {
  img.addEventListener('click', function() {
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal img');
    if(modal && modalImg) {
      modal.style.display = 'block';
      modalImg.src = this.src;
    }
  });
});

document.querySelector('.modal').addEventListener('click', function() {
  this.style.display = 'none';
});
