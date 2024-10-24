import React, { useState, useEffect } from "react";

interface Props {
  locale?: string;
}

const CurrentDateTime: React.FC<Props> = ({ locale }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const unixTimestamp = currentDateTime.getTime();

  const fullDate = currentDateTime.toLocaleDateString(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const time = currentDateTime.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <p
      data-timestamp={unixTimestamp}
      title={`${fullDate}, ${time}`}
      className="select-none cursor-help"
    >
      {fullDate}, {time}
    </p>
  );
};

export default CurrentDateTime;
