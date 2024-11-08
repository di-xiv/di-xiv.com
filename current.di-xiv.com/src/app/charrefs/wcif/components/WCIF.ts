// Text
export { default as SimpleInlineAnchor } from "@/components/text/SimpleInlineAnchor";
export { default as StyledBlockquote } from "@/components/text/StyledBlockquote";
export { BlockquoteType } from "@/components/text/StyledBlockquote";
// Titles
export { default as TitleWithLeadingIcon } from "@/components/text/TitleWithLeadingIcon";
export { default as SubtitleWithLeadingIcon } from "@/components/text/SubtitleWithLeadingIcon";
export { default as TitleWithTwoLeadingIcons } from "@/components/text/TitleWithTwoLeadingIcons";
// Tags
export { default as IVCSSkelomae } from "@/components/text/tags/IVCSSkelomae";
export { default as Compatible } from "@/components/text/tags/Compatible";
export { default as Incompatible } from "@/components/text/tags/Incompatible";
export { default as ManualUpdate } from "@/components/text/tags/ManualUpdate";
export { default as Priority } from "@/components/text/tags/Priority";
/// Map tags
export interface BaseTag {
  type: "ManUpd" | "Compat" | "Incompat" | "Prio" | "IVCSSke";
}
export interface PriorityTag extends BaseTag {
  type: "Prio";
  pr: string;
}
export interface OtherTag extends BaseTag {
  type: "ManUpd" | "Compat" | "Incompat" | "IVCSSke";
}
export type Tag = PriorityTag | OtherTag;
