import type {
  Tag,
  Rating,
  Artwork,
  Gallery,
  ArtworkGalleryProps,
  SortOrder,
} from "@/app/commworks/Types";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useUrlSearchParams } from "@/app/commworks/hooks/UseURLSearchParams";
import TagContainer from "@/app/commworks/cwgallery-components/tags/TagContainer";
import LoadingGalleryNotice from "@/app/commworks/cwgallery-components/notices/Loading";
import ToastNotification from "@/app/commworks/cwgallery-components/notices/ToastDiv";
import useToast from "@/app/commworks/hooks/UseToast";
import { ratingOptions } from "@/app/commworks/cwgallery-components/ratings/RatingButton";
import TagButton from "@/app/commworks/cwgallery-components/tags/TagButton";
import GDetailsContainer from "@/app/commworks/cwgallery-components/galleries/GalleryDetailsContainer";
import GalleryName from "@/app/commworks/cwgallery-components/galleries/GalleryName";
import GalleryLength from "@/app/commworks/cwgallery-components/galleries/GalleryLength";
import GalleryInfo from "@/app/commworks/cwgallery-components/galleries/GalleryInfo";
import ArtworkItem from "@/app/commworks/cwgallery-components/galleries/artwork-items/ArtworkItem";
import ZoomedModal from "@/app/commworks/cwgallery-components/galleries/zoom/ZoomedModal";
import { useSearch } from "@/app/commworks/hooks/UseSearch";
import SearchBox from "@/app/commworks/cwgallery-components/search/SearchBox";
import { updateUrl } from "@/app/commworks/cwgallery-components/search/UrlHandling";

const ArtworkGallery: React.FC<ArtworkGalleryProps> = ({
  locale,
  localizedZoom,
  localizedDismiss,
  localizedLoading,
  localizedLoadingError,
}) => {
  const {
    selectedTagId,
    selectedRatings: initialSelectedRatings,
    searchQuery,
  } = useUrlSearchParams();

  const [selectedRatings, setSelectedRatings] = useState<number[]>(
    initialSelectedRatings,
  );
  const [tags, setTags] = useState<Tag[]>([]);
  const tagContainerRef = useRef<HTMLDivElement>(null);
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [selectedTag, setSelectedTag] = useState<Tag | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [zoomedArtwork, setZoomedArtwork] = useState<Artwork | null>(null);
  const isInitialLoad = useRef(true);
  const [sortOrder, setSortOrder] = useState<SortOrder>("random");
  const { toastRef, showToast, getLocalizedMessage } = useToast({ locale });

  useEffect(() => {
    // Always set initial ratings if they exist
    if (initialSelectedRatings.length > 0) {
      setSelectedRatings(initialSelectedRatings);
    }

    // Handle search query if it exists
    if (searchQuery) {
      setSearchText(searchQuery);
      handleSearch(searchQuery);
    }
  }, []);

  function isTag(obj: any): obj is Tag {
    return (
      typeof obj === "object" &&
      obj !== null &&
      typeof obj.tag_id === "number" &&
      typeof obj.tag_name === "string"
    );
  }
  const reorderTagsWithSelected = (
    tags: Tag[],
    selectedTagId: number | null,
  ) => {
    if (!selectedTagId) return tags;

    return [
      ...tags.filter((tag) => tag.tag_id === selectedTagId),
      ...tags.filter((tag) => tag.tag_id !== selectedTagId),
    ];
  };

  function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  const sortGalleries = (galleries: Gallery[], order: SortOrder): Gallery[] => {
    if (order === "random") {
      return shuffleArray(galleries);
    } else if (order === "newest") {
      return [...galleries].sort((a, b) => b.gallery_id - a.gallery_id);
    } else {
      return [...galleries].sort((a, b) => a.gallery_id - b.gallery_id);
    }
  };
  const handleSortClick = () => {
    setSortOrder((current) => {
      const nextOrder: Record<SortOrder, SortOrder> = {
        random: "newest",
        newest: "oldest",
        oldest: "random",
      };
      const newOrder = nextOrder[current];

      // Sort current galleries
      setGalleries((currentGalleries) =>
        sortGalleries([...currentGalleries], newOrder),
      );

      // Show toast notification with the corresponding message key
      showToast(
        `sortOrder${newOrder.charAt(0).toUpperCase() + newOrder.slice(1)}`,
        "",
      );

      return newOrder;
    });
  };

  const fetchTags = useCallback(async () => {
    try {
      const response = await fetch("https://api.di-xiv.com/tags");
      if (!response.ok) throw new Error("Failed to fetch tags");
      const data = await response.json();

      if (Array.isArray(data) && data.every(isTag)) {
        // Sort tags alphabetically instead of random
        const sortedTags = data.sort((a, b) =>
          a.tag_name.localeCompare(b.tag_name),
        );

        // If there's a selectedTagId, reorder the tags accordingly
        const orderedTags = reorderTagsWithSelected(sortedTags, selectedTagId);
        setTags(orderedTags);

        if (selectedTagId) {
          const selectedTag = orderedTags.find(
            (tag) => tag.tag_id === selectedTagId,
          );
          if (selectedTag) {
            setSelectedTag(selectedTag);
          }
        }
      } else {
        throw new Error("Invalid data format received from API");
      }
    } catch (err) {
      setError("Error fetching tags");
      console.error(err);
    }
  }, [selectedTagId]);

  useEffect(() => {
    fetchTags();
  }, [fetchTags]);

  const fetchGalleriesForTag = useCallback(
    async (tagId: number) => {
      // If no ratings selected, don't fetch anything
      if (selectedRatings.length === 0) {
        setGalleries([]);
        return;
      }

      setLoading(true);
      setError(null);
      try {
        let url = `https://api.di-xiv.com/gallery?include_tag_id=${tagId}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch galleries");
        const data = (await response.json()) as Gallery[];

        const filteredGalleries = data
          .map((gallery: Gallery) => ({
            ...gallery,
            artworks: gallery.artworks.filter((artwork: Artwork) =>
              artwork.ratings.some((rating: Rating) =>
                selectedRatings.includes(rating.rating_id),
              ),
            ),
          }))
          .filter((gallery: Gallery) => gallery.artworks.length > 0);

        const sortedGalleries = sortGalleries(filteredGalleries, sortOrder);
        setGalleries(sortedGalleries);
      } catch (err) {
        setError("Error fetching galleries");
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [selectedRatings, sortOrder],
  );

  const { searchText, setSearchText, handleSearch, hasSearched } = useSearch({
    selectedRatings,
    initialSearchText: searchQuery, // Pass initial search text
    setLoading,
    setError,
    setGalleries,
    shuffleArray,
    sortOrder,
    sortGalleries,
  });

  useEffect(() => {
    if (searchText && hasSearched) {
      handleSearch(searchText);
    }
  }, [selectedRatings]);

  useEffect(() => {
    if (hasSearched && searchText.trim() && !loading) {
      // Only show toast when search is complete
      if (selectedRatings.length === 0) {
        showToast("selectRatingFirst", "");
      } else {
        const selectedRatingAlts = ratingOptions
          .filter((rating) => selectedRatings.includes(rating.id))
          .map((rating) => rating.alt)
          .join(", ");

        if (galleries.length === 0) {
          showToast(
            "noSearchResults",
            `"${searchText}" (${selectedRatingAlts})`,
          );
        } else {
          showToast(
            "searchResults",
            `${galleries.length} galleries for "${searchText}" (${selectedRatingAlts})`,
          );
        }
      }
    }
  }, [hasSearched, loading]);

  useEffect(() => {
    if (isInitialLoad.current) {
      // Set initial ratings
      if (initialSelectedRatings.length > 0) {
        setSelectedRatings(initialSelectedRatings);
      }

      // Handle search query and selected tag
      if (searchQuery) {
        // Wait for next tick to ensure search is properly initialized
        setTimeout(() => {
          setSearchText(searchQuery);
          handleSearch(searchQuery);
        }, 0);
      } else if (selectedTagId && tags.length > 0) {
        const tag = tags.find((t) => t.tag_id === selectedTagId);
        if (tag) {
          setSelectedTag(tag);
        }
      }

      isInitialLoad.current = false;
    }
  }, [searchQuery, initialSelectedRatings, selectedTagId, tags]);

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleTagClick = useCallback(
    (tag: Tag) => {
      setSelectedTag(tag);
      if (searchText) {
        setSearchText("");
      }
      // Reorder tags to put selected tag first
      setTags((currentTags) =>
        reorderTagsWithSelected(currentTags, tag.tag_id),
      );
      updateUrl(tag.tag_id, selectedRatings, "");
      scrollToTop();

      // Scroll tag container to start
      if (tagContainerRef.current) {
        tagContainerRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    },
    [selectedRatings, searchText, setSearchText],
  );

  const handleArtworkTagClick = (tag: Tag) => {
    handleTagClick({
      tag_id: tag.tag_id,
      tag_name: tag.tag_name,
    });
    scrollToTop();
  };

  useEffect(() => {
    if (searchText) {
      setSelectedTag(null);
    }
  }, [searchText]);

  useEffect(() => {
    if (tags.length > 0 && selectedTagId) {
      const tag = tags.find((t) => t.tag_id === selectedTagId);
      if (tag) {
        setSelectedTag(tag);
      }
    }
  }, [tags, selectedTagId]);

  useEffect(() => {
    if (initialSelectedRatings.length > 0) {
      setSelectedRatings(initialSelectedRatings);
    }
  }, [initialSelectedRatings]);

  useEffect(() => {
    if (selectedTag) {
      if (selectedRatings.length === 0) {
        showToast("noRatingSelectedTag", selectedTag.tag_name);
      } else {
        fetchGalleriesForTag(selectedTag.tag_id);

        const selectedRatingAlts = ratingOptions
          .filter((rating) => selectedRatings.includes(rating.id))
          .map((rating) => rating.alt);

        const ratingMessage = selectedRatingAlts.join(", ");
        const combinedMessage = `${selectedTag.tag_name} (${ratingMessage})`;
        showToast("nowViewing", combinedMessage);
      }
    }
  }, [selectedTag, selectedRatings, fetchGalleriesForTag, showToast]);

  const handleRatingClick = (ratingId: number) => {
    setSelectedRatings((prev) => {
      const newRatings = prev.includes(ratingId)
        ? prev.filter((id) => id !== ratingId)
        : [...prev, ratingId];

      // Update URL based on whether we're in tag or search mode
      updateUrl(selectedTag?.tag_id || null, newRatings, searchText);

      const selectedRatingAlts = ratingOptions
        .filter((rating) => newRatings.includes(rating.id))
        .map((rating) => rating.alt);

      const ratingMessage =
        selectedRatingAlts.length === 0
          ? getLocalizedMessage("allRatings")
          : selectedRatingAlts.join(", ");

      const combinedMessage = selectedTag
        ? `${selectedTag.tag_name} (${ratingMessage})`
        : ratingMessage;

      showToast("ratingChanged", combinedMessage, newRatings.length > 0);

      return newRatings;
    });
    scrollToTop();
  };

  const handleSearchClick = useCallback(() => {
    if (searchText.trim()) {
      handleSearch(searchText);
      setSelectedTag(null);
      updateUrl(null, selectedRatings, searchText);
    }
  }, [handleSearch, searchText, selectedRatings]);

  useEffect(() => {
    showToast("initialMessage", "");
  }, [showToast]);

  useEffect(() => {
    if (selectedTag) {
      fetchGalleriesForTag(selectedTag.tag_id);
    }
  }, [selectedTag, selectedRatings, fetchGalleriesForTag]);

  return (
    <div id="cw-gallery-container" ref={containerRef}>
      <div className="w-full">
        <SearchBox
          value={searchText}
          onChange={setSearchText}
          onSearch={handleSearchClick}
          selectedRatings={selectedRatings}
          onRatingClick={handleRatingClick}
          placeholder={getLocalizedMessage("searchPlaceholder")}
          sortOrder={sortOrder}
          onSortClick={handleSortClick}
        />
      </div>
      <TagContainer ref={tagContainerRef}>
        {tags.map((tag) => (
          <TagButton
            key={tag.tag_id}
            tagId={tag.tag_id}
            tagName={tag.tag_name}
            isSelected={selectedTag?.tag_id === tag.tag_id}
            onClick={() => handleTagClick(tag)}
          />
        ))}
      </TagContainer>
      <ToastNotification ref={toastRef} />
      {loading && (
        <LoadingGalleryNotice>{localizedLoading}</LoadingGalleryNotice>
      )}
      {error && (
        <p className="text-center text-red-500">
          {localizedLoadingError}: {error}
        </p>
      )}
      {galleries.length > 0 && (
        <div className="mobile-only:mt-[5%]">
          <article className="space-y-8">
            {galleries.map((gallery) => (
              <div
                key={gallery.gallery_id}
                className="overflow-hidden gallery-container"
              >
                <div className="not-mobile:p-4">
                  <GDetailsContainer>
                    <GalleryName>{gallery.gallery_name}</GalleryName>
                    <GalleryLength>{gallery.artworks.length}</GalleryLength>
                    <GalleryInfo
                      artistName={gallery.artworks[0]?.artist.artist_name}
                      artistWebsite={gallery.artworks[0]?.artist.website}
                    />
                  </GDetailsContainer>
                  <div className="flex overflow-x-auto space-x-4 py-4">
                    {gallery.artworks.map((artwork, index) => (
                      <ArtworkItem
                        key={artwork.artwork_id}
                        artwork={artwork}
                        onZoom={setZoomedArtwork}
                        onTagClick={handleArtworkTagClick}
                        localizedZoom={localizedZoom}
                        imageIndex={index}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </article>
        </div>
      )}
      <ZoomedModal
        isOpen={!!zoomedArtwork}
        onClose={() => setZoomedArtwork(null)}
        imageUrl={zoomedArtwork?.artwork_url || ""}
        altText={`Artwork ${zoomedArtwork?.artwork_id}`}
        localizedDismiss={localizedDismiss}
      />
    </div>
  );
};

export default ArtworkGallery;
