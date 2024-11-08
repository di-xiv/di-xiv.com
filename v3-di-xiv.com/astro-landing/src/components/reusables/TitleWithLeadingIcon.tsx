import React from "react";

interface Props {
  imageURL: string;
  title: string | null;
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
            className="h-8 mobile-only:h-6 w-auto"
            alt={`${title} icon`}
            title={title}
          />
        </div>
      </div>
      <h2 title={title} className="ml-2">
        {title}
      </h2>
    </div>
  );
};

export default TitleWithLeadingIcon;
