import React from "react";
import RatingButton, { ratingOptions } from "../ratings/RatingButton";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  placeholder?: string;
  selectedRatings: number[];
  onRatingClick: (id: number, alt: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  value,
  onChange,
  onSearch,
  placeholder = "Search tags, artists, or galleries...",
  selectedRatings,
  onRatingClick,
}) => {
  return (
    <div className="w-full mx-auto p-2">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") onSearch();
          }}
          placeholder={placeholder}
          className="min-w-0 flex-grow light px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex gap-1 flex-shrink-0">
          {ratingOptions.map((rating) => (
            <RatingButton
              key={rating.id}
              rating={rating}
              isSelected={selectedRatings.includes(rating.id)}
              onClick={onRatingClick}
            />
          ))}
        </div>
        <button
          onClick={onSearch}
          className="flex-shrink-0 px-4 py-2 regular text-white rounded-lg glassbox button-glassbox focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <img
            src="/icons/content/commworks/icon-park-outline--search.svg"
            className="w-6 h-6 dark:invert object-contain"
            alt="Search button icon"
          />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
