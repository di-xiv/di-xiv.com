import { useRef, useCallback } from "react";

interface ToastOptions {
  duration?: number;
  locale: string;
}

const useToast = ({ duration = 3000, locale }: ToastOptions) => {
  const toastRef = useRef<HTMLDivElement>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getLocalizedMessage = useCallback(
    (messageKey: string): string => {
      const messages: { [key: string]: { [key: string]: string } } = {
        nowViewing: {
          en: "Now viewing",
          es: "Viendo ahora",
          ja: "現在表示中",
          pt: "Visualizando agora",
        },
        ratingChanged: {
          en: "Now viewing artwork with ratings",
          es: "Viendo arte con clasificaciones",
          ja: "レーティング付き作品閲覧中",
          pt: "VAgora visualizando obras de arte com classificações",
        },
        allRatings: {
          en: "All ratings",
          es: "Todas las clasificaciones",
          ja: "すべての評価",
          pt: "Todas as classificações",
        },
      };

      return messages[messageKey][locale] || messages[messageKey]["en"];
    },
    [locale],
  );

  const showToast = useCallback(
    (messageKey: string, content: string) => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }

      if (toastRef.current) {
        const localizedMessage = getLocalizedMessage(messageKey);
        let icon = "";

        if (messageKey === "nowViewing") {
          icon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 mobile-only:h-5 w-auto flex-shrink-0" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M20.188 10.934c.388.472.582.707.582 1.066s-.194.594-.582 1.066C18.768 14.79 15.636 18 12 18s-6.768-3.21-8.188-4.934c-.388-.472-.582-.707-.582-1.066s.194-.594.582-1.066C5.232 9.21 8.364 6 12 6s6.768 3.21 8.188 4.934Z"/>
            </g>
          </svg>`;
        } else if (messageKey === "ratingChanged") {
          icon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 mobile-only:h-5 w-auto flex-shrink-0" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/>
          </svg>`;
        }

        toastRef.current.innerHTML = `
          <div class="flex items-center justify-center space-x-2">
            ${icon}
            <span class="text-center">${localizedMessage}: <strong>${content}</strong></span>
          </div>
        `;

        toastRef.current.classList.remove("hidden");
        toastTimeoutRef.current = setTimeout(() => {
          if (toastRef.current) {
            toastRef.current.classList.add("hidden");
          }
        }, duration);
      }
    },
    [locale, duration, getLocalizedMessage],
  );

  return { toastRef, showToast, getLocalizedMessage };
};

export default useToast;
