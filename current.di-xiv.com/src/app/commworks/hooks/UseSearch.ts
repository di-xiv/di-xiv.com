import { useState, useEffect, useCallback } from "react";
import type { Gallery, Artwork, Rating } from "@/app/commworks/Types";

// Constant for "all" keywords, localized
const ALL_KEYWORDS = ["all", "todo", "すべて", "tudo"];

interface UseSearchProps {
  selectedRatings: number[];
  initialSearchText?: string;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setGalleries: (galleries: Gallery[]) => void;
  shuffleArray: <T>(array: T[]) => T[];
}

export const useSearch = ({
  selectedRatings,
  initialSearchText = "",
  setLoading,
  setError,
  setGalleries,
  shuffleArray,
}: UseSearchProps) => {
  const [searchText, setSearchText] = useState<string>(initialSearchText);
  const [hasSearched, setHasSearched] = useState<boolean>(!!initialSearchText);

  useEffect(() => {
    if (initialSearchText) {
      setSearchText(initialSearchText);
      setHasSearched(true);
    }
  }, [initialSearchText]);

  const fetchAllGalleries = async () => {
    const response = await fetch("https://api.di-xiv.com/gallery");
    if (!response.ok) throw new Error("Failed to fetch all galleries");
    return (await response.json()) as Gallery[];
  };

  const handleSearch = useCallback(
    async (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setHasSearched(false);
        setGalleries([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        let filteredGalleries: Gallery[];

        // Check if the search query is "all" in any supported language
        if (ALL_KEYWORDS.includes(searchQuery.toLowerCase().trim())) {
          // Fetch all galleries when "all" is searched
          filteredGalleries = await fetchAllGalleries();
        } else {
          // Regular search logic
          const terms = searchQuery
            .split(",")
            .map((term) => term.trim())
            .filter((term) => term.length > 0);

          const searches = terms.map(async (term) => {
            const url = new URL("https://api.di-xiv.com/gallery");
            const orTerms = term.split(/\s+/).filter((t) => t.length > 0);

            orTerms.forEach((orTerm) => {
              url.searchParams.append("include_tag_name", orTerm);
              url.searchParams.append("include_artist_name", orTerm);
              url.searchParams.append("include_gallery_name", orTerm);
            });

            const response = await fetch(url.toString());
            if (!response.ok) throw new Error("Failed to fetch galleries");
            return (await response.json()) as Gallery[];
          });

          const results = await Promise.all(searches);

          filteredGalleries = results.reduce<Gallery[]>(
            (intersectedGalleries, currentResults, index) => {
              if (index === 0) return currentResults;

              const currentGalleryIds = new Set(
                currentResults.map((g: Gallery) => g.gallery_id),
              );
              return intersectedGalleries.filter((gallery) =>
                currentGalleryIds.has(gallery.gallery_id),
              );
            },
            [],
          );
        }

        // Apply rating filters
        filteredGalleries = filteredGalleries
          .map((gallery: Gallery) => ({
            ...gallery,
            artworks:
              selectedRatings.length === 0
                ? []
                : gallery.artworks.filter((artwork: Artwork) =>
                    artwork.ratings.some((rating: Rating) =>
                      selectedRatings.includes(rating.rating_id),
                    ),
                  ),
          }))
          .filter((gallery: Gallery) => gallery.artworks.length > 0);

        const shuffledGalleries = shuffleArray(filteredGalleries);
        setGalleries(shuffledGalleries);
        setHasSearched(true);
      } catch (err) {
        console.error("Search error:", err);
        setError("Error fetching galleries");
        setHasSearched(false);
      } finally {
        setLoading(false);
      }
    },
    [selectedRatings, setLoading, setError, setGalleries, shuffleArray],
  );

  return {
    searchText,
    setSearchText,
    handleSearch,
    hasSearched,
  };
};
