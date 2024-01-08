import { useCallback, useEffect, useState } from "react";

type DetectScrollType = {
  isScrollOnTop: boolean;
};

const useDetectScroll = (): DetectScrollType => {
  const [isScrollOnTop, setIsScrollOnTop] = useState<boolean>(true);

  const handleNavigation = useCallback((e: Event) => {
    const window = e.currentTarget as Window;
    if (!window) {
      setIsScrollOnTop(true);
      return;
    }
    setIsScrollOnTop(window.scrollY === 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return {
    isScrollOnTop: isScrollOnTop,
  };
};

export default useDetectScroll;
