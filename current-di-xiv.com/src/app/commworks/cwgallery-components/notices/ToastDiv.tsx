import { forwardRef } from "react";

const ToastNotification = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="toast sticky top-[5%] left-0 right-0 mx-auto toast-glassbox regular p-2 rounded hidden z-50 select-none max-w-[90%] w-max"
    >
      <div className="flex items-center justify-center space-x-2 text-center"></div>
    </div>
  );
});

export default ToastNotification;
