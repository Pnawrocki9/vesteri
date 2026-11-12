'use client';

import { useEffect, useRef, useState } from 'react';

export type ShowreelLabels = {
  play: string;
  pause: string;
  replay: string;
  soundOn: string;
  soundOff: string;
  seek: string;
  fullscreen: string;
};

function formatTime(seconds: number) {
  const whole = Math.max(0, Math.floor(seconds));
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, '0')}`;
}

// The film's own captions sit along the bottom edge of the frame, so the
// whole 16:9 picture must stay visible and nothing may be laid over it while
// it plays: the controls live in a row under the picture. Browsers only allow
// unprompted playback while muted, so the film starts silent and sound is
// opt-in. Styles live in marketing.css under .showreel.
export default function ShowreelVideo({
  id,
  src,
  poster,
  labels,
}: {
  id?: string;
  src: string;
  poster: string;
  labels: ShowreelLabels;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  // Set only by the viewer's own pause, so scrolling back never restarts a
  // film they chose to stop.
  const userPaused = useRef(false);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => {
      setPlaying(true);
      setEnded(false);
    };
    const onPause = () => setPlaying(false);
    const onEnded = () => {
      setPlaying(false);
      setEnded(true);
    };
    const onTime = () => setTime(video.currentTime);
    const onDuration = () =>
      setDuration(Number.isFinite(video.duration) ? video.duration : 0);

    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('ended', onEnded);
    video.addEventListener('timeupdate', onTime);
    video.addEventListener('loadedmetadata', onDuration);
    video.addEventListener('durationchange', onDuration);
    onDuration();

    let observer: IntersectionObserver | undefined;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) {
            video.pause();
            return;
          }
          if (userPaused.current) return;
          // A silent film is being watched in passing, so it always opens
          // from the first frame; with sound on the viewer is following it
          // and gets it back where they left off.
          if (video.muted && video.currentTime > 0) video.currentTime = 0;
          // play() rejects when the browser blocks it; the poster and the
          // play button simply stay up.
          video.play().catch(() => {});
        },
        { threshold: 0.5 },
      );
      observer.observe(video);
    }

    return () => {
      observer?.disconnect();
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('ended', onEnded);
      video.removeEventListener('timeupdate', onTime);
      video.removeEventListener('loadedmetadata', onDuration);
      video.removeEventListener('durationchange', onDuration);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      video.play().catch(() => {});
    } else {
      userPaused.current = true;
      video.pause();
    }
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !video.muted;
    video.muted = next;
    setMuted(next);
    if (!next && video.paused) {
      userPaused.current = false;
      video.play().catch(() => {});
    }
  };

  const toggleFullscreen = () => {
    const root = rootRef.current;
    const video = videoRef.current as
      | (HTMLVideoElement & { webkitEnterFullscreen?: () => void })
      | null;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else if (root?.requestFullscreen) {
      root.requestFullscreen().catch(() => {});
    } else {
      // iPhone Safari can only take the video element itself full screen.
      video?.webkitEnterFullscreen?.();
    }
  };

  const playLabel = ended ? labels.replay : playing ? labels.pause : labels.play;
  const progress = duration > 0 ? (time / duration) * 100 : 0;

  return (
    <div className="showreel" id={id} ref={rootRef}>
      <div className="showreel-stage">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted={muted}
          playsInline
          preload="metadata"
          onClick={togglePlay}
        />
        {!playing && (
          <button
            type="button"
            className="showreel-start"
            onClick={togglePlay}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
              <path d="M7 4.5v15l12-7.5z" fill="currentColor" />
            </svg>
            {ended ? labels.replay : labels.play}
          </button>
        )}
      </div>
      <div className="showreel-controls">
        <button
          type="button"
          className="showreel-icon"
          aria-label={playLabel}
          onClick={togglePlay}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
            {playing ? (
              <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor" />
            ) : (
              <path d="M7 4.5v15l12-7.5z" fill="currentColor" />
            )}
          </svg>
        </button>
        <input
          type="range"
          className="showreel-seek"
          aria-label={labels.seek}
          aria-valuetext={`${formatTime(time)} / ${formatTime(duration)}`}
          min={0}
          max={duration || 1}
          step={0.1}
          value={Math.min(time, duration || 1)}
          style={{ '--progress': `${progress}%` } as React.CSSProperties}
          onChange={(event) => {
            const video = videoRef.current;
            const next = Number(event.target.value);
            if (video) video.currentTime = next;
            setTime(next);
          }}
        />
        <span className="showreel-time">
          {formatTime(time)} / {formatTime(duration)}
        </span>
        <button
          type="button"
          className="showreel-sound"
          aria-pressed={!muted}
          onClick={toggleSound}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16">
            <path d="M4 9.5v5h3.5L12 19V5L7.5 9.5z" fill="currentColor" />
            {muted ? (
              <path
                d="M15.5 9.5l5 5m0-5l-5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M15 9a4.2 4.2 0 010 6m2.6-8.6a7.8 7.8 0 010 11.2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
          {muted ? labels.soundOn : labels.soundOff}
        </button>
        <button
          type="button"
          className="showreel-icon"
          aria-label={labels.fullscreen}
          onClick={toggleFullscreen}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
            <path
              d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
