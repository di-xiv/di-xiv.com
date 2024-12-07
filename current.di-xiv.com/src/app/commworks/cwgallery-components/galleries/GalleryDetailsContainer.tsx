import TextContent from "@/components/wrappers/TextContent.tsx";
import React from "react";
interface Props {
  children: React.ReactNode;
}

const GDetailsContainer: React.FC<Props> = ({ children }) => {
  return (
    <TextContent>
      <div className="flex items-center gap-x-2 justify-evenly">{children}</div>
    </TextContent>
  );
};

export default GDetailsContainer;
