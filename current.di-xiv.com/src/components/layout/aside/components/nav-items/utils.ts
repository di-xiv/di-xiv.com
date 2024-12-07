type Locale = "en" | "ja" | "pt" | "es";

export const getLocalizedRoute = (locale: Locale): string => {
  return locale !== "en" ? `/${locale}` : "";
};

export const localizedHome = (locale: Locale): string => {
  return locale !== "en" ? `/${locale}` : "/";
};

export const isActivePath = (
  currentPath: string,
  itemPath: string,
): boolean => {
  // If either path contains #, return false
  if (currentPath.includes("#") || itemPath.includes("#")) {
    return false;
  }

  // Remove leading and trailing slashes for consistency
  const cleanCurrentPath = currentPath.replace(/^\/|\/$/g, "");
  const cleanItemPath = itemPath.replace(/^\/|\/$/g, "");

  // Split paths into components
  const [currentBase] = cleanCurrentPath.split(/[?#]/);
  const [itemBase] = cleanItemPath.split(/[?#]/);

  // Simple exact match between base paths
  return currentBase === itemBase;
};

export const getGlassboxClass = (isActive: boolean): string => {
  return isActive ? "selected-glassbox" : "button-glassbox";
};
