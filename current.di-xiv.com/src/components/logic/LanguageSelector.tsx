import React, { useEffect, useState, useCallback } from "react";

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "pt", name: "Português" },
  { code: "ja", name: "日本語" },
];

const defaultLang = "en";

const LanguageSelector: React.FC = () => {
  const [lang, setLang] = useState<string>(defaultLang);

  const detectLanguage = useCallback(() => {
    const userLang = navigator.language.split("-")[0];
    const preferredLang = localStorage.getItem("preferredLanguage");
    const pathLang = window.location.pathname.split("/")[1];

    if (preferredLang && languages.some((l) => l.code === preferredLang)) {
      return preferredLang;
    } else if (languages.some((l) => l.code === pathLang)) {
      return pathLang;
    } else if (languages.some((l) => l.code === userLang)) {
      return userLang;
    }
    return defaultLang;
  }, []);

  useEffect(() => {
    const detectedLang = detectLanguage();
    setLang(detectedLang);

    const currentPath = window.location.pathname;
    const queryString = window.location.search;
    const isOnCorrectLangPage = languages.some((l) =>
      currentPath.startsWith(`/${l.code}`),
    );

    if (!isOnCorrectLangPage) {
      let newPath =
        detectedLang !== defaultLang
          ? `/${detectedLang}${currentPath}`
          : currentPath;
      if (newPath !== currentPath) {
        window.location.href = newPath + queryString;
      }
    }
  }, [detectLanguage]);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedLang = event.target.value;
    localStorage.setItem("preferredLanguage", selectedLang);

    const currentPath = window.location.pathname;
    const queryString = window.location.search;
    const pathSegments = currentPath.split("/");

    let newPath;
    if (languages.some((l) => l.code === pathSegments[1])) {
      if (selectedLang === defaultLang) {
        pathSegments.splice(1, 1);
        newPath = pathSegments.join("/") || "/";
      } else {
        pathSegments[1] = selectedLang;
        newPath = pathSegments.join("/");
      }
    } else {
      newPath = `/${selectedLang}${currentPath}`;
    }

    if (newPath !== currentPath) {
      window.location.href = newPath + queryString;
    }
  };

  return (
    <div
      className="language-selector flex items-center"
      role="navigation"
      aria-label="Language Selection"
    >
      <div id="translate-icon" aria-label="language-selector-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="language-selector"
          className="w-auto h-12 mobile-only:h-10"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12.004 1.95a1 1 0 0 1 1.094-.896A10.94 10.94 0 0 1 18 2.78V2.5a1 1 0 1 1 2 0V5a1 1 0 0 1-1 1h-2.5a1 1 0 0 1-.29-1.957a8.9 8.9 0 0 0-3.31-.999a1 1 0 0 1-.896-1.093M6 21.5v-.279a10.94 10.94 0 0 0 4.9 1.725a1 1 0 1 0 .198-1.99a8.9 8.9 0 0 1-3.308-.999A1 1 0 0 0 7.5 18H5a1 1 0 0 0-1 1v2.5a1 1 0 1 0 2 0M16.952 8.303a1 1 0 1 0-1.905-.606a13 13 0 0 0-.324 1.343c-.565.013-1.12 0-1.652-.037a1 1 0 0 0-.143 1.995q.691.048 1.417.047a26 26 0 0 0-.24 1.697c-1.263.716-2.142 1.684-2.637 2.701c-.624 1.283-.7 2.856.24 3.882c.675.737 1.704.759 2.499.59c.322-.07.654-.177.988-.321a1 1 0 0 0 1.746-.93l-.041-.115a8.4 8.4 0 0 0 2.735-4.06c.285.251.507.549.658.864c.284.594.334 1.27.098 1.91c-.233.633-.78 1.313-1.839 1.843a1 1 0 1 0 .895 1.788c1.44-.72 2.385-1.757 2.82-2.94a4.44 4.44 0 0 0-.17-3.464a4.75 4.75 0 0 0-2.103-2.164A9 9 0 0 0 20 12a1 1 0 0 0-1.974-.23a6 6 0 0 0-1.796.138q.07-.457.166-.964a20 20 0 0 0 2.842-.473a1 1 0 1 0-.476-1.942c-.623.152-1.286.272-1.964.358c.047-.209.099-.409.154-.584m-3.685 8.015c.165-.34.414-.697.758-1.038q.03.521.098.973c.083.56.207 1.049.341 1.478a3.4 3.4 0 0 1-.674.227c-.43.091-.588.018-.614.006l-.004-.001c-.162-.194-.329-.774.095-1.645m4.498-2.563a6.36 6.36 0 0 1-1.568 2.73a8 8 0 0 1-.096-.524a10.3 10.3 0 0 1-.087-1.905l.1-.036zM3.08 5.621a6.34 6.34 0 0 1 4.456-.331h.003q.957.284 1.547.881c.394.398.624.852.755 1.29c.202.678.18 1.422.168 1.838q-.005.12-.005.201v5.503a1 1 0 0 1-1.96.282l-.08.039c-.964.462-2.397.92-3.877.507c-1.632-.457-2.453-1.81-2.572-3.136c-.114-1.28.41-2.736 1.682-3.448c1.529-.855 3.116-.839 4.262-.64q.295.051.555.116a2.5 2.5 0 0 0-.09-.689a1.05 1.05 0 0 0-.258-.454c-.121-.122-.325-.263-.69-.37a4.34 4.34 0 0 0-3.048.222a1 1 0 0 1-.848-1.811m4.037 4.956c-.884-.153-1.956-.137-2.943.416c-.424.237-.729.83-.667 1.523c.058.647.421 1.193 1.119 1.389c.79.22 1.681-.005 2.473-.385c.367-.176.68-.37.905-.523V10.8a6 6 0 0 0-.887-.222"
          ></path>
        </svg>
      </div>
      <label htmlFor="language-selector" className="sr-only">
        Select Language
      </label>
      <select
        id="language-selector"
        value={lang}
        onChange={handleLanguageChange}
        className="ml-1 select-language light p-2 mobile-only:p-1 glassbox"
      >
        {languages.map((language) => (
          <option
            key={language.code}
            value={language.code}
            className="light bg-[#181a1b] text-[#efefef]"
          >
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;