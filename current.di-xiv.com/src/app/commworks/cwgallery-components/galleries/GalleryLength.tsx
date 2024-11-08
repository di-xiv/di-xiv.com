import React from "react";
interface Props {
  children: React.ReactNode;
}

const GalleryLength: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center gap-x-1 cursor-default">
      <div className="dark:invert inline-block mr-1">
        <img
          src="/icons/content/commworks/clarity--image-gallery-line.svg"
          className="h-7 w-auto"
          alt="Gallery Length (number of images in the gallery)"
        />
      </div>
      <h3
        className="regular text-large mobile-only:text-base"
        aria-label="Gallery Length (number of images in the gallery)"
      >
        {children}
      </h3>
    </div>
  );
};

export default GalleryLength;
