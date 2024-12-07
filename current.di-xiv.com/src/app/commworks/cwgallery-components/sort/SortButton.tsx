import React from "react";

export type SortOrder = "random" | "newest" | "oldest";

interface SortButtonProps {
  currentOrder: SortOrder;
  onClick: () => void;
}

const sortIcons = {
  random: "/icons/content/commworks/lets-icons--sort-random.svg",
  newest: "/icons/content/commworks/fa6-solid--arrow-down.svg",
  oldest: "/icons/content/commworks/fa6-solid--arrow-up.svg",
};

const sortAlts = {
  random: "Random Order",
  newest: "Newest First",
  oldest: "Oldest First",
};

const sortTitles = {
  random: "Sort galleries randomly",
  newest: "Sort galleries by newest first",
  oldest: "Sort galleries by oldest first",
};

const SortButton: React.FC<SortButtonProps> = ({ currentOrder, onClick }) => {
  return (
    <button
      onClick={onClick}
      title={sortTitles[currentOrder]}
      aria-label={sortTitles[currentOrder]}
      className="p-2 rounded-lg transition-colors duration-200 regular
      shadowless-glassbox selected-glassbox flex-shrink-0"
    >
      <img
        src={sortIcons[currentOrder]}
        alt={sortAlts[currentOrder]}
        className="h-[clamp(1.638rem,1vw_+_0.5rem,2.618rem)] w-auto object-contain dark:invert"
      />
    </button>
  );
};

export default SortButton;
