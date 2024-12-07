import React from "react";
import SimpleTooltip from "../SimpleTooltip";
interface Props {
  lang: "es" | "en" | "ja" | "pt";
}

const ManUpd: React.FC<Props> = ({ lang }) => {
  const getTitle = () => {
    switch (lang) {
      case "en":
        return "Manual Update";
      case "es":
        return "Actualización Manual";
      case "ja":
        return "手動アップデート";
      case "pt":
        return "Atualização manual";
      default:
        return "Manual Update";
    }
  };
  const getTooltipContent = () => {
    switch (lang) {
      case "en":
        return "Requires a manual Update via TexTools or Penumbra";
      case "es":
        return "Requiere una actualización manual a través de TexTools o Penumbra";
      case "ja":
        return "TexTools または Penumbra での手動更新が必要です";
      case "pt":
        return "Atualização manual via TexTools/Penumbra";
      default:
        return "Requer uma atualização manual via TexTools ou Penumbra";
    }
  };

  return (
    <SimpleTooltip content={getTooltipContent()}>
      <div className="p-[2px] text-white text-nowrap text-sm rounded px-1.5 ml-1.5 select-none whitespace-nowrap cursor-help border-2 border-[#41c0c4] bg-[#1a978b]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[clamp(1rem,1vw_+_0.5rem,1.618rem)] w-auto"
          viewBox="0 0 48 48"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          >
            <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20" />
            <path d="M33.542 27c-1.274 4.057-5.064 7-9.542 7s-8.268-2.943-9.542-7v6m19.084-18v6c-1.274-4.057-5.064-7-9.542-7s-8.268 2.943-9.542 7" />
          </g>
        </svg>
      </div>
    </SimpleTooltip>
  );
};

export default ManUpd;
