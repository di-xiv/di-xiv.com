import React, { useState, useEffect } from "react";

const CookieNotice: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    const path = window.location.pathname;
    const cookieConsent = localStorage.getItem("cookie-consent");
    const cookieRejection = getCookie("cookie-rejected");

    if (cookieRejection) {
      console.log("Cookie rejected exists, clearing data");
      deleteAllCookiesAndStorage();
    }

    if (!cookieConsent && !cookieRejection) {
      setVisible(true);

      if (path.includes("/es/")) {
        setLanguage("es");
      } else if (path.includes("/ca/")) {
        setLanguage("ca");
      } else if (path.includes("/jp/")) {
        setLanguage("jp");
      } else if (path.includes("/pt/")) {
        setLanguage("pt");
      }
    }
  }, []);

  const setCookie = (name: string, value: string, days: number): void => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  };

  const getCookie = (name: string): string | null => {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  const deleteAllCookiesAndStorage = (): void => {
    document.cookie.split(";").forEach((c) => {
      const cookieName = c.trim().split("=")[0];
      if (cookieName !== "cookie-rejected") {
        document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
      }
    });
    localStorage.clear();
    sessionStorage.clear();
    console.log("Deleted all cookies and storage");
  };

  const handleAccept = (): void => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleReject = (): void => {
    setCookie("cookie-rejected", "true", 365);
    deleteAllCookiesAndStorage();
    setVisible(false);
  };

  if (!visible) return null;

  const notices: Record<string, JSX.Element> = {
    en: (
      <div id="en-cookie-notice" className="grid grid-cols">
        <span className="text-base">
          We don't use them, but Cloudflare services do.
        </span>
        <span className="ultralight text-base">
          You can accept or reject them by clicking the buttons below.
        </span>
      </div>
    ),
    es: (
      <div id="es-cookie-notice" className="grid grid-cols">
        <span className="text-base">
          No usamos, pero los servicios de Cloudflare si.
        </span>
        <span className="text-base">
          Puedes aceptarlas o rechazarlas pulsando los botones de abajo.
        </span>
      </div>
    ),
    ca: (
      <div id="ca-cookie-notice" className="grid grid-cols">
        <span className="text-base">
          Nosaltres no els fem servir, però sí els serveis de Cloudflare.
        </span>
        <span className="text-base">
          Podeu acceptar-los o rebutjar-los fent clic als botons següents.
        </span>
      </div>
    ),
    jp: (
      <div id="jp-cookie-notice" className="grid grid-cols">
        <span className="text-base">
          私たちはそれらを使用しませんが、Cloudflare サービスは使用します。
        </span>
        <span className="text-base">
          以下のボタンをクリックして、承認または拒否できます。
        </span>
      </div>
    ),
    pt: (
      <div id="pt-cookie-notice" className="grid grid-cols">
        <span className="text-base">
          Nós não usamos, mas os serviços da Cloudflare usam.
        </span>
        <span className="text-base">
          Você pode aceitá-las ou rejeitá-las clicando nos botões abaixo.
        </span>
      </div>
    ),
  };

  return (
    <div id="cookie-notice-container" className="relative z-20">
      <div className="fixed bottom-[5%] right-[5%] mobile-only:right-0 mobile-only:w-[90%] mobile-only:mr-[5%] glassbox p-3 rounded-[3px]">
        <span className="regular">🍪 Cookies:</span>
        <div
          id="localized-cookie-text"
          className="ultralight text-lg mobile-only:text-sm grid grid-cols gap-2"
        >
          {notices[language]}
        </div>
        <div
          id="cookie-buttons"
          className="flex items-center justify-center gap-3"
        >
          <button
            id="accept-cookies"
            className="px-1 border-2 border-transparent hover:dark:border-white hover:border-black border-solid rounded-lg"
            onClick={handleAccept}
          >
            <span className="font-mono text-lg">✓</span>
          </button>
          <button
            id="reject-cookies"
            className="px-1 border-2 border-transparent hover:dark:border-white hover:border-black border-solid rounded-lg"
            onClick={handleReject}
          >
            <span className="font-mono text-lg">✗</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieNotice;
