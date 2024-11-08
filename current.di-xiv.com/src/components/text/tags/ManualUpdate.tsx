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
      <span className="p-[2px] text-white text-nowrap text-sm rounded px-1.5 ml-1.5 select-none whitespace-nowrap cursor-help border-2 border-[#d1d95f] bg-[#cca600]">
        {getTitle()}
      </span>
    </SimpleTooltip>
  );
};

export default ManUpd;
