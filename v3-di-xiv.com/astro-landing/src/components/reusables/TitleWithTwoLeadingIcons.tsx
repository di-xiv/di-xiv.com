import React from "react";

interface Props {
  imageURL1: string;
  imageURL2: string;
  title1: string | null;
  title2: string | null;
}

const TitleWithTwoLeadingIcons: React.FC<Props> = ({
  imageURL1,
  imageURL2,
  title1,
  title2,
}) => {
  return (
    <div
      id={`${title1}-${title2}`}
      className="flex items-center mt-[1%] select-none"
    >
      <div className="inline-block glassbox p-2 rounded-md">
        <div className="dark:invert">
          <img
            src={imageURL1}
            className="h-8 mobile-only:h-6 w-auto inline-block mr-1"
            alt={`${title1} icon`}
            title={title1}
          />
        </div>
      </div>
      <div className="inline-block glassbox p-2 rounded-md ml-2">
        <div className="dark:invert">
          <img
            src={imageURL2}
            className="h-8 mobile-only:h-6 w-auto inline-block mr-1"
            alt={`${title2} icon`}
            title={title2}
          />
        </div>
      </div>
      <h2 title={`${title1}, ${title2}`} className="ml-2">
        {title1}, {title2}
      </h2>
    </div>
  );
};

export default TitleWithTwoLeadingIcons;
