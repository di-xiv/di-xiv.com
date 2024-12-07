export interface Tag {
  tag_id: number;
  tag_name: string;
}

export interface Artist {
  artist_id: number;
  artist_name: string;
  website: string | null;
}

export interface Rating {
  rating_id: number;
  rating_name: string;
}

export interface Artwork {
  artwork_id: number;
  artwork_url: string;
  artist: Artist;
  ratings: Rating[];
  tags: { tag_id: number; tag_name: string; rating_id: number | null }[];
}

export interface Gallery {
  gallery_id: number;
  gallery_name: string;
  artworks: Artwork[];
  rating: Rating | null;
}

export interface ArtworkGalleryProps {
  locale: "en" | "ja" | "pt" | "es";
  localizedZoom: string;
  localizedDismiss: string;
  localizedLoading: string;
  localizedLoadingError: string;
}

export type SortOrder = "random" | "newest" | "oldest";
