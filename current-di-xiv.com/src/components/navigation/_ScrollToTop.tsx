import React, { useState, useEffect, useRef } from "react";

interface ScrollToTopButtonProps {
  targetScrollableElementID: string;
  locale: "en" | "ja" | "pt" | "es";
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  targetScrollableElementID,
  locale,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef = useRef<HTMLElement | null>(null);

  const i18n = {
    en: {
      ariaLabel: "Go To Top Button",
      title: "Scroll to top",
    },
    ja: {
      ariaLabel: "トップに戻るボタン",
      title: "トップにスクロール",
    },
    es: {
      ariaLabel: "Botón Ir Arriba",
      title: "Desplazarse hacia arriba",
    },
    pt: {
      ariaLabel: "Botão Voltar ao Topo",
      title: "Rolar para o topo",
    },
  };

  const localeTexts = i18n[locale as keyof typeof i18n] || i18n.en;

  useEffect(() => {
    scrollContainerRef.current = document.getElementById(
      targetScrollableElementID,
    );

    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const shouldShowButton = scrollContainerRef.current.scrollTop > 200;
        if (shouldShowButton !== isVisible) {
          setIsVisible(shouldShowButton);
        }
      }
    };

    const currentScrollContainer = scrollContainerRef.current;
    if (currentScrollContainer) {
      currentScrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentScrollContainer) {
        currentScrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isVisible, targetScrollableElementID]);

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      id="scrollToTopBtn"
      role="button"
      aria-label={localeTexts.ariaLabel}
      title={localeTexts.title}
      className={`border-black dark:border-white fixed bottom-[33%] right-[-5px] mobile-only:right-[-2px] z-50 p-4 mobile-only:p-1 rounded-tl-[50%] rounded-bl-[50%] transition-opacity duration-500 glassbox select-none ${
        isVisible ? "slide-in-right" : "slide-out-right"
      }`}
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 mobile-only:h-10 w-auto"
        viewBox="0 0 12 12"
      >
        <path
          fill="currentColor"
          d="M4.146 6.146a.5.5 0 1 0 .708.708L6 5.707l1.146 1.147a.5.5 0 1 0 .708-.708l-1.5-1.5a.5.5 0 0 0-.708 0zM1 6a5 5 0 1 0 10 0A5 5 0 0 0 1 6m5 4a4 4 0 1 1 0-8a4 4 0 0 1 0 8"
        ></path>
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
