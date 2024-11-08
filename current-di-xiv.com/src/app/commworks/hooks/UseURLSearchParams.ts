// ?tag=7&ratings=2,3
import { useState, useEffect } from "react";

interface UrlParams {
  selectedTagId: number | null;
  selectedRatings: number[];
}

export const useUrlSearchParams = (): UrlParams => {
  const [urlParams, setUrlParams] = useState<UrlParams>({
    selectedTagId: null,
    selectedRatings: [],
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const tagParam = searchParams.get("tag");
    const ratingsParam = searchParams.get("ratings");

    const selectedTagId = tagParam ? Number(tagParam) : null;
    const selectedRatings = ratingsParam
      ? ratingsParam.split(",").map(Number)
      : [];

    setUrlParams({ selectedTagId, selectedRatings });
  }, []);

  return urlParams;
};
