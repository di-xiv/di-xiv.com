import React from "react";
interface Props {
  children: React.ReactNode;
}

const SelectorsContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center mobile-only:hidden cursor-default">
      <div className="inline-block dark:invert relative -top-[2px] mr-1">
        <img
          src="/icons/content/inquiries/fluent--text-description-16-filled.svg"
          className="h-7 w-auto"
          alt="Description icon"
        />
      </div>
      <h2
        className="inline-block regular text-large mobile-only:text-base"
        aria-label="Gallery Name"
      >
        {children}
      </h2>
    </div>
  );
};

export default SelectorsContainer;