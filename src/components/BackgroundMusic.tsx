import { useEffect, useRef } from "react";

interface BackgroundMusicProps {
  /** YouTube video id to loop in the background, or null for silence. */
  videoId: string | null;
  /** Crossfade duration in ms. */
  fadeMs?: number;
}

type YTPlayer = {
  loadVideoById: (id: string) => void;
  setVolume: (v: number) => void;
  playVideo: () => void;
  pauseVideo: () => void;
  destroy: () => void;
};

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

function loadApi(): Promise<any> {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  return new Promise((resolve) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve(window.YT);
    };
    if (!document.getElementById("yt-iframe-api")) {
      const s = document.createElement("script");
      s.id = "yt-iframe-api";
      s.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(s);
    }
  });
}

/**
 * Hidden YouTube player used purely as background audio.
 * Changing `videoId` fades the current track out and the new one in.
 */
export function BackgroundMusic({
  videoId,
  fadeMs = 2200,
}: BackgroundMusicProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const rafRef = useRef<number | null>(null);
  const currentRef = useRef<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const ramp = (from: number, to: number, done?: () => void) => {
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / fadeMs);
        playerRef.current?.setVolume(Math.round(from + (to - from) * t));
        if (t < 1) rafRef.current = requestAnimationFrame(step);
        else done?.();
      };
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(step);
    };

    const swapTo = (id: string) => {
      const p = playerRef.current;
      if (!p) return;
      p.loadVideoById(id);
      p.setVolume(0);
      p.playVideo();
      currentRef.current = id;
      ramp(0, 100);
    };

    (async () => {
      if (!videoId) {
        if (playerRef.current) ramp(100, 0, () => playerRef.current?.pauseVideo());
        return;
      }

      if (!playerRef.current) {
        const YT = await loadApi();
        if (cancelled || !hostRef.current) return;
        playerRef.current = new YT.Player(hostRef.current, {
          height: "1",
          width: "1",
          videoId,
          playerVars: {
            autoplay: 1,
            controls: 0,
            playsinline: 1,
            loop: 1,
            playlist: videoId,
            modestbranding: 1,
          },
          events: {
            onReady: (e: { target: YTPlayer }) => {
              currentRef.current = videoId;
              e.target.setVolume(0);
              e.target.playVideo();
              ramp(0, 100);
            },
            onStateChange: (e: { data: number; target: YTPlayer }) => {
              if (e.data === 0) e.target.playVideo();
            },
          },
        }) as YTPlayer;
        return;
      }

      if (currentRef.current === videoId) return;
      ramp(100, 0, () => !cancelled && swapTo(videoId));
    })();

    return () => {
      cancelled = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [videoId, fadeMs]);

  useEffect(
    () => () => {
      playerRef.current?.destroy();
      playerRef.current = null;
    },
    [],
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-0 left-0 h-px w-px overflow-hidden opacity-0"
    >
      <div ref={hostRef} />
    </div>
  );
}
