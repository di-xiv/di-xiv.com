import React from "react";

interface ZoomButtonProps {
  onClick: () => void;
  localizedZoom: string;
}

const ZoomButton: React.FC<ZoomButtonProps> = ({ onClick, localizedZoom }) => (
  <div
    title={localizedZoom}
    className="glassbox p-2 rounded-md z-30 absolute top-2 right-2 hover:text-[#1e7cff] cursor-pointer button-glassbox"
    onClick={onClick}
  >
    <img
      src="/icons/content/charrefs/lucide--zoom-in.svg"
      className="h-10 mobile-only:h-8 w-auto dark:invert"
    />
  </div>
);

export default ZoomButton;
