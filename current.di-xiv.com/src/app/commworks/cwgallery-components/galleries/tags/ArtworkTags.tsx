import React from "react";

interface Tag {
  tag_id: number;
  tag_name: string;
}
interface ArtworkTagsProps {
  tags: Tag[];
  onTagClick: (tag: Tag) => void;
  imageNumber: number; // Add this prop
}

const ArtworkTags: React.FC<ArtworkTagsProps> = ({
  tags,
  onTagClick,
  imageNumber,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="mt-2 flex flex-wrap items-center gap-x-2">
        <div className="dark:invert inline-block mr-1">
          <img
            src="/icons/content/commworks/gridicons--tag.svg"
            className="h-7 w-auto"
            alt="Gallery Length (number of images in the gallery)"
          />
        </div>
        {tags.map((tag) => (
          <button
            key={tag.tag_id}
            onClick={() => onTagClick(tag)}
            className="not-mobile:px-4 not-mobile:py-2 mobile-only:px-2 mobile-only:py-1
            rounded-lg light
            transition-colors duration-200
            shadowless-glassbox button-glassbox"
          >
            <p>{tag.tag_name}</p>
          </button>
        ))}
      </div>
      <div className="mt-2 not-mobile:px-4 not-mobile:py-2 mobile-only:px-2 mobile-only:py-1 rounded-lg text-sm light flex items-center">
        <div className="dark:invert inline-block mr-1">
          <img
            src="/icons/content/commworks/clarity--image-gallery-line.svg"
            className="h-7 w-auto"
            alt="Gallery Length (number of images in the gallery)"
          />
        </div>
        <div
          className="not-mobile:px-4 not-mobile:py-2 mobile-only:px-2 mobile-only:py-1
            rounded-lg light
            shadowless-glassbox"
        >
          <p className="mono-medium">#{imageNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtworkTags;
