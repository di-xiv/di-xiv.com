import React from "react";

interface Props {
  imageURL: string;
  title: string;
}

const TitleWithLeadingIcon: React.FC<Props> = ({ imageURL, title }) => {
  return (
    <div id={title} className="flex items-center select-none">
      <div className="inline-block glassbox p-2 rounded-[2px]">
        <div className="dark:invert">
          <img
            src={imageURL}
            className="h-[clamp(1rem,1vw_+_0.5rem,1.618rem)] w-auto"
            title={title}
          />
        </div>
      </div>
      <h3 title={title} aria-label={title} className="ml-2">
        {title}
      </h3>
    </div>
  );
};

export default TitleWithLeadingIcon;
