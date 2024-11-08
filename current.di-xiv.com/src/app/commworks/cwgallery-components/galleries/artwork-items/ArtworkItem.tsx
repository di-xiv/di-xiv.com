import React from "react";
import ZoomButton from "@/app/commworks/cwgallery-components/galleries/zoom/ZoomButton";
import ArtworkTags from "@/app/commworks/cwgallery-components/galleries/tags/ArtworkTags";

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

interface ArtworkItemProps {
  artwork: Artwork;
  onZoom: (artwork: Artwork) => void;
  onTagClick: (tag: Tag) => void;
  localizedZoom: string;
}

const ArtworkItem: React.FC<ArtworkItemProps> = ({
  artwork,
  onZoom,
  onTagClick,
  localizedZoom,
}) => {
  const isVideo = artwork.artwork_url.toLowerCase().endsWith(".mp4");

  return (
    <div className="flex-none relative group">
      <div className="relative">
        {isVideo ? (
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
          <>
            <img
              src={artwork.artwork_url}
              alt="Artwork"
              className="h-[80vh] w-auto object-contain rounded"
              loading="eager"
            />
            <ZoomButton
              onClick={() => onZoom(artwork)}
              localizedZoom={localizedZoom}
            />
          </>
        )}
      </div>
      <ArtworkTags tags={artwork.tags} onTagClick={onTagClick} />
    </div>
  );
};

export default ArtworkItem;
