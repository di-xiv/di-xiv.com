import pako from "pako";
import LoadingSpinner from "./artworks-for-artists/LoadingSpinner";
import TextContent from "@/components/wrappers/TextContent.tsx";
import StyledBlockquote, {
  BlockquoteType,
} from "@/components/text/StyledBlockquote";

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
  showUrlConverter?: boolean;
}

const encodeParams = (params: URLSearchParams): string => {
  const r = params.get("reference");
  const a = params.get("artistName");
  const m = params.get("message4artist");

  const data = [r, a, m].map((v) => v || "").join("~");

  // Compress the data
  const compressed = pako.deflate(new TextEncoder().encode(data));

  // Convert to base64url
  return btoa(String.fromCharCode(...Array.from(compressed)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
};

const decodeParams = (encoded: string): URLSearchParams => {
  try {
    // Convert from base64url to binary
    const binaryString = atob(encoded.replace(/-/g, "+").replace(/_/g, "/"));
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    // Decompress
    const decompressed = pako.inflate(bytes);
    const data = new TextDecoder().decode(decompressed);

    const [r, a, m] = data.split("~");
    const params = new URLSearchParams();

    if (r) params.append("reference", r);
    if (a) params.append("artistName", a);
    if (m) params.append("message4artist", m);

    return params;
  } catch {
    return new URLSearchParams();
  }
};

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
      <style>
        {`
          details > summary::before {
            content: none;
            margin-right: 8px;
          }
        `}
      </style>
      {inView ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-auto object-cover rounded-md no-icon-details"
        />
      ) : (
        <div className="h-full w-full bg-gray-200 animate-pulse rounded-md" />
      )}
    </div>
  );
};

const URLConverter: React.FC = () => {
  const [encodedUrl, setEncodedUrl] = useState("");
  const searchParams = new URLSearchParams(window.location.search);
  const isConverterVisible = searchParams.get("showSharing") === "true";

  const handleEncode = useCallback(() => {
    const params = new URLSearchParams(window.location.search);
    params.delete("showSharing");
    const encoded = encodeParams(params);
    const newUrl = `${window.location.origin}${window.location.pathname}?e=${encoded}`;
    setEncodedUrl(newUrl);
  }, []);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(encodedUrl);
  }, [encodedUrl]);

  if (!isConverterVisible) return null;

  return encodedUrl ? (
    <div className="flex items-center gap-2 mt-2">
      <input
        type="text"
        value={encodedUrl}
        readOnly
        className="flex-1 p-2 rounded shadowless-glassbox"
      />
      <button
        onClick={handleCopy}
        className="px-4 py-2 shadowless-glassbox button-glassbox rounded"
      >
        Copy
      </button>
    </div>
  ) : (
    <button
      onClick={handleEncode}
      className="px-4 py-2 shadowless-glassbox button-glassbox rounded"
    >
      Generate Shortened URL
    </button>
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
            <div className="relative group flex-grow flex items-center justify-center h-[70vh]">
              <LazyLoadedImage
                src={artwork.artwork_url}
                alt={`Artwork by ${artwork.artist_name || "unknown artist"}`}
                className="h-full w-auto object-cover rounded"
              />
              <div
                className="glassbox p-2 rounded-sm z-10 absolute top-2 right-2 hover:text-[#1e7cff] cursor-pointer button-glassbox"
                onClick={handleModalOpen}
              >
                <img
                  src="/icons/content/charrefs/lucide--zoom-in.svg"
                  className="h-10 mobile-only:h-8 w-auto dark:invert"
                />
              </div>
              <a
                href={artwork.artwork_url}
                download={`artwork-${artwork.artist_name}-${artwork.artwork_url}`}
                rel="noopener noreferrer"
                target="_blank"
                className="absolute top-2 left-2 p-2 rounded-sm cursor-pointer shadowless-glassbox button-glassbox items-center justify-center z-40 hover:text-[#1e7cff]"
                title={`Download ${artwork.artist_name}'s artwork`}
              >
                <img
                  src="/icons/content/charrefs/iconoir--download.svg"
                  className="h-10 mobile-only:h-8 w-auto dark:invert"
                />
              </a>
            </div>
            <div
              className="flex justify-center rounded
              mt-4 mb-4 select-none mobile-only:p-1 whitespace-nowrap
              shadowless-glassbox p-2"
            >
              <div className="inline-block dark:invert">
                <img
                  src="/icons/content/commworks/typcn--brush.svg"
                  className="h-8 w-auto"
                  alt="Artist name and website"
                />
              </div>
              {artwork.artist_name && (
                <div className="flex items-center border-b border-transparent whitespace-nowrap hover:text-[#1e7cff]">
                  <a
                    href={artwork.artist_website || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${artwork.artist_name}: ${artwork.artist_website}`}
                  >
                    <h3 className="light">{artwork.artist_name} ↗</h3>
                  </a>
                </div>
              )}
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
              className="rounded"
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

  const searchParams = new URLSearchParams(window.location.search);
  const isConverterVisible = searchParams.get("showSharing") === "true";

  const fetchArtworks = useCallback(async () => {
    const searchParams = new URLSearchParams(window.location.search);
    let paramsToUse = searchParams;

    // Check if we have an encoded parameter
    const encoded = searchParams.get("e");
    if (encoded) {
      paramsToUse = decodeParams(encoded);
    }

    const artworkIds = paramsToUse.get("reference")?.split(",") || [];
    setMessage4artist(paramsToUse.get("message4artist") || "");
    setArtistName(paramsToUse.get("artistName") || "Artist");

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
    <div className={`${!hasValidParams ? "hidden" : ""}`}>
      <div className="bold flex items-center">
        <img
          src="/icons/content/animated/line-md--hazard-lights-loop.svg"
          className="h-11 w-auto mr-4 mobile-only:h-6 dark:invert"
        />
        <h3 id="specific-references">{`${localizedSpecialReferenceSummary} ${artistName}`}</h3>
      </div>
      {isConverterVisible && <URLConverter />}
      <TextContent>
        <div>
          {hasValidParams && (
            <div className="pb-4 rounded-lg">
              {message4artist && (
                <div className="flex justify-center">
                  <StyledBlockquote blockquoteType={BlockquoteType.Info}>
                    <h4
                      className="regular flex justify-center text-lg mobile-only:mt-[4%]"
                      aria-label={message4artist}
                      title={message4artist}
                    >
                      {message4artist}
                    </h4>
                  </StyledBlockquote>
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
            </div>
          )}
        </div>
      </TextContent>
    </div>
  );
};

export default ArtworksForArtists;
