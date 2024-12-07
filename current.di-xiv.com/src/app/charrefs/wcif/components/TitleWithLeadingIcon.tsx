import React from "react";

interface Props {
  imageURL: string;
  title: string;
}

const TitleWithLeadingIcon: React.FC<Props> = ({ imageURL, title }) => {
  return (
    <div id={title} className="flex items-center mt-[1%] select-none">
      <div className="inline-block glassbox p-2 rounded-md">
        <div className="dark:invert">
          <img
            src={imageURL}
            className="h-[clamp(1.318rem,1vw_+_0.5rem,2.318rem)] w-auto"
            alt={`${title} icon`}
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
