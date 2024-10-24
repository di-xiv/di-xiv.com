import React from "react";

interface Props {
  imageURL: string;
  title: string;
}

const TitleWithLeadingIcon: React.FC<Props> = ({ imageURL, title }) => {
  return (
    <div
      id="TitleWithLeadingIcon"
      className="flex items-center mt-[1%] select-none"
    >
      <div className="inline-block glassbox p-2 rounded-md">
        <div className="dark:invert">
          <img
            src={imageURL}
            className="h-6 w-auto"
            alt={`${title} icon`}
            title={title}
          />
        </div>
      </div>
      <span title={title} className="regular ml-2 text-xl">
        {title}
      </span>
    </div>
  );
};

export default TitleWithLeadingIcon;
