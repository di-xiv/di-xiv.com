import React from "react";

interface TagButtonProps {
  tagId: number;
  tagName: string;
  isSelected: boolean;
  onClick: () => void;
}

const TagButton: React.FC<TagButtonProps> = ({
  tagId,
  tagName,
  isSelected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded text-sm font-medium transition-colors duration-200 regular
        ${
          isSelected
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
    >
      {tagName}
    </button>
  );
};

export default TagButton;
