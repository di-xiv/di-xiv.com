// ?tag=7&ratings=2,3
import { useState, useEffect } from "react";

interface UrlParams {
  selectedTagId: number | null;
  selectedRatings: number[];
  searchQuery: string; // Add this
}
export const useUrlSearchParams = (): UrlParams => {
  const [urlParams, setUrlParams] = useState<UrlParams>({
    selectedTagId: null,
    selectedRatings: [],
    searchQuery: "",
  });

  useEffect(() => {
    const parseUrlParams = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const tagParam = searchParams.get("tag");
      const ratingsParam = searchParams.get("ratings");
      const searchParam = searchParams.get("q");

      return {
        selectedTagId: tagParam ? Number(tagParam) : null,
        selectedRatings: ratingsParam
          ? ratingsParam.split(",").map(Number)
          : [],
        searchQuery: searchParam || "",
      };
    };

    const params = parseUrlParams();
    setUrlParams(params);

    const handlePopState = () => {
      const newParams = parseUrlParams();
      setUrlParams(newParams);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [window.location.search]); // Add dependency on URL changes

  return urlParams;
};
