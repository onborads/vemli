'use client';

import { useEffect, useState } from 'react';

export default function VideoModal({
  videoUrl = 'https://www.youtube.com/embed/P3s7kDgc3Wg',
  label = 'Watch In Action',
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => {
    const legacy = document.getElementById('vidos');
    if (!legacy) return;
    const onClick = (e) => {
      e.preventDefault();
      setOpen(true);
    };
    legacy.addEventListener('click', onClick);
    return () => legacy.removeEventListener('click', onClick);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-md bg-[#ff5b00] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e55200] focus:outline-none focus:ring-2 focus:ring-[#ff5b00] focus:ring-offset-2 sm:gap-2.5 sm:px-5 sm:py-3 sm:text-base md:px-6 md:py-3.5 md:text-lg"
      >
        <i aria-hidden="true" className="fa-solid fa-play text-sm sm:text-base"></i>
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/75 p-3 sm:p-5 md:p-6"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={label}
        >
          <div
            className="relative w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xl leading-none text-black shadow hover:bg-white sm:-top-12 sm:h-10 sm:w-10 sm:text-2xl"
            >
              &times;
            </button>
            <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%] shadow-lg">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={videoUrl}
                title={label}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
