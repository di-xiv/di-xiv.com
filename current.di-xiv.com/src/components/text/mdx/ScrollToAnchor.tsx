import { useEffect } from "react";

function ScrollToAnchor() {
  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Call once on mount
    handleScroll();

    // Set up event listener for hash changes
    window.addEventListener("hashchange", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("hashchange", handleScroll);
    };
  }, []);

  return null;
}

export default ScrollToAnchor;
