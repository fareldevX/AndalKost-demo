import { useEffect, useRef } from "react";

export function useBodyScrollLock(isLocked) {
  const previousOverflow = useRef("");

  useEffect(() => {
    if (!isLocked) return undefined;

    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow.current;
    };
  }, [isLocked]);
}
