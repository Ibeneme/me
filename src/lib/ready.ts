/** Fires once the intro loader has finished, so entrance animations aren't hidden behind it. */
let ready = false;
const listeners = new Set<() => void>();

export const markReady = () => {
  if (ready) return;
  ready = true;
  // rAF escapes any GSAP context the caller is running in, so the
  // listeners' animations aren't reverted when the loader unmounts.
  requestAnimationFrame(() => {
    listeners.forEach((fn) => fn());
    listeners.clear();
  });
};

export const onReady = (fn: () => void) => {
  if (ready) {
    fn();
    return () => {};
  }
  listeners.add(fn);
  return () => listeners.delete(fn);
};
