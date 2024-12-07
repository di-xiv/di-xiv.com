import React from "react";

interface Props {
  children: React.ReactNode;
}

const RatingContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative w-full rounded-md glassbox overflow-hidden">
      <div className="flex justify-center mobile-only:justify-end py-2 px-2">
        <div className="flex gap-x-2">{children}</div>
      </div>
    </div>
  );
};

export default RatingContainer;
