'use client';

import { useEffect, useRef, useState } from 'react';

// Full-bleed showreel for the agents page. The film starts by itself when
// scrolled at least half into view and pauses when it leaves — browsers only
// allow that while the video is muted, so sound is opt-in through the pill
// button. Viewers who ask the OS for reduced motion get a poster and the
// browser's own controls instead of autoplay. Styles live in marketing.css
// under .showreel.
export default function ShowreelVideo({
  src,
  poster,
  soundOnLabel,
  soundOffLabel,
}: {
  src: string;
  poster: string;
  soundOnLabel: string;
  soundOffLabel: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReducedMotion(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // play() rejects when the browser blocks it; nothing to do then,
          // the poster simply stays up.
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="showreel">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        controls={reducedMotion}
      />
      {!reducedMotion && (
        <button
          type="button"
          aria-pressed={!muted}
          className="showreel-sound"
          onClick={() => {
            const video = videoRef.current;
            setMuted((wasMuted) => {
              if (video && wasMuted) {
                // Unmuting counts as a user gesture, so make sure the film
                // actually runs when the sound comes on.
                video.play().catch(() => {});
              }
              return !wasMuted;
            });
          }}
        >
          {muted ? soundOnLabel : soundOffLabel}
        </button>
      )}
    </div>
  );
}
