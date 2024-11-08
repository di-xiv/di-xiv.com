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
          en: "Now viewing tag with ratings: ",
          es: "Viendo etiqueta con clasificaciones: ",
          ja: "現在表示中のタグと評価: ",
          pt: "Visualizando tag com classificações: ",
        },
        ratingChanged: {
          en: "Rating filter updated to: ",
          es: "Filtro de clasificación actualizado a: ",
          ja: "評価フィルターが更新されました: ",
          pt: "Filtro de classificação atualizado para: ",
        },
        allRatings: {
          en: "All ratings",
          es: "Todas las clasificaciones",
          ja: "すべての評価",
          pt: "Todas as classificações",
        },
        noRatingsSelected: {
          en: "Select at least one rating to see artworks",
          es: "Selecciona al menos una clasificación para ver las obras",
          ja: "作品を表示するには少なくとも1つの評価を選択してください",
          pt: "Seleciona pelo menos uma classificação para ver as obras",
        },
        initialMessage: {
          en: "Select rating(s) and search or click a tag",
          es: "Selecciona clasificación(es) y busca o haz clic en una etiqueta",
          ja: "評価を選択して検索するか、タグをクリックしてください",
          pt: "Selecione classificação(ões) e pesquise ou clique em uma tag",
        },
        noRatingSelectedTag: {
          en: "Select rating(s) to view artworks tagged with: ",
          es: "Selecciona clasificación(es) para ver obras etiquetadas con: ",
          ja: "タグ付けされた作品を表示するには評価を選択してください: ",
          pt: "Selecione classificação(ões) para ver obras marcadas com: ",
        },
        searchResults: {
          en: "Found",
          es: "Encontradas",
          ja: "検索結果:",
          pt: "Encontradas",
        },
        noSearchResults: {
          en: "No galleries found matching",
          es: "No se encontraron galerías que coincidan con",
          ja: "一致するギャラリーが見つかりませんでした:",
          pt: "Nenhuma galeria encontrada correspondente a",
        },
        selectRatingFirst: {
          en: "Select rating(s) before searching",
          es: "Seleccione clasificación(es) antes de buscar",
          ja: "検索する前に評価を選択してください",
          pt: "Selecione classificação(ões) antes de pesquisar",
        },
        searchPlaceholder: {
          en: "Search tags, artists, or galleries...",
          es: "Buscar etiquetas, artistas o galerías...",
          ja: "タグ、アーティスト、ギャラリーを検索...",
          pt: "Pesquisar tags, artistas ou galerias...",
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
    [getLocalizedMessage],
  );

  return { toastRef, showToast, getLocalizedMessage };
};

export default useToast;
