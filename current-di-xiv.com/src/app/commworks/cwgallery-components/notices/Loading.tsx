import React from "react";
interface Props {
  children: React.ReactNode;
}

const LoadingGalleryNotice: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-y-1">
        <p className="text-center regular">{children}</p>
        <div className="">
          <img
            src="/icons/content/svg-spinners--3-dots-move.svg"
            className="w-8 h-auto"
          />
        </div>
      </div>
    </div>
  );
};
LoadingGalleryNotice;
export default LoadingGalleryNotice;
