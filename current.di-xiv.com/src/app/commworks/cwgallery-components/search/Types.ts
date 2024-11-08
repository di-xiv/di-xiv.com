import type { Gallery } from '@/app/commworks/Types';

export interface SearchResult {
  galleries: Gallery[];
  totalResults: number;
}

export interface SearchOptions {
  searchText: string;
  selectedRatings: number[];
  page?: number;
  limit?: number;
}