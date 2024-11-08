import React from "react";
import SimpleTooltip from "../SimpleTooltip";
interface Props {
  lang: "es" | "en" | "ja" | "pt";
  pr: string;
}

const Prio: React.FC<Props> = ({ lang, pr }) => {
  const localizedPrio = () => {
    switch (lang) {
      case "en":
        return "Priority in TexTools/Penumbra";
      case "es":
        return "Prioridad en TexTools/Penumbra";
      case "ja":
        return "テキストツール/Penumbraの優先順位";
      case "pt":
        return "Prioridade em TexTools/Penumbra";
      default:
        return "Priority in TexTools/Penumbra";
    }
  };

  return (
    <SimpleTooltip content={`${localizedPrio()}: ${pr}`}>
      <span className="p-[2px] text-[#efefef] text-sm rounded px-1.5 ml-1.5 select-none cursor-help border-2 border-[#525252] bg-[#181a1b]">
        {pr}
      </span>
    </SimpleTooltip>
  );
};

export default Prio;
