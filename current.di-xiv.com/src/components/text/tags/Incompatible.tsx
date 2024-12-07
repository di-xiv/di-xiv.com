import React from "react";
import SimpleTooltip from "../SimpleTooltip";
interface Props {
  lang: "es" | "en" | "ja" | "pt";
}

const Incompat: React.FC<Props> = ({ lang }) => {
  const getTitle = () => {
    switch (lang) {
      case "en":
        return "DT Incompatible";
      case "es":
        return "Incompatible con DT";
      case "ja":
        return "DT 非互換";
      case "pt":
        return "Inompatível com DT";
      default:
        return "DT Incompatible";
    }
  };
  const getTooltipContent = () => {
    switch (lang) {
      case "en":
        return "Dawntrail incompatible: mod lacks updates or compatibility adjustments";
      case "es":
        return "Incompatible con Dawntrail: el mod no tiene actualizaciones o ajustes de compatibilidad";
      case "ja":
        return "Dawntrail 非対応: モッドに更新や互換性調整が不足しています。";
      case "pt":
        return "Inompatível com Dawntrail";
      default:
        return "Dawntrail incompatível: o mod carece de atualizações ou ajustes de compatibilidade";
    }
  };

  return (
    <SimpleTooltip content={getTooltipContent()}>
      <div className="p-[2px] text-white text-nowrap text-sm rounded px-1.5 ml-1.5 select-none whitespace-nowrap cursor-help border-2 border-[#f45a5a] bg-[#f71616]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[clamp(1rem,1vw_+_0.5rem,1.618rem)] w-auto"
          viewBox="0 0 16 16"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          >
            <path d="m10.25 5.75l-4.5 4.5m0-4.5l4.5 4.5" />
            <circle cx="8" cy="8" r="6.25" />
          </g>
        </svg>
      </div>
    </SimpleTooltip>
  );
};

export default Incompat;
