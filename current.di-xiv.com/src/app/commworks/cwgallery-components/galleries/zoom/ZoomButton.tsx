import React from "react";

interface ZoomButtonProps {
  onClick: () => void;
  localizedZoom: string;
}

const ZoomButton: React.FC<ZoomButtonProps> = ({ onClick, localizedZoom }) => (
  <div
    title={localizedZoom}
    className="glassbox p-2 rounded-sm z-30 absolute top-2 right-2 hover:text-[#1e7cff] cursor-pointer button-glassbox"
    onClick={onClick}
  >
    <div className="dark:invert">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="group-hover:block h-10 mobile-only:h-8 w-auto dark:invert"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M3 21v-6h2v2.6l3.1-3.1l1.4 1.4L6.4 19H9v2zM15.9 9.5l-1.4-1.4L17.6 5H15V3h6v6h-2V6.4z"
        />
      </svg>
    </div>
  </div>
);

export default ZoomButton;
