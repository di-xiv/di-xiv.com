import React, { useState, useEffect } from "react";
import GDetailsContainer from "@/app/commworks/cwgallery-components/galleries/GalleryDetailsContainer";
import GalleryName from "@/app/commworks/cwgallery-components/galleries/GalleryName";
import GalleryLength from "@/app/commworks/cwgallery-components/galleries/GalleryLength";
import GalleryInfo from "@/app/commworks/cwgallery-components/galleries/GalleryInfo";

interface Artist {
  artist_name: string;
  website: string | null;
}

interface Artwork {
  artwork_id: number;
  artwork_url: string;
  artist: Artist;
}

interface Gallery {
  gallery_id: number;
  gallery_name: string;
  artworks: Artwork[];
}

const LastGallery: React.FC = () => {
  const [gallery, setGallery] = useState<Gallery | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLastGallery = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.di-xiv.com/gallery");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Gallery[] = await response.json();

        if (data.length > 0) {
          const lastGallery = data[data.length - 1];
          setGallery(lastGallery);
        } else {
          setError("No galleries found");
        }
      } catch (err) {
        setError("Failed to fetch gallery data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLastGallery();
  }, []);

  const toggleModal = (modalId: string) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.toggle("hidden");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!gallery) return <div>No gallery found</div>;

  return (
    <div id="last-gallery-container">
      <article className="space-y-8">
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
              {gallery.artworks.map((artwork) => {
                const randomSuffix = Math.random().toString(36).substr(2, 9);
                const modalId = `${artwork.artwork_id}-modal-${randomSuffix}`;
                const zoomId = `${artwork.artwork_id}-modal-zoom-${randomSuffix}`;

                return (
                  <div
                    key={artwork.artwork_id}
                    className="flex-none relative group"
                  >
                    <div className="relative">
                      {artwork.artwork_url.toLowerCase().endsWith(".mp4") ? (
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
                          alt={`Artwork ${artwork.artwork_id}`}
                          className="h-[80vh] w-auto object-contain rounded"
                          loading="eager"
                        />
                      )}
                      <div
                        id={zoomId}
                        title="Click to zoom"
                        className="glassbox p-2 rounded-sm z-30 absolute top-2 right-2 hover:text-[#1e7cff] cursor-pointer button-glassbox"
                        onClick={() => toggleModal(modalId)}
                      >
                        <img
                          src="/icons/content/charrefs/lucide--zoom-in.svg"
                          className="h-10 mobile-only:h-8 w-auto dark:invert"
                        />
                      </div>
                    </div>
                    <div
                      id={modalId}
                      title="Dismiss"
                      className="hidden fixed inset-0 bg-black bg-opacity-80 items-center justify-center z-50"
                      onClick={() => toggleModal(modalId)}
                    >
                      <div className="flex justify-center mt-[5%]">
                        <img
                          src={artwork.artwork_url}
                          className="rounded-md cursor-pointer"
                          alt={`Artwork ${artwork.artwork_id}`}
                          style={{ maxHeight: "90vh", width: "auto" }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default LastGallery;
