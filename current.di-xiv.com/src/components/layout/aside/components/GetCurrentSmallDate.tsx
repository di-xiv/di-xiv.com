import React, { useState, useEffect } from "react";

interface Props {
  c?: string;
}

const GetCurrentSmallDate: React.FC<Props> = ({ c }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();

    return `${year}`;
  };

  const formattedDate = formatDate(currentDate);

  return (
    <p
      data-timestamp={currentDate.getTime()}
      title={`${formattedDate}`}
      className={`${c}`}
    >
      {formattedDate}
    </p>
  );
};

export default GetCurrentSmallDate;
