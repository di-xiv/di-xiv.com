import React, { useState, useEffect } from "react";

const CentralEuropeTime: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isCEST = (date: Date): boolean => {
    // Get the last Sunday of March
    const marchDate = new Date(date.getFullYear(), 2, 31);
    const marchLastSunday = new Date(
      marchDate.setDate(marchDate.getDate() - marchDate.getDay()),
    );

    // Get the last Sunday of October
    const octoberDate = new Date(date.getFullYear(), 9, 31);
    const octoberLastSunday = new Date(
      octoberDate.setDate(octoberDate.getDate() - octoberDate.getDay()),
    );

    return date >= marchLastSunday && date < octoberLastSunday;
  };

  const formatTime = (): string => {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "Europe/Madrid",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };

    const timeString = time.toLocaleTimeString("en-ES", options);
    const timezone = isCEST(time) ? "CEST" : "CET";

    return `${timeString}`;
  };

  return <p>{formatTime()}.</p>;
};

export default CentralEuropeTime;
