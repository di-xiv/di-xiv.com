import React from "react";

interface Props {
  children: React.ReactNode;
}

const SelectorsContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="z-50 bg-inherit py-4">
      <div className="flex justify-center">
        <div className="w-[95%] mobile-only:mt-[1%]">
          <div className="grid grid-cols-[auto_auto] mobile-only:grid-cols-[auto_auto] gap-x-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectorsContainer;
