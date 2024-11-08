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
      className={`p-2 rounded transition-colors duration-200 regular
        ${isSelected ? "bg-green-500" : "bg-gray-200 hover:bg-gray-300"}`}
    >
      <img
        src={rating.imageSrc}
        alt={rating.alt}
        className="h-6 w-6 object-contain"
      />
    </button>
  );
};

export default RatingButton;
