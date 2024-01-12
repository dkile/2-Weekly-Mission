import { useEffect, useRef } from "react";

type Option = {
  dispatchCondition?: boolean;
};

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  onClickOutside: (e?: MouseEvent) => void,
  options: Option = {},
) => {
  const target = useRef<T | null>(null);
  const callback = useRef(onClickOutside);
  const { dispatchCondition = true } = options;

  useEffect(() => {
    if (!dispatchCondition) return;

    const handler = (e: MouseEvent) => {
      const el = target?.current;
      if (el && !el.contains(e.target as Node)) {
        callback.current();
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [dispatchCondition]);

  return target;
};
