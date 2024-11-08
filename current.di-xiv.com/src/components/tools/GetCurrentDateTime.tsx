import React, { useState, useEffect } from "react";

interface Props {
  locale?: string;
  buildTime: Date;
}

const CurrentDateTime: React.FC<Props> = ({ locale, buildTime }) => {
  const unixTimestamp = buildTime.getTime();

  const fullDate = buildTime.toLocaleDateString(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const time = buildTime.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const getTitle = () => {
    switch (locale) {
      case "en":
        return "Last updated";
      case "es":
        return "Última actualización";
      case "ja":
        return "最終更新";
      case "pt":
        return "Última atualização";
      default:
        return "Last updated";
    }
  };

  return (
    <p data-timestamp={unixTimestamp} className="select-none cursor-help">
      {getTitle()}: {fullDate}, {time}
    </p>
  );
};

export default CurrentDateTime;
