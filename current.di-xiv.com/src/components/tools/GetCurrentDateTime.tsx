import React from "react";

interface Props {
  locale?: string;
  buildTime: string; // Change to string instead of Date
}

const CurrentDateTime: React.FC<Props> = ({ locale, buildTime }) => {
  // Parse the ISO string once
  const date = new Date(buildTime);

  const fullDate = date.toLocaleDateString(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const time = date.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const getTitle = () => {
    switch (locale) {
      case "en":
        return "Last updated (CEST)";
      case "es":
        return "Última actualización (CEST)";
      case "ja":
        return "最終更新 (CEST)";
      case "pt":
        return "Última atualização (CEST)";
      default:
        return "Last updated (CEST)";
    }
  };

  return (
    <span data-timestamp={buildTime} className="select-none cursor-help">
      {getTitle()}: {fullDate}, {time}
    </span>
  );
};

export default CurrentDateTime;
