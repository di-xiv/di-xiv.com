import mainNav from "@/components/layout/aside/components/nav-data/main-nav.json";
import artRefs from "@/components/layout/aside/components/nav-data/art-references.json";
import inGameRefs from "@/components/layout/aside/components/nav-data/ingame-references.json";
import commWorks from "@/components/layout/aside/components/nav-data/commissioned-works.json";
import inquiries from "@/components/layout/aside/components/nav-data/inquiries.json";

type LocalizedStrings = {
  en: string;
  ja: string;
  es: string;
  pt: string;
};

type NavItemKey =
  | "artrefs"
  | "ingamerefs"
  | "commworks"
  | "contact"
  | "inquiries";
type LocalizedKey = `localized${Capitalize<NavItemKey>}`;

export const createNavItems = (locale: keyof LocalizedStrings) => {
  return mainNav.navItems.map((item) => {
    const key = item.key as NavItemKey;
    const localizedKey = `localized${
      key.charAt(0).toUpperCase() + key.slice(1)
    }` as LocalizedKey;

    return {
      ...item,
      label: mainNav.localizedParentNavItems[localizedKey][locale],
    };
  });
};

export const createSubNavItems = (locale: keyof LocalizedStrings) => {
  return new Map([
    [
      "artrefs",
      artRefs.subNavItems.map((item) => ({
        href: item.href,
        label:
          "label" in item
            ? item.label
            : artRefs.localizedStrings[
                item.key as keyof typeof artRefs.localizedStrings
              ][locale],
        subIcon: item.subIcon,
      })),
    ],
    [
      "ingamerefs",
      inGameRefs.subNavItems.map((item) => ({
        href: item.href,
        label:
          "label" in item
            ? item.label
            : inGameRefs.localizedStrings[
                item.key as keyof typeof inGameRefs.localizedStrings
              ][locale],
        subIcon: item.subIcon,
      })),
    ],
    [
      "commworks",
      commWorks.subNavItems.map((item) => ({
        href: item.href,
        label:
          "label" in item
            ? item.label
            : commWorks.localizedStrings[
                item.key as keyof typeof commWorks.localizedStrings
              ][locale],
        subIcon: item.subIcon,
      })),
    ],
    [
      "inquiries",
      inquiries.subNavItems.map((item) => ({
        href: item.href,
        label:
          "label" in item
            ? item.label
            : inquiries.localizedStrings[
                item.key as keyof typeof inquiries.localizedStrings
              ][locale],
        subIcon: item.subIcon,
      })),
    ],
  ]);
};
