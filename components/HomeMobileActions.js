'use client';

import { useEffect, useState } from 'react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=233261427273&text=Hello+Vemli+POS+Team%2C+I%27m+interested+in+your+POS+system.+Please+share+more+details.&type=phone_number&app_absent=0';
const VIDEO_URL = 'https://www.youtube.com/watch?v=P3s7kDgc3Wg';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    setMatches(m.matches);
    const handler = (e) => setMatches(e.matches);
    m.addEventListener('change', handler);
    return () => m.removeEventListener('change', handler);
  }, [query]);
  return matches;
}

// Compact action bar shown only on mobile/tablet for the home page so the
// key CTAs (incl. a new Pricing link) are always easy to reach without the
// nav. Desktop keeps the static hero buttons.
export default function HomeMobileActions() {
  const isMobileTablet = useMediaQuery('(max-width: 1024px)');

  useEffect(() => {
    document.body.classList.add('home-page');
    return () => document.body.classList.remove('home-page');
  }, []);

  useEffect(() => {
    document.body.classList.toggle('home-actions-open', isMobileTablet);
    return () => document.body.classList.remove('home-actions-open');
  }, [isMobileTablet]);

  if (!isMobileTablet) return null;

  return (
    <nav className="home-actions-bar" aria-label="Quick actions">
      <a className="ha-btn ha-primary" href="/pricing">
        Pricing
      </a>
      <a className="ha-btn ha-primary" href="/get-started">
        Get Started
      </a>
      <a
        className="ha-btn ha-whatsapp"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-whatsapp" aria-hidden="true" />
        Chat
      </a>
      <a className="ha-btn ha-video playvideo" href={VIDEO_URL}>
        <i className="fa-solid fa-play" aria-hidden="true" />
        Watch
      </a>
    </nav>
  );
}
