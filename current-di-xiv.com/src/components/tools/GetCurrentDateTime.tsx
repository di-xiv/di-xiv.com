import React, { useState, useEffect } from "react";

interface Props {
  lang?: string;
}

const CurrentDateTime: React.FC<Props> = ({ lang }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const unixTimestamp = currentDateTime.getTime();

  const fullDate = currentDateTime.toLocaleDateString(lang, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const time = currentDateTime.toLocaleTimeString(lang, {
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
