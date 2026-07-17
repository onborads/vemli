'use client';

import { useLayoutEffect } from 'react';

// Prevents the browser from restoring the previous scroll position (e.g. to
// the AI section) on load, which with global smooth-scroll shows as a visible
// glide down then back to the top. We open the home page at the hero every time.
export default function ScrollReset() {
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    // re-enable smooth scrolling for in-page anchor links after the reset
    requestAnimationFrame(() => {
      root.style.scrollBehavior = prev || '';
    });
  }, []);

  return null;
}
