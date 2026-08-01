import { useEffect, useState } from "react";

/**
 * Returns a value that only updates after `delay` ms of silence.
 * Used to turn "every keystroke" into "the user paused typing".
 */
export const useDebounce = (value, delay = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};
