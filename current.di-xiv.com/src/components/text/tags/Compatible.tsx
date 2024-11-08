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
        return "Dawntrail Compatible";
      case "es":
        return "Compatible con Dawntrail";
      case "ja":
        return "Dawntrail 互換";
      case "pt":
        return "Compatível com Dawntrail";
      default:
        return "Dawntrail Compatible";
    }
  };

  return (
    <SimpleTooltip content={getTooltipContent()}>
      <span className="p-[2px] text-white text-nowrap text-sm rounded px-1.5 ml-1.5 select-none whitespace-nowrap cursor-help border-2 border-[#7df369] bg-[#4ba12e]">
        {getTitle()}
      </span>
    </SimpleTooltip>
  );
};

export default Compat;
