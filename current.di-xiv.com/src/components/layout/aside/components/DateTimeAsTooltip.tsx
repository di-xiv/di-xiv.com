import React from "react";
import SimpleTooltip from "@/components/text/SimpleTooltip";
import CurrentDateTime from "@/components/tools/GetCurrentDateTime";

interface DateTimeTooltipProps {
  children: React.ReactNode;
  position?: "top" | "right" | "bottom" | "left";
  locale: "en" | "ja" | "pt" | "es";
  buildTime: Date;
}

const DateTimeTooltip: React.FC<DateTimeTooltipProps> = ({
  children,
  position = "top",
  locale,
  buildTime,
}) => {
  return (
    <SimpleTooltip
      content={<CurrentDateTime locale={locale} buildTime={buildTime} />}
      position={position}
    >
      <div>{children}</div>
    </SimpleTooltip>
  );
};

export default DateTimeTooltip;
