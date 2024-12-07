import React from "react";
import { BlockquoteIcons } from "./BlockquoteIcons";

export enum BlockquoteType {
  Info = "info",
  Tip = "tip",
  Warning = "warning",
  Danger = "danger",
  Important = "important",
  Updated = "updated",
  Language = "lang",
  Quote = "quote",
  Artist = "artist",
  Download = "download",
}

interface Props {
  blockquoteType: BlockquoteType;
  children: React.ReactNode;
}

const borderColorMap: Record<BlockquoteType, string> = {
  [BlockquoteType.Info]: "border-blue-500",
  [BlockquoteType.Tip]: "border-green-500",
  [BlockquoteType.Warning]: "border-yellow-500",
  [BlockquoteType.Danger]: "border-red-500",
  [BlockquoteType.Important]: "border-purple-400",
  [BlockquoteType.Language]: "border-indigo-500",
  [BlockquoteType.Updated]: "border-teal-400",
  [BlockquoteType.Quote]: "border-orange-400",
  [BlockquoteType.Artist]: "border-cyan-500",
  [BlockquoteType.Download]: "border-indigo-400",
};

const iconColorMap: Record<BlockquoteType, string> = {
  [BlockquoteType.Info]: "text-blue-500",
  [BlockquoteType.Tip]: "text-green-500",
  [BlockquoteType.Warning]: "text-yellow-500",
  [BlockquoteType.Danger]: "text-red-500",
  [BlockquoteType.Important]: "text-purple-500",
  [BlockquoteType.Language]: "text-indigo-500",
  [BlockquoteType.Updated]: "text-teal-500",
  [BlockquoteType.Quote]: "text-orange-400",
  [BlockquoteType.Artist]: "text-cyan-500",
  [BlockquoteType.Download]: "text-indigo-400",
};

const StyledBlockquote: React.FC<Props> = ({ blockquoteType, children }) => {
  const borderColor = borderColorMap[blockquoteType] || "border-[#181a1b]";
  const iconColor = iconColorMap[blockquoteType];

  return (
    <blockquote
      className={`my-[1%] border-l-2 ${borderColor} p-2 mobile-only:p-1 flex flex-wrap items-center`}
    >
      {blockquoteType && (
        <div className={`inline-block ${iconColor}`}>
          <BlockquoteIcons type={blockquoteType} />
        </div>
      )}
      <div className="flex flex-1 not-mobile:ml-2 mobile-only:ml-1 items-center">
        {children}
      </div>
    </blockquote>
  );
};

export default StyledBlockquote;
