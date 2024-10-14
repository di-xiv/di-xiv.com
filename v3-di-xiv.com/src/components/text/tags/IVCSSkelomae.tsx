import React from "react";

interface Props {
  lang: "es" | "en" | "ja" | "pt";
}

const IVCSSke: React.FC<Props> = ({ lang }) => {
  const getTitle = () => {
    switch (lang) {
      case "en":
        return "IVCS/Skelomae compatible";
      case "es":
        return "Compatible con IVCS/Skelomae";
      case "ja":
        return "IVCS/Skelomae 対応";
      case "pt":
        return "IVCS/Skelomae compatível";
      default:
        return "IVCS/Skelomae compatible";
    }
  };

  return (
    <span
      className="p-[2px] text-white text-nowrap text-sm rounded px-1.5 ml-1.5 select-none whitespace-nowrap cursor-help border-2 border-[#9297f6] bg-[#555dfe]"
      title={getTitle()}
    >
      {getTitle()}
    </span>
  );
};

export default IVCSSke;
