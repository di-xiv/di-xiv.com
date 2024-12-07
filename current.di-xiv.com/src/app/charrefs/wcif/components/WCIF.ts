// Text
export { default as SimpleInlineAnchor } from "@/components/text/SimpleInlineAnchor";
export { default as StyledBlockquote } from "@/components/text/StyledBlockquote";
export { BlockquoteType } from "@/components/text/StyledBlockquote";
// Titles
export { default as TitleWithLeadingIcon } from "@/app/charrefs/wcif/components/TitleWithLeadingIcon";
export { default as SubtitleWithLeadingIcon } from "@/components/text/SubtitleWithLeadingIcon";
export { default as TitleWithTwoLeadingIcons } from "@/components/text/TitleWithTwoLeadingIcons";
// Tags
export { default as IVCSSkelomae } from "@/components/text/tags/IVCSSkelomae";
export { default as Compatible } from "@/components/text/tags/Compatible";
export { default as Incompatible } from "@/components/text/tags/Incompatible";
export { default as ManualUpdate } from "@/components/text/tags/ManualUpdate";
export { default as Priority } from "@/components/text/tags/Priority";
///
export { default as Paid } from "@/components/text/tags/Paid";
export { default as Free } from "@/components/text/tags/Free";
/// Map tags
export interface BaseTag {
  type: "ManUpd" | "Compat" | "Incompat" | "Prio" | "IVCSSke" | "Paid" | "Free";
}
export interface PriorityTag extends BaseTag {
  type: "Prio";
  pr: string;
}
export interface OtherTag extends BaseTag {
  type: "ManUpd" | "Compat" | "Incompat" | "IVCSSke" | "Paid" | "Free";
}
export type Tag = PriorityTag | OtherTag;
