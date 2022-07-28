import { useEffect, useRef } from "react";

export const useSkipFirstEffect = (
  effect: React.EffectCallback,
  deps?: React.DependencyList | undefined
) => {
  const firstEffect = useRef(true);
  const callback = firstEffect.current ? () => {} : effect;
  firstEffect && (firstEffect.current = false);
  useEffect(callback, deps);
};
