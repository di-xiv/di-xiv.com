import React, { useState, useEffect, useCallback } from "react";
interface ArtworkGalleryProps {
  locale: string;
  localizedZoom: string;
  localizedDismiss: string;
  localizedLoading: string;
  localizedLoadingError: string;
}
// Selector
import SelectorsContainer from "@/app/commworks/cwgallery-components/SelectorsContainer";
/// Tags
import TagContainer from "@/app/commworks/cwgallery-components/tags/TagContainer";
// Notices
/// Loading gallery
import LoadingGalleryNotice from "@/app/commworks/cwgallery-components/notices/Loading";
/// Toast
import ToastNotification from "@/app/commworks/cwgallery-components/notices/ToastDiv";
import useToast from "@/app/commworks/hooks/UseToast";
/// Rating
import RatingContainer from "@/app/commworks/cwgallery-components/ratings/RatingContainer";
import RatingButton, {
  ratingOptions,
} from "@/app/commworks/cwgallery-components/ratings/RatingButton";
/// Tags
import TagButton from "@/app/commworks/cwgallery-components/tags/TagButton";
/// Gallery
import GDetailsContainer from "@/app/commworks/cwgallery-components/galleries/GalleryDetailsContainer";
import GalleryName from "@/app/commworks/cwgallery-components/galleries/GalleryName";
import GalleryLength from "@/app/commworks/cwgallery-components/galleries/GalleryLength";
import GalleryInfo from "@/app/commworks/cwgallery-components/galleries/GalleryInfo";

interface Tag {
  tag_id: number;
  tag_name: string;
}

interface Artist {
  artist_id: number;
  artist_name: string;
  website: string | null;
}

interface Rating {
  rating_id: number;
  rating_name: string;
}

interface Artwork {
  artwork_id: number;
  artwork_url: string;
  artist: Artist;
  ratings: Rating[];
  tags: { tag_id: number; tag_name: string; rating_id: number | null }[];
}

interface Gallery {
  gallery_id: number;
  gallery_name: string;
  artworks: Artwork[];
  rating: Rating | null;
}

const ArtworkGallery: React.FC<ArtworkGalleryProps> = ({
  locale,
  localizedZoom,
  localizedDismiss,
  localizedLoading,
  localizedLoadingError,
}) => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [selectedTag, setSelectedTag] = useState<Tag | null>(null);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { toastRef, showToast, getLocalizedMessage } = useToast({ locale });

  const showInitialRatingsToast = useCallback(() => {
    const allRatingsMessage = getLocalizedMessage("allRatings");
    showToast("ratingChanged", allRatingsMessage);
  }, [getLocalizedMessage, showToast]);

  const fetchTags = useCallback(async () => {
    try {
      const response = await fetch("https://api.di-xiv.com/tags");
      if (!response.ok) throw new Error("Failed to fetch tags");
      const data = await response.json();
      setTags(data);
    } catch (err) {
      setError("Error fetching tags");
      console.error(err);
    }
  }, []);

  function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

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
            artworks: gallery.artworks.filter(
              (artwork: Artwork) =>
                selectedRatings.length === 0 ||
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

  const handleTagClick = (tag: Tag) => {
    setSelectedTag(tag);
    fetchGalleriesForTag(tag.tag_id);
    scrollToTop();

    const selectedRatingAlts = [
      { id: 1, alt: "SFW" },
      { id: 2, alt: "NSFW" },
      { id: 3, alt: "NSFW++" },
    ]
      .filter((rating) => selectedRatings.includes(rating.id))
      .map((rating) => rating.alt);

    const ratingMessage =
      selectedRatingAlts.length > 0
        ? selectedRatingAlts.join(", ")
        : getLocalizedMessage("allRatings");

    const combinedMessage = `${tag.tag_name} (${ratingMessage})`;
    showToast("nowViewing", combinedMessage);
  };

  const handleRatingClick = (ratingId: number, ratingAlt: string) => {
    setSelectedRatings((prev) => {
      const newRatings = prev.includes(ratingId)
        ? prev.filter((id) => id !== ratingId)
        : [...prev, ratingId];

      const selectedRatingAlts = [
        { id: 1, alt: "SFW" },
        { id: 2, alt: "NSFW" },
        { id: 3, alt: "NSFW++" },
      ]
        .filter((rating) => newRatings.includes(rating.id))
        .map((rating) => rating.alt);

      const ratingMessage =
        selectedRatingAlts.length > 0
          ? selectedRatingAlts.join(", ")
          : getLocalizedMessage("allRatings");

      const combinedMessage = selectedTag
        ? `${ratingMessage} (${selectedTag.tag_name})`
        : ratingMessage;

      showToast("ratingChanged", combinedMessage);

      return newRatings;
    });
    scrollToTop();
  };

  useEffect(() => {
    if (selectedTag) {
      fetchGalleriesForTag(selectedTag.tag_id);
    } else {
      showInitialRatingsToast();
    }
  }, [
    selectedTag,
    selectedRatings,
    fetchGalleriesForTag,
    showInitialRatingsToast,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      showInitialRatingsToast();
    }, 3000);

    return () => clearTimeout(timer);
  }, [showInitialRatingsToast]);

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
                      <div key={artwork.artwork_id} className="flex-none">
                        <div className="relative">
                          {artwork.artwork_url
                            .toLowerCase()
                            .endsWith(".mp4") ? (
                            <video
                              src={artwork.artwork_url}
                              className="h-[85vh] w-auto object-contain rounded"
                              controls
                              loop
                              muted
                            >
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <img
                              src={artwork.artwork_url}
                              alt="Artwork"
                              className="h-[80vh] w-auto object-contain rounded"
                              loading="eager"
                            />
                          )}
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {artwork.tags.map((tag) => (
                            <button
                              key={tag.tag_id}
                              onClick={() => {
                                handleTagClick({
                                  tag_id: tag.tag_id,
                                  tag_name: tag.tag_name,
                                });
                                scrollToTop();
                              }}
                              className="px-2 py-1 rounded text-sm font-medium transition-colors duration-200 light bg-[#bfbfbf] hover:bg-[#efefef] text-[#181a1b]"
                            >
                              {tag.tag_name}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </article>
        </div>
      )}
    </div>
  );
};

export default ArtworkGallery;
