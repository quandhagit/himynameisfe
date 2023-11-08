import { useEffect, useMemo, useReducer } from "react";

const useMatchMedia = (mediaQuery: string): boolean => {
  const [, rerender] = useReducer((count: number) => count + 1, 0);
  useEffect(() => {
    const handler = () => {
      rerender();
    };

    window.matchMedia(mediaQuery).addEventListener("change", handler);
    return () =>
      window.matchMedia(mediaQuery).removeEventListener("change", handler);
  }, [mediaQuery]);

  if (typeof window !== "undefined") {
    return window.matchMedia(mediaQuery).matches;
  }

  return false;
};

export default useMatchMedia;
