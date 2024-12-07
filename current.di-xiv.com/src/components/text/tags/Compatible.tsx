import React from "react";
import SimpleTooltip from "../SimpleTooltip";
interface Props {
  lang: "es" | "en" | "ja" | "pt";
}

const Compat: React.FC<Props> = ({ lang }) => {
  const getTitle = () => {
    switch (lang) {
      case "en":
        return "DT Compatible";
      case "es":
        return "Compatible con DT";
      case "ja":
        return "DT 互換";
      case "pt":
        return "Compatível com DT";
      default:
        return "DT Compatible";
    }
  };
  const getTooltipContent = () => {
    switch (lang) {
      case "en":
        return "Out-of-the-Box Dawntrail Compatible";
      case "es":
        return "Compatible con Dawntrail desde el primer momento";
      case "ja":
        return "Dawntrailに即対応";
      case "pt":
        return "Compatível com Dawntrail imediatamente";
      default:
        return "Out-of-the-Box Dawntrail Compatible";
    }
  };

  return (
    <SimpleTooltip content={getTooltipContent()}>
      <div className="p-[2px] text-white text-nowrap text-sm rounded px-1.5 ml-1.5 select-none whitespace-nowrap cursor-help border-2 border-[#7df369] bg-[#4ba12e]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[clamp(1rem,1vw_+_0.5rem,1.618rem)] w-auto"
          viewBox="0 0 10 10"
        >
          <path
            fill="currentColor"
            d="M4.998 0a4.998 4.998 0 1 0 0 9.995a4.998 4.998 0 0 0 0-9.995M1 4.998a3.998 3.998 0 1 1 7.995 0a3.998 3.998 0 0 1-7.995 0m6.104-1.602a.5.5 0 0 1 0 .708l-2.25 2.25a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647l1.896-1.897a.5.5 0 0 1 .708 0"
          />
        </svg>
      </div>
    </SimpleTooltip>
  );
};

export default Compat;
