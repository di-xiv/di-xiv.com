import React from "react";

interface LoadingSpinnerProps {
  message: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = React.memo(
  ({ message }) => (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-y-1">
        <p className="regular inline-block">{message}</p>
        <div className="flex justify-center dark:invert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-auto select-none dark:invert inline-block mr-2"
            viewBox="0 0 24 24"
          >
            <circle cx="4" cy="12" r="3" fill="currentColor">
              <animate
                id="svgSpinners3DotsScale0"
                attributeName="r"
                begin="0;svgSpinners3DotsScale1.end-0.25s"
                dur="0.75s"
                values="3;.2;3"
              />
            </circle>
            <circle cx="12" cy="12" r="3" fill="currentColor">
              <animate
                attributeName="r"
                begin="svgSpinners3DotsScale0.end-0.6s"
                dur="0.75s"
                values="3;.2;3"
              />
            </circle>
            <circle cx="20" cy="12" r="3" fill="currentColor">
              <animate
                id="svgSpinners3DotsScale1"
                attributeName="r"
                begin="svgSpinners3DotsScale0.end-0.45s"
                dur="0.75s"
                values="3;.2;3"
              />
            </circle>
          </svg>
        </div>
      </div>
    </div>
  ),
);

export default LoadingSpinner;
