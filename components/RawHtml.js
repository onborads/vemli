'use client';

import { useRef, useLayoutEffect } from 'react';

export default function RawHtml({ html }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = html;
    }
  }, [html]);

  return <div ref={ref} className="static-page-raw-html" />;
}
