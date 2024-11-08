import React from "react";
interface Props {
  children: React.ReactNode;
}

const GDetailsContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center gap-x-2 justify-evenly glassbox p-1 rounded my-[1%] px-[1%]">
      {children}
    </div>
  );
};

export default GDetailsContainer;
