import React from "react";
import SimpleTooltip from "../SimpleTooltip";
interface Props {
  lang: "es" | "en" | "ja" | "pt";
}

const IVCSSke: React.FC<Props> = ({ lang }) => {
  const getTitle = () => {
    switch (lang) {
      case "en":
        return "IVCS Compatible";
      case "es":
        return "Compatible con IVCS/Skelomae";
      case "ja":
        return "IVCS 対応";
      case "pt":
        return "IVCS Compatível";
      default:
        return "IVCS Compatible";
    }
  };
  const getTooltipContent = () => {
    switch (lang) {
      case "en":
        return "Rigged for animation-ready skeletons";
      case "es":
        return "Preparado para esqueletos listos para animaciones";
      case "ja":
        return "アニメーション対応のスケルトンにリグ済み";
      case "pt":
        return "Preparado para esqueletos prontos para animação";
      default:
        return "Rigged for animation-ready skeletons";
    }
  };

  return (
    <SimpleTooltip content={getTooltipContent()}>
      <span className="p-[2px] text-white text-nowrap text-sm rounded px-1.5 ml-1.5 select-none whitespace-nowrap cursor-help border-2 border-[#9297f6] bg-[#555dfe]">
        IVCS/YAS/Skelomae
      </span>
    </SimpleTooltip>
  );
};

export default IVCSSke;
