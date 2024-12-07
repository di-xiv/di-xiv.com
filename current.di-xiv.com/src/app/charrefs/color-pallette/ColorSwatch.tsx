import React, { useState } from "react";

interface ColorInfo {
  hex: string;
  rgb: string;
  hsl: string;
}

interface ColorSwatchProps {
  label: string;
  colors: ColorInfo[];
  locale: string;
}

const translations = {
  en: {
    PP: "Genitalia",
    Skin: "Skin",
    Eyes: "Eyes",
    Ear: "Ears",
    Hair: "Hair",
    copied: "Copied!",
  },
  es: {
    PP: "Genitales",
    Skin: "Piel",
    Eyes: "Ojos",
    Ear: "Orejas",
    Hair: "Pelo",
    copied: "¡Copiado!",
  },
  pt: {
    PP: "Genitália",
    Skin: "Pele",
    Eyes: "Olhos",
    Ear: "Orelhas",
    Hair: "Cabelo",
    copied: "Copiado!",
  },
  ja: {
    PP: "性器",
    Skin: "肌",
    Eyes: "目",
    Ear: "耳",
    Hair: "髪",
    copied: "コピーしました！",
  },
};

const hexToRgb = (hex: string): string => {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return `${r}, ${g}, ${b}`;
};

const hexToHsl = (hex: string): string => {
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0,
    s = 0,
    l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return `${Math.round(h * 360)}°, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%`;
};

const CopyButton: React.FC<{ text: string; locale: string }> = ({
  text,
  locale,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-2 p-1 glassbox button-glassbox rounded flex-shrink-0"
      title={
        copied
          ? translations[locale as keyof typeof translations].copied
          : "Copy"
      }
    >
      <img
        src={
          copied
            ? "/icons/content/charrefs/fluent-emoji-high-contrast--check-mark.svg"
            : "/icons/content/charrefs/gravity-ui--copy.svg"
        }
        alt={copied ? "Copied" : "Copy"}
        width="16"
        height="16"
        className="dark:invert"
      />
    </button>
  );
};

const ColorSwatch: React.FC<ColorSwatchProps> = ({ label, colors, locale }) => {
  const isValidLocale = (loc: string): loc is keyof typeof translations => {
    return loc in translations;
  };

  const safeLocale = isValidLocale(locale) ? locale : "en";

  const getTranslation = (label: string): string => {
    const localeTranslations = translations[safeLocale];
    return label in localeTranslations
      ? localeTranslations[label as keyof typeof localeTranslations]
      : label;
  };

  return (
    <div className="mb-4 shadowless-glassbox  rounded p-2">
      <h3
        className="mb-2 regular"
        aria-label={getTranslation(label)}
        title={getTranslation(label)}
      >
        ❈&nbsp;{getTranslation(label)}
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {colors.map((color, index) => (
          <div key={index} className="flex flex-col">
            <div
              className="w-full h-16 border rounded-[2px] border-[#efefef] mb-2"
              style={{ backgroundColor: `#${color.hex}` }}
              title={`Hex: #${color.hex}`}
            />
            <div className="text-sm space-y-1 ml-[1px]">
              <div className="flex justify-between items-center">
                <div>
                  ❈&nbsp;<span className="regular">HEX: </span>
                  <span>#{color.hex}</span>
                </div>
                <CopyButton text={`#${color.hex}`} locale={safeLocale} />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  ❈&nbsp;<span className="regular">RGB: </span>
                  <span>{color.rgb}</span>
                </div>
                <CopyButton text={color.rgb} locale={safeLocale} />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  ❈&nbsp;<span className="regular">HSL: </span>
                  <span>{color.hsl}</span>
                </div>
                <CopyButton text={color.hsl} locale={safeLocale} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CharacterColorPalette: React.FC<{ locale: string }> = ({ locale }) => {
  const colorGroups = [
    {
      label: "PP",
      colors: ["ffc3b7", "513736", "fe9b8b"].map((hex) => ({
        hex,
        rgb: hexToRgb(hex),
        hsl: hexToHsl(hex),
      })),
    },
    {
      label: "Skin",
      colors: ["d78170", "ff9480", "c59789"].map((hex) => ({
        hex,
        rgb: hexToRgb(hex),
        hsl: hexToHsl(hex),
      })),
    },
    {
      label: "Eyes",
      colors: ["ffee77", "ffffd1"].map((hex) => ({
        hex,
        rgb: hexToRgb(hex),
        hsl: hexToHsl(hex),
      })),
    },
    {
      label: "Ear",
      colors: ["ffdaf3", "69464d", "504243"].map((hex) => ({
        hex,
        rgb: hexToRgb(hex),
        hsl: hexToHsl(hex),
      })),
    },
    {
      label: "Hair",
      colors: ["a59299", "e1d9da"].map((hex) => ({
        hex,
        rgb: hexToRgb(hex),
        hsl: hexToHsl(hex),
      })),
    },
  ];

  return (
    <div className="p-4 rounded-md shadow">
      {colorGroups.map((group, index) => (
        <ColorSwatch
          key={index}
          label={group.label}
          colors={group.colors}
          locale={locale}
        />
      ))}
    </div>
  );
};

export default CharacterColorPalette;
