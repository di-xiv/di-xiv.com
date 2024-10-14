import React from "react";
interface Props {
  children: React.ReactNode;
}

const TagContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap scroll-smooth scroll-pl-4 scroll-pr-4 snap-x snap-mandatory space-x-1 py-2 justify-start p-2 rounded-md glassbox">
      <div className="flex gap-2 px-4">{children}</div>
    </div>
  );
};

export default TagContainer;
