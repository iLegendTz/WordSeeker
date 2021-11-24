import { useEffect, useState } from "react";

// Hook
export const useOnScreen = (ref, rootMargin = "0px") => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => {
      // Update our state when observer callback fires
      setIntersecting(entry.isIntersecting);
    },
    {
      rootMargin,
    }
  );

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
};
