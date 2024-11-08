import React, { useState, useEffect } from "react";
import GDetailsContainer from "@/app/commworks/cwgallery-components/galleries/GalleryDetailsContainer";
import GalleryInfo from "@/app/commworks/cwgallery-components/galleries/GalleryInfo";

interface Artwork {
  artwork_url: string;
  artist_name: string;
  artist_website: string | null;
}

interface ArtworkGalleryProps {
  artworkIds: string;
}

const UniqueArtworkGallery: React.FC<ArtworkGalleryProps> = ({
  artworkIds,
}) => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.di-xiv.com/artworks?artwork_id=${artworkIds}`,
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Artwork[] = await response.json();
        setArtworks(data);
      } catch (err) {
        console.error("Error fetching artwork data:", err);
        setError(
          err instanceof Error ? err.message : "Failed to fetch artwork data",
        );
      } finally {
        setLoading(false);
      }
    };

    if (artworkIds) {
      fetchArtworks();
    } else {
      setError("No artwork IDs provided");
      setLoading(false);
    }
  }, [artworkIds]);

  const toggleModal = (modalId: string) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.toggle("hidden");
    }
  };

  if (loading) return <div>Loading artworks...</div>;
  if (error) return <div>Error: {error}</div>;
  if (artworks.length === 0) return <div>No artworks found</div>;

  return (
    <div
      id="horizontal-gallery-container"
      className="flex overflow-x-auto h-[95%] p-4 mb-[3%] overflow-hidden"
    >
      {artworks.map((artwork, index) => {
        const randomSuffix = Math.random().toString(36).substr(2, 9);
        const modalId = `artwork-${index}-modal-${randomSuffix}`;
        const zoomId = `artwork-${index}-modal-zoom-${randomSuffix}`;

        return (
          <article key={index} className="flex-shrink-0 h-[75vh] mr-4">
            <div className="flex flex-col h-full">
              <div className="flex flex-col h-full justify-between">
                <div className="flex justify-center mt-4 mb-4 select-none glassbox p-3 mobile-only:p-1 rounded-md">
                  <GDetailsContainer>
                    <GalleryInfo
                      artistName={artwork.artist_name}
                      artistWebsite={artwork.artist_website}
                    />
                  </GDetailsContainer>
                </div>
                <div className="relative group flex-grow flex items-center justify-center h-[70vh]">
                  {artwork.artwork_url.toLowerCase().endsWith(".mp4") ? (
                    <video
                      src={artwork.artwork_url}
                      className="h-full w-auto object-cover rounded-md"
                      controls
                      loop
                      muted
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={artwork.artwork_url}
                      alt={`Artwork by ${artwork.artist_name}`}
                      className="h-full w-auto object-cover rounded-md"
                      loading="eager"
                    />
                  )}
                  <div
                    id={zoomId}
                    title="Click to zoom"
                    className="glassbox p-2 rounded-sm z-30 absolute top-2 right-2 hover:text-[#1e7cff] cursor-pointer button-glassbox"
                    onClick={() => toggleModal(modalId)}
                  >
                    <div className="dark:invert">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:block h-10 mobile-only:h-8 w-auto dark:invert"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M3 21v-6h2v2.6l3.1-3.1l1.4 1.4L6.4 19H9v2zM15.9 9.5l-1.4-1.4L17.6 5H15V3h6v6h-2V6.4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  id={modalId}
                  title="Dismiss"
                  className="hidden fixed inset-0 bg-black bg-opacity-80 items-center justify-center z-50"
                  onClick={() => toggleModal(modalId)}
                >
                  <img
                    src={artwork.artwork_url}
                    className="rounded-md cursor-pointer"
                    alt={`Artwork by ${artwork.artist_name}`}
                    style={{ maxHeight: "90vh", width: "auto" }}
                  />
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default UniqueArtworkGallery;
