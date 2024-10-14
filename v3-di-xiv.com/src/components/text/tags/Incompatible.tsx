import React from "react";

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

  return (
    <span
      className="p-[2px] text-white text-nowrap text-sm rounded px-1.5 ml-1.5 select-none whitespace-nowrap cursor-help border-2 border-[#f45a5a] bg-[#f71616]"
      title={getTitle()}
    >
      {getTitle()}
    </span>
  );
};

export default Incompat;
