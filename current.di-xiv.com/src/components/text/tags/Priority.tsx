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
      <div className="p-[2px] text-[#efefef] text-sm rounded px-1.5 ml-1.5 select-none cursor-help border-2 border-[#525252] bg-[#181a1b]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[clamp(1rem,1vw_+_0.5rem,1.618rem)] w-auto"
          viewBox="0 0 14 14"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11.167.5v5M9.5 1.75h.417c.69 0 1.25-.56 1.25-1.25v0m1.667 5H9.5m.922 5.593h.656a1.422 1.422 0 0 0 0-2.843h-.656a1.422 1.422 0 0 0 0 2.843" />
            <path d="M12.5 9.562v2.625c0 .725-.588 1.313-1.312 1.313h-.875a1.31 1.31 0 0 1-1.238-.876M6 11l-2.5 2.5L1 11M3.5.5v13" />
          </g>
        </svg>
      </div>
    </SimpleTooltip>
  );
};

export default Prio;
