import React, {
  forwardRef,
  useState,
  useImperativeHandle,
  useEffect,
  useCallback,
} from "react";

const ToastNotification = forwardRef<
  { showToast: (content: React.ReactNode) => void },
  {}
>((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  const hideToast = useCallback(() => {
    setIsVisible(false);
  }, []);

  const showToast = useCallback((newContent: React.ReactNode) => {
    setContent(newContent);
    setIsVisible(true);
  }, []);

  useImperativeHandle(ref, () => ({
    showToast,
  }));

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isVisible) {
      timer = setTimeout(hideToast, 3000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isVisible, content, hideToast]);

  return (
    <div
      className={`toast fixed top-[50%] left-0 right-0 mx-auto toast-glassbox regular p-2 rounded z-50 select-none max-w-[90%] w-max transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      {content}
    </div>
  );
});

export default ToastNotification;
