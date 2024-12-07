import type { ReactNode } from "react";
import "./TextContent.css";

interface TextContentProps {
  children: ReactNode;
}

const TextContent = ({ children }: TextContentProps) => {
  return (
    <div className="shadowless-glassbox text-wrapper not-mobile:p-5 mobile-only:p-3 noise-bg-animation rounded-lg">
      <div className="text-container not-mobile:p-10 mobile-only:py-4 mobile-only:px-4 rounded-md glassbox text-balance">
        {children}
      </div>
    </div>
  );
};

export default TextContent;
