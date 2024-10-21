import type {
  Tag,
  Artist,
  Rating,
  Artwork,
  Gallery,
  ArtworkGalleryProps,
} from "@/app/commworks/Types";
import React, { useState, useEffect, useCallback } from "react";
import { useUrlSearchParams } from "@/app/commworks/hooks/UseURLSearchParams";
import SelectorsContainer from "@/app/commworks/cwgallery-components/SelectorsContainer";
import TagContainer from "@/app/commworks/cwgallery-components/tags/TagContainer";
import LoadingGalleryNotice from "@/app/commworks/cwgallery-components/notices/Loading";
import ToastNotification from "@/app/commworks/cwgallery-components/notices/ToastDiv";
import useToast from "@/app/commworks/hooks/UseToast";
import RatingContainer from "@/app/commworks/cwgallery-components/ratings/RatingContainer";
import RatingButton, {
  ratingOptions,
} from "@/app/commworks/cwgallery-components/ratings/RatingButton";
import TagButton from "@/app/commworks/cwgallery-components/tags/TagButton";
import GDetailsContainer from "@/app/commworks/cwgallery-components/galleries/GalleryDetailsContainer";
import GalleryName from "@/app/commworks/cwgallery-components/galleries/GalleryName";
import GalleryLength from "@/app/commworks/cwgallery-components/galleries/GalleryLength";
import GalleryInfo from "@/app/commworks/cwgallery-components/galleries/GalleryInfo";
import ArtworkItem from "@/app/commworks/cwgallery-components/galleries/artwork-items/ArtworkItem";
import ZoomedModal from "@/app/commworks/cwgallery-components/galleries/zoom/ZoomedModal";

const ArtworkGallery: React.FC<ArtworkGalleryProps> = ({
  locale,
  localizedZoom,
  localizedDismiss,
  localizedLoading,
  localizedLoadingError,
}) => {
  const { selectedTagId, selectedRatings: initialSelectedRatings } =
    useUrlSearchParams();
  const [tags, setTags] = useState<Tag[]>([]);
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [selectedTag, setSelectedTag] = useState<Tag | null>(null);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [zoomedArtwork, setZoomedArtwork] = useState<Artwork | null>(null);

  const { toastRef, showToast, getLocalizedMessage } = useToast({ locale });

  const updateUrl = useCallback((tag: number | null, ratings: number[]) => {
    const searchParams = new URLSearchParams();
    if (tag) searchParams.set("tag", tag.toString());
    if (ratings.length > 0) searchParams.set("ratings", ratings.join(","));

    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  }, []);

  function isTag(obj: any): obj is Tag {
    return (
      typeof obj === "object" &&
      obj !== null &&
      typeof obj.tag_id === "number" &&
      typeof obj.tag_name === "string"
    );
  }

  function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  const fetchTags = useCallback(async () => {
    try {
      const response = await fetch("https://api.di-xiv.com/tags");
      if (!response.ok) throw new Error("Failed to fetch tags");
      const data = await response.json();

      if (Array.isArray(data) && data.every(isTag)) {
        const shuffledTags = shuffleArray(data);
        setTags(shuffledTags);

        if (selectedTagId) {
          const selectedTag = shuffledTags.find(
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

        const shuffledGalleries = shuffleArray(filteredGalleries);

        setGalleries(shuffledGalleries);
      } catch (err) {
        setError("Error fetching galleries");
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [selectedRatings],
  );

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
      updateUrl(tag.tag_id, selectedRatings);
      scrollToTop();
    },
    [selectedRatings, updateUrl],
  );

  const handleArtworkTagClick = (tag: Tag) => {
    handleTagClick({
      tag_id: tag.tag_id,
      tag_name: tag.tag_name,
    });
    scrollToTop();
  };

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

  const handleRatingClick = (ratingId: number, ratingAlt: string) => {
    setSelectedRatings((prev) => {
      const newRatings = prev.includes(ratingId)
        ? prev.filter((id) => id !== ratingId)
        : [...prev, ratingId];

      updateUrl(selectedTag?.tag_id || null, newRatings);

      const selectedRatingAlts = ratingOptions
        .filter((rating) => newRatings.includes(rating.id))
        .map((rating) => rating.alt);

      let ratingMessage;
      if (selectedRatingAlts.length === 0) {
        ratingMessage = getLocalizedMessage("noRatingsSelected");
      } else {
        ratingMessage = selectedRatingAlts.join(", ");
      }

      const combinedMessage = selectedTag
        ? `${ratingMessage} (${selectedTag.tag_name})`
        : ratingMessage;

      showToast("ratingChanged", combinedMessage, newRatings.length > 0);

      return newRatings;
    });
    scrollToTop();
  };

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
      <SelectorsContainer>
        <TagContainer>
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
        <RatingContainer>
          {ratingOptions.map((rating) => (
            <RatingButton
              key={rating.id}
              rating={rating}
              isSelected={selectedRatings.includes(rating.id)}
              onClick={handleRatingClick}
            />
          ))}
        </RatingContainer>
      </SelectorsContainer>
      <ToastNotification ref={toastRef} />
      {loading && (
        <LoadingGalleryNotice>{localizedLoading}</LoadingGalleryNotice>
      )}
      {error && (
        <p className="text-center text-red-500">
          {localizedLoadingError}: {error}
        </p>
      )}
      {selectedTag && (
        <div>
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
                    {gallery.artworks.map((artwork) => (
                      <ArtworkItem
                        key={artwork.artwork_id}
                        artwork={artwork}
                        onZoom={setZoomedArtwork}
                        onTagClick={handleArtworkTagClick}
                        localizedZoom={localizedZoom}
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
