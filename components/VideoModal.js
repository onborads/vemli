'use client';

import { useEffect, useState } from 'react';

export default function VideoModal() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState('');

  useEffect(() => {
    const handler = (e) => {
      const target = e.target.closest('.playvideo');
      if (!target) return;
      e.preventDefault();
      const href = target.getAttribute('href') || '';
      const embed = href.replace('watch?v=', 'embed/');
      setSrc(embed);
      setOpen(true);
      document.body.style.overflow = 'hidden';
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const close = () => {
    setOpen(false);
    setSrc('');
    document.body.style.overflow = '';
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={close}
    >
      <div
        className="relative w-full max-w-4xl aspect-video bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute -top-10 right-0 text-white text-2xl font-bold focus:outline-none"
          aria-label="Close video"
        >
          &times;
        </button>
        {src && (
          <iframe
            src={src}
            title="Watch In Action"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        )}
      </div>
    </div>
  );
}
