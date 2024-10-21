import React, { useEffect, useState } from "react";

const imageUrlsBodyRefBG = [
  "/backgrounds/1.webp",
  "/backgrounds/2.webp",
  "/backgrounds/3.webp",
  "/backgrounds/4.webp",
  "/backgrounds/5.webp",
  "/backgrounds/6.webp",
  "/backgrounds/7.webp",
  "/backgrounds/8.webp",
  "/backgrounds/9.webp",
  "/backgrounds/10.webp",
];

interface RandomMainBGProps {
  bgTargetID: string;
}

const RandomMainBG: React.FC<RandomMainBGProps> = ({ bgTargetID }) => {
  const [unusedImages, setUnusedImages] = useState<string[]>([
    ...imageUrlsBodyRefBG,
  ]);

  const getNextBackground = () => {
    if (unusedImages.length === 0) {
      setUnusedImages([...imageUrlsBodyRefBG]);
      return imageUrlsBodyRefBG[0];
    }

    const index = Math.floor(Math.random() * unusedImages.length);
    const nextImage = unusedImages[index];
    setUnusedImages((prev) => prev.filter((_, i) => i !== index));
    return nextImage;
  };

  useEffect(() => {
    const targetElement = document.getElementById(bgTargetID);
    const overlayElement = document.getElementById("main-overlay");
    if (!targetElement || !overlayElement) {
      console.error(`Required elements not found`);
      return;
    }

    const setBackground = () => {
      const nextImage = getNextBackground();

      // Create a new image element to preload the next image
      const img = new Image();
      img.src = nextImage;

      img.onload = () => {
        // Once the image is loaded, apply it to the overlay
        overlayElement.style.backgroundImage = `url('${nextImage}')`;
        overlayElement.style.opacity = "1";

        // After the fade-in is complete, update the main background and reset the overlay
        setTimeout(() => {
          targetElement.style.backgroundImage = `url('${nextImage}')`;
          overlayElement.style.opacity = "0";
        }, 1000);
      };
    };

    setBackground();

    const interval = setInterval(setBackground, 30000);

    return () => clearInterval(interval);
  }, [bgTargetID]);

  return null;
};

export default RandomMainBG;
