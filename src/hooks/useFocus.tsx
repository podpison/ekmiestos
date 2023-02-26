import { useEffect } from "react";

export const useFocus = (ref: React.RefObject<HTMLDivElement>, callback: () => void) => {
  useEffect(() => {
    const eventCallback = (e: MouseEvent) => {
      if (!ref.current) return;

      let withinBoundaries = e.composedPath().includes(ref.current);
      !withinBoundaries && callback();
    };

    document.addEventListener('click', eventCallback);
    return () => document.removeEventListener('click', eventCallback);
  }, [ref.current]);
};