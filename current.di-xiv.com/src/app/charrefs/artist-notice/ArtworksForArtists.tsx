import LoadingSpinner from "./artworks-for-artists/LoadingSpinner";
import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";

interface Artwork {
  artwork_id: string;
  artwork_url: string;
  artist_name: string;
  artist_website: string;
}

interface Props {
  localizedSpecialReferenceSummary: string;
  localizedLoading: string;
}

const LazyLoadedImage: React.FC<{
  src: string;
  alt: string;
  className: string;
}> = ({ src, alt, className }) => {
  const [inView, setInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {inView ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-auto object-cover rounded-md"
        />
      ) : (
        <div className="h-full w-full bg-gray-200 animate-pulse rounded-md" />
      )}
    </div>
  );
};

const ArtworkCard: React.FC<{ artwork: Artwork }> = React.memo(
  ({ artwork }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = useCallback(() => setIsModalOpen(true), []);
    const handleModalClose = useCallback(() => setIsModalOpen(false), []);

    return (
      <article className="flex-shrink-0 h-[75vh] mr-4">
        <div className="flex flex-col h-full">
          <div className="flex flex-col h-full justify-between">
            <div className="flex justify-center mt-4 mb-4 select-none glassbox p-3 mobile-only:p-1 rounded-md whitespace-nowrap">
              <div className="dark:invert">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-auto mobile-only:h-4 dark:invert mr-1"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M11.134 1.535c.7-.509 1.416-.942 2.076-1.155c.649-.21 1.463-.267 2.069.34c.603.601.568 1.411.368 2.07c-.202.668-.624 1.39-1.125 2.096c-1.011 1.424-2.496 2.987-3.775 4.249c-1.098 1.084-2.132 1.839-3.04 2.3a3.74 3.74 0 0 1-1.055 3.217c-.431.431-1.065.691-1.657.861c-.614.177-1.294.287-1.914.357A21 21 0 0 1 .797 16H.743l.007-.75H.749L.742 16a.75.75 0 0 1-.743-.742l.743-.008l-.742.007v-.054a21 21 0 0 1 .13-2.284q.101-.972.358-1.914c.17-.591.43-1.226.86-1.657a3.75 3.75 0 0 1 3.227-1.054c.466-.893 1.225-1.907 2.314-2.982c1.271-1.255 2.833-2.75 4.245-3.777M1.62 13.089q-.077.696-.104 1.395q.7-.027 1.396-.104a10.5 10.5 0 0 0 1.668-.309c.526-.151.856-.325 1.011-.48a2.25 2.25 0 1 0-3.182-3.182c-.155.155-.329.485-.48 1.01a10.5 10.5 0 0 0-.309 1.67m10.396-10.34c-1.224.89-2.605 2.189-3.822 3.384l1.718 1.718c1.21-1.205 2.51-2.597 3.387-3.833c.47-.662.78-1.227.912-1.662c.134-.444.032-.551.009-.575h-.001V1.78c-.014-.014-.113-.113-.548.027c-.432.14-.995.462-1.655.942m-4.832 7.266a10 10 0 0 0 1.63-1.142L7.155 7.216a9.7 9.7 0 0 0-1.161 1.607c.482.302.889.71 1.19 1.192"
                  />
                </svg>
              </div>
              {artwork.artist_name && (
                <div className="flex items-center border-b border-transparent whitespace-nowrap hover:text-[#1e7cff]">
                  <a
                    href={artwork.artist_website || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${artwork.artist_name}: ${artwork.artist_website}`}
                  >
                    <h2 className="light text-xl mobile-only:text-lg">
                      {artwork.artist_name} ↗
                    </h2>
                  </a>
                </div>
              )}
            </div>
            <div className="relative group flex-grow flex items-center justify-center h-[70vh]">
              <LazyLoadedImage
                src={artwork.artwork_url}
                alt={`Artwork by ${artwork.artist_name || "unknown artist"}`}
                className="h-full w-auto object-cover rounded-md"
              />
              <div
                className="glassbox p-2 rounded-sm z-10 absolute top-2 right-2 hover:text-[#1e7cff] cursor-pointer button-glassbox"
                onClick={handleModalOpen}
              >
                <div className="dark:invert">
                  <svg
                    className="group-hover:block h-10 mobile-only:h-5 w-auto dark:invert"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M3 21v-6h2v2.6l3.1-3.1l1.4 1.4L6.4 19H9v2zM15.9 9.5l-1.4-1.4L17.6 5H15V3h6v6h-2V6.4z"
                    />
                  </svg>
                </div>
              </div>
              <div className="glassbox absolute top-2 left-2 p-2 rounded-sm cursor-pointer button-glassbox items-center justify-center z-40 hover:text-[#1e7cff]">
                <a
                  href={artwork.artwork_url}
                  target="_blank"
                  download={`artwork-${artwork.artwork_id}`}
                  rel="noopener noreferrer"
                  title={`Download ${artwork.artist_name}'s artwork`}
                >
                  <div className="dark:invert">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:block h-10 mobile-only:h-5 w-auto dark:invert"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                        <path
                          fill="currentColor"
                          d="M8 5v2H5v13h14V7h-3V5h3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm4-3a1 1 0 0 1 1 1v10.828L14.828 12a1 1 0 1 1 1.415 1.414l-3.36 3.359a1.25 1.25 0 0 1-1.767 0l-3.359-3.359A1 1 0 1 1 9.172 12L11 13.828V3a1 1 0 0 1 1-1"
                        />
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={handleModalClose}
          >
            <img
              src={artwork.artwork_url}
              alt={`Artwork by ${artwork.artist_name || "unknown artist"}`}
              className="rounded-md"
              style={{ maxHeight: "90vh", width: "auto" }}
            />
          </div>
        )}
      </article>
    );
  },
);

const ArtworksForArtists: React.FC<Props> = ({
  localizedSpecialReferenceSummary,
  localizedLoading,
}) => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [message4artist, setMessage4artist] = useState("");
  const [artistName, setArtistName] = useState("Artist");
  const [hasValidParams, setHasValidParams] = useState(false);

  const fetchArtworks = useCallback(async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const artworkIds = searchParams.get("reference")?.split(",") || [];
    setMessage4artist(searchParams.get("message4artist") || "");
    setArtistName(searchParams.get("artistName") || "Artist");

    if (artworkIds.length === 0 || artworkIds[0] === "") {
      setLoading(false);
      setHasValidParams(false);
      return;
    }

    setHasValidParams(true);

    try {
      const apiURL = "https://api.di-xiv.com";
      const queryParam = `artwork_id=${artworkIds.join(",")}`;
      const response = await fetch(`${apiURL}/artworks?${queryParam}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setArtworks(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchArtworks();
  }, [fetchArtworks]);

  const artworkElements = useMemo(
    () =>
      artworks.map((artwork) => (
        <ArtworkCard key={artwork.artwork_id} artwork={artwork} />
      )),
    [artworks],
  );

  return (
    <details
      id="artworks-for-reference-container"
      className={`p-1 mobile-only:p-2 rounded-lg shadowless-glassbox ${
        !hasValidParams ? "hidden" : ""
      }`}
    >
      <summary className="regular text-2xl my-[1%] ml-1">
        {`${localizedSpecialReferenceSummary} ${artistName}`}
      </summary>
      {hasValidParams && (
        <>
          {message4artist && (
            <div className="flex justify-center">
              <p
                className="regular flex justify-center text-lg mobile-only:mt-[4%]"
                aria-label={message4artist}
                title={message4artist}
              >
                {message4artist}
              </p>
            </div>
          )}
          {loading ? (
            <LoadingSpinner message={localizedLoading} />
          ) : error ? (
            <div className="flex justify-center regular">
              Error loading data: {error}. Please try again later.
            </div>
          ) : (
            <div className="flex overflow-x-auto h-[95%] p-4 overflow-hidden">
              {artworkElements}
            </div>
          )}
        </>
      )}
    </details>
  );
};

export default ArtworksForArtists;
