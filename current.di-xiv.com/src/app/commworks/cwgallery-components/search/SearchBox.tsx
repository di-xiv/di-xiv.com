import type { SortOrder } from "@/app/commworks/Types";
import React from "react";
import RatingButton, { ratingOptions } from "../ratings/RatingButton";
import SortButton from "@/app/commworks/cwgallery-components/sort/SortButton";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  selectedRatings: number[];
  onRatingClick: (id: number) => void;
  placeholder: string;
  sortOrder: SortOrder;
  onSortClick: () => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  value,
  onChange,
  onSearch,
  selectedRatings,
  onRatingClick,
  placeholder,
  sortOrder,
  onSortClick,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
        <div className="flex flex-1 gap-2">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") onSearch();
            }}
            placeholder={placeholder}
            className="w-full p-2 rounded-lg shadowless-glassbox regular
            focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#ed701d]"
          />
          <button
            onClick={onSearch}
            className="p-2 rounded-lg shadowless-glassbox button-glassbox flex-shrink-0"
          >
            <img
              src="/icons/content/commworks/icon-park-outline--search.svg"
              alt="Search"
              className="h-[clamp(1.638rem,1vw_+_0.5rem,2.618rem)] w-auto object-contain dark:invert"
            />
          </button>
        </div>

        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
          <SortButton currentOrder={sortOrder} onClick={onSortClick} />
          {ratingOptions.map((rating) => (
            <RatingButton
              key={rating.id}
              rating={rating}
              isSelected={selectedRatings.includes(rating.id)}
              onClick={(id) => onRatingClick(id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
