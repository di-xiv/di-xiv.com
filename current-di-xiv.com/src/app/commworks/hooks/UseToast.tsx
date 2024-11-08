import React, { useRef, useCallback } from "react";

interface ToastOptions {
  duration?: number;
  locale: "en" | "ja" | "pt" | "es";
}

interface ToastRef {
  showToast: (content: React.ReactNode) => void;
}

const useToast = ({ duration = 3000, locale }: ToastOptions) => {
  const toastRef = useRef<ToastRef>(null);

  const getLocalizedMessage = useCallback(
    (messageKey: string): string => {
      const messages: { [key: string]: { [key: string]: string } } = {
        nowViewing: {
          en: "Now viewing: ",
          es: "Viendo ahora: ",
          ja: "現在表示中: ",
          pt: "Visualizando agora: ",
        },
        ratingChanged: {
          en: "Exploring artworks with ratings: ",
          es: "Explorando obras con clasificaciones: ",
          ja: "評価付きの作品を探索中: ",
          pt: "Explorando obras de arte com classificações: ",
        },
        allRatings: {
          en: "All ratings",
          es: "Todas las clasificaciones",
          ja: "すべての評価",
          pt: "Todas as classificações",
        },
        noRatingsSelected: {
          en: "Oops! No ratings selected. Pick a rating to unveil the artworks!",
          es: "¡Ups! No hay clasificaciones seleccionadas. ¡Elige una para revelar las obras!",
          ja: "おっと！評価が選択されていません。作品を見るには評価を選んでください！",
          pt: "Opa! Nenhuma classificação selecionada. Escolha uma para revelar as obras de arte!",
        },
        initialMessage: {
          en: "Choose a rating to start",
          es: "Elige una clasificación para comenzar",
          ja: "ようこそ！評価を選んでアートの旅を始めましょう",
          pt: "Escolha uma classificação para iniciar",
        },
        noRatingSelectedTag: {
          en: "Almost there! Just pick a rating to reveal the artworks for: ",
          es: "¡Casi listo! Solo elige una clasificación para revelar las obras de: ",
          ja: "もう少しです！評価を選んで作品を表示しましょう",
          pt: "Quase lá! Apenas escolha uma classificação para revelar as obras de arte para: ",
        },
      };

      return messages[messageKey][locale] || messages[messageKey]["en"];
    },
    [locale],
  );

  const showToast = useCallback(
    (messageKey: string, content: string, hasRatings: boolean = true) => {
      let localizedMessage = getLocalizedMessage(messageKey);
      let icon: React.ReactNode = null;

      // If it's a rating change but no ratings are selected, show the noRatingsSelected message instead
      if (messageKey === "ratingChanged" && !hasRatings) {
        localizedMessage = getLocalizedMessage("noRatingsSelected");
        messageKey = "noRatingsSelected";
      }

      if (messageKey === "nowViewing") {
        icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 mobile-only:h-5 w-auto flex-shrink-0"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M20.188 10.934c.388.472.582.707.582 1.066s-.194.594-.582 1.066C18.768 14.79 15.636 18 12 18s-6.768-3.21-8.188-4.934c-.388-.472-.582-.707-.582-1.066s.194-.594.582-1.066C5.232 9.21 8.364 6 12 6s6.768 3.21 8.188 4.934Z" />
            </g>
          </svg>
        );
      } else if (messageKey === "ratingChanged") {
        icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 mobile-only:h-5 w-auto flex-shrink-0"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        );
      }

      const toastContent = (
        <div className="flex items-center justify-center space-x-2">
          {icon}
          <span className="text-center">
            {localizedMessage}{" "}
            {content && <span className="bold">{content}</span>}
          </span>
        </div>
      );

      toastRef.current?.showToast(toastContent);
    },
    [locale, getLocalizedMessage],
  );

  return { toastRef, showToast, getLocalizedMessage };
};

export default useToast;
