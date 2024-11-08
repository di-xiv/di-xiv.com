import React from "react";

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

  return (
    <span
      className="p-[2px] text-white text-nowrap text-sm rounded px-1.5 ml-1.5 select-none whitespace-nowrap cursor-help border-2 border-[#7df369] bg-[#4ba12e]"
      title={getTitle()}
    >
      {getTitle()}
    </span>
  );
};

export default Compat;
