import React from "react";
interface Props {
  children: React.ReactNode;
}

const LoadingGalleryNotice: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center mt-[30%]">
      <div className="grid grid-cols-1 gap-y-1">
        <p className="text-extra regular">{children}</p>
        <div className="flex justify-center">
          <img
            src="/icons/content/svg-spinners--3-dots-move.svg"
            className="w-24 h-auto"
          />
        </div>
      </div>
    </div>
  );
};
LoadingGalleryNotice;
export default LoadingGalleryNotice;
