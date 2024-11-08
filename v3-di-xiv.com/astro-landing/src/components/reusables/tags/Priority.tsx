import React from "react";

interface Props {
  locPrio: "es" | "en" | "jp" | "pt";
  pr: string;
}

const Prio: React.FC<Props> = ({ locPrio, pr }) => {
  const localizedPrio = () => {
    switch (locPrio) {
      case "en":
        return "Priority in TextTools/Penumbra";
      case "es":
        return "Prioridad en TextTools/Penumbra";
      case "jp":
        return "テキストツール/Penumbraの優先順位";
      case "pt":
        return "Prioridade em TextTools/Penumbra";
      default:
        return "Priority in TextTools/Penumbra";
    }
  };

  return (
    <span
      className="p-[2px] text-[#efefef] whitespace-nowrap text-sm rounded px-1.5 ml-1.5 select-none cursor-help border-2 border-[#525252] bg-[#181a1b]"
      title={`${localizedPrio()}: ${pr}`}
    >
      {pr}
    </span>
  );
};

export default Prio;
