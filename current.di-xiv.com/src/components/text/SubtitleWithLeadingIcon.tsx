import React from "react";

interface Props {
  imageURL: string;
  title: string;
}

const SubtitleWithLeadingIcon: React.FC<Props> = ({ imageURL, title }) => {
  return (
    <div id={title} className="flex items-center mt-[1%] select-none">
      <div className="inline-block glassbox p-2 rounded-md">
        <div className="dark:invert">
          <img
            src={imageURL}
            className="h-[clamp(1rem,1vw_+_0.5rem,1.236rem)] w-auto"
            alt={`${title} icon`}
            title={title}
          />
        </div>
      </div>
      <h4 title={title} className="regular ml-2 text-xl">
        {title}
      </h4>
    </div>
  );
};

export default SubtitleWithLeadingIcon;
