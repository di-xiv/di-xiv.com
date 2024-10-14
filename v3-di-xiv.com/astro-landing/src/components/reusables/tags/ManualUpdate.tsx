import React from "react";

interface Props {
  lang: "es" | "en" | "jp" | "pt";
}

const ManUpd: React.FC<Props> = ({ lang }) => {
  const getTitle = () => {
    switch (lang) {
      case "en":
        return "Manual Update";
      case "es":
        return "Actualización Manual";
      case "jp":
        return "手動アップデート";
      case "pt":
        return "Atualização manual";
      default:
        return "Manual Update";
    }
  };

  return (
    <span
      className="p-[2px] text-white text-nowrap text-sm rounded px-1.5 ml-1.5 select-none whitespace-nowrap cursor-help border-2 border-[#d1d95f] bg-[#cca600]"
      title={getTitle()}
    >
      {getTitle()}
    </span>
  );
};

export default ManUpd;
