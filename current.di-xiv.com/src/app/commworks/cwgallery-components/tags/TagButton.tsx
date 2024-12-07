import React from "react";

interface TagButtonProps {
  tagId: number;
  tagName: string;
  isSelected: boolean;
  onClick: () => void;
}

const TagButton: React.FC<TagButtonProps> = ({
  tagName,
  isSelected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 mobile-only:px-2 mobile-only:py-1 rounded-lg text-sm font-medium transition-colors duration-200 regular
        ${isSelected ? "text-[#efefef] dark:text-[#181a1b] selected-glassbox" : "shadowless-glassbox button-glassbox"}`}
    >
      <p>{tagName}</p>
    </button>
  );
};

export default TagButton;
