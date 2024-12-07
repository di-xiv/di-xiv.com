import React, { useRef, forwardRef } from "react";

interface Props {
  children: React.ReactNode;
}

const TagContainer = forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  const localRef = useRef<HTMLDivElement>(null);

  // Use the local ref if no forwarded ref is provided
  const scrollContainerRef = (ref ||
    localRef) as React.RefObject<HTMLDivElement>;

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex items-center w-full mt-2">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 p-1 rounded-full shadow-md transition-colors
        border-2 border-solid border-[#181a1b] dark:border-[#efefef]
        glassbox button-glassbox"
      >
        <img
          src="/icons/content/commworks/entypo--chevron-small-left.svg"
          alt="Scroll left"
          className="h-[clamp(1.638rem,1vw_+_0.5rem,2.618rem)] w-auto object-contain dark:invert"
        />
      </button>
      <div
        ref={ref}
        className="flex overflow-x-auto whitespace-nowrap scroll-smooth scroll-pl-4 scroll-pr-4 snap-x snap-mandatory space-x-1 justify-start mx-8"
      >
        <div className="flex items-center">
          <div className="flex gap-2 px-2 select-none">{children}</div>
        </div>
      </div>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 p-1 rounded-full shadow-md transition-colors
        border-2 border-solid border-[#181a1b] dark:border-[#efefef]
        glassbox button-glassbox"
      >
        <img
          src="/icons/content/commworks/entypo--chevron-small-right.svg"
          alt="Scroll right"
          className="h-[clamp(1.638rem,1vw_+_0.5rem,2.618rem)] w-auto object-contain dark:invert"
        />
      </button>
    </div>
  );
});

TagContainer.displayName = "TagContainer";

export default TagContainer;
