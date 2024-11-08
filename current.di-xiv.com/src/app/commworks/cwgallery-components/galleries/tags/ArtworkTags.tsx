import React from "react";

interface Tag {
  tag_id: number;
  tag_name: string;
}

interface ArtworkTagsProps {
  tags: Tag[];
  onTagClick: (tag: Tag) => void;
}

const ArtworkTags: React.FC<ArtworkTagsProps> = ({ tags, onTagClick }) => {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag.tag_id}
          onClick={() => onTagClick(tag)}
          className="px-2 py-1 rounded text-sm font-medium transition-colors duration-200 light glassbox button-glassbox"
        >
          {tag.tag_name}
        </button>
      ))}
    </div>
  );
};

export default ArtworkTags;
