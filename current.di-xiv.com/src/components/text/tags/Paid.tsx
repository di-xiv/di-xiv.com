import React from "react";
import SimpleTooltip from "../SimpleTooltip";
interface Props {
  lang: "es" | "en" | "ja" | "pt";
}

const Paid: React.FC<Props> = ({ lang }) => {
  const getTagContent = () => {
    switch (lang) {
      case "en":
        return "Paid";
      case "es":
        return "De pago";
      case "ja":
        return "有料";
      case "pt":
        return "A pagar";
      default:
        return "Paid";
    }
  };
  const getTooltipContent = () => {
    switch (lang) {
      case "en":
        return "Paid content";
      case "es":
        return "Contenido de pago";
      case "ja":
        return "ペイドコンテンツ";
      case "pt":
        return "Conteúdo pago";
      default:
        return "Paid content";
    }
  };

  return (
    <SimpleTooltip content={getTooltipContent()}>
      <div className="p-[2px] text-white text-nowrap text-sm rounded px-1.5 ml-1.5 select-none whitespace-nowrap cursor-help border-2 border-[#d1d95f] bg-[#665509]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[clamp(1rem,1vw_+_0.5rem,1.618rem)] w-auto"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m.89-8.9c-1.78-.59-2.64-.96-2.64-1.9c0-1.02 1.11-1.39 1.81-1.39c1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.44-.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6.56-2.62 2.85-2.62 2.96c0 2.27 2.25 2.91 3.35 3.31c1.58.56 2.28 1.07 2.28 2.03c0 1.13-1.05 1.61-1.98 1.61c-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 3.02 2.96V19h1.75v-1.24c.52-.09 3.02-.59 3.02-3.22c.01-1.39-.6-2.61-3-3.44"
          />
        </svg>
      </div>
    </SimpleTooltip>
  );
};

export default Paid;