import React from "react";

interface RatingOption {
  id: number;
  imageSrc: string;
  alt: string;
}

interface RatingButtonProps {
  rating: RatingOption;
  isSelected: boolean;
  onClick: (id: number, alt: string) => void;
}

export const ratingOptions: RatingOption[] = [
  {
    id: 1,
    imageSrc: "/icons/content/commworks/tabler--rating-12-plus.svg",
    alt: "SFW",
  },
  {
    id: 2,
    imageSrc: "/icons/content/commworks/tabler--rating-18-plus.svg",
    alt: "NSFW",
  },
  {
    id: 3,
    imageSrc: "/icons/content/commworks/tabler--rating-21-plus.svg",
    alt: "NSFW++",
  },
];

const RatingButton: React.FC<RatingButtonProps> = ({
  rating,
  isSelected,
  onClick,
}) => {
  return (
    <button
      onClick={() => onClick(rating.id, rating.alt)}
      className={`p-2 rounded-lg transition-colors duration-200 regular
        focus:ring-2  focus:ring-blue-500 dark:focus:ring-[#ed701d]
        ${isSelected ? "selected-glassbox" : "shadowless-glassbox button-glassbox"}
        flex-shrink-0`}
    >
      <img
        src={rating.imageSrc}
        alt={rating.alt}
        className="h-[clamp(1.638rem,1vw_+_0.5rem,2.618rem)] w-auto object-contain dark:invert"
      />
    </button>
  );
};

export default RatingButton;
