export const updateUrl = (
  tagId: number | null,
  ratings: number[],
  searchQuery: string,
) => {
  const params = new URLSearchParams();

  // Always add ratings if they exist
  if (ratings.length > 0) {
    params.set("ratings", ratings.join(","));
  }

  // Add either tag or search query
  if (tagId !== null) {
    params.set("tag", tagId.toString());
  } else if (searchQuery.trim()) {
    params.set("q", searchQuery.trim());
  }

  const newUrl = `${window.location.pathname}${
    params.toString() ? "?" + params.toString() : ""
  }`;

  // Use replaceState instead of pushState to avoid breaking browser navigation
  window.history.replaceState({}, "", newUrl);
};
