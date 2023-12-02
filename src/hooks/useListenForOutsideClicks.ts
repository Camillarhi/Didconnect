import { useEffect, useRef } from "react";

/**
 * A custom React hook that listens for clicks outside of a specified element
 * and executes a callback function when detected.
 *
 * @param action The callback function to execute when an outside click is detected
 *
 * @returns A map object containing the following properties:
 *    `elementRef`: A React ref object that should be attached to the element that
 *                  should listen for outside clicks
 *
 */
const useListenForOutsideClicks = (onOutsideClick: () => void) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const elementRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (elementRef.current && !elementRef.current.contains(event.target)) {
        if (onOutsideClick) onOutsideClick();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onOutsideClick]);

  return { elementRef };
};

export default useListenForOutsideClicks;
