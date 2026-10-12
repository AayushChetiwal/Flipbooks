import { useState } from "react";
import { SealButton } from "@/components/SealButton";

interface EndingScreenProps {
  message: string;
  buttonLabel: string;
  /** Where the "off" button sends the viewer, once the screen goes dark. */
  redirectUrl: string;
  /** YouTube video id to play (muted-to-the-eye, audio-only) for the "lights off" sound. */
  soundVideoId: string;
  /** How long to let the sound effect play before redirecting, in ms. */
  redirectDelayMs?: number;
}

/**
 * Closing kawaii interlude. Its button kills the lights (a "lights off"
 * sound clip + a full-screen fade to black) before sending the viewer
 * somewhere else.
 */
export function EndingScreen({
  message,
  buttonLabel,
  redirectUrl,
  soundVideoId,
  redirectDelayMs = 2200,
}: EndingScreenProps) {
  const [blackout, setBlackout] = useState(false);

  const handleClick = () => {
    setBlackout(true);
    window.setTimeout(() => {
      window.location.href = redirectUrl;
    }, redirectDelayMs);
  };

  return (
    <div className="bg-kawaii-scene fixed inset-0 z-50 flex items-center justify-center px-6">
      <div className="animate-drift-in relative w-full max-w-2xl">
        <div className="relative border border-blush bg-kawaii-cream px-8 py-14 text-center backdrop-blur-sm sm:px-14">
          <h2 className="text-kawaii animate-float-soft text-parchment-ink text-xl leading-relaxed sm:text-2xl">
            {message}
          </h2>

          <div className="mt-10">
            <SealButton kawaii onClick={handleClick}>
              {buttonLabel}
            </SealButton>
          </div>
        </div>
      </div>

      {blackout && (
        <iframe
          aria-hidden="true"
          title="lights-off-audio"
          className="pointer-events-none absolute h-px w-px opacity-0"
          src={`https://www.youtube.com/embed/${soundVideoId}?autoplay=1&playsinline=1`}
          allow="autoplay"
        />
      )}

      <div
        aria-hidden="true"
        className={
          "pointer-events-none fixed inset-0 z-[60] bg-black transition-opacity duration-700 " +
          (blackout ? "opacity-100" : "opacity-0")
        }
      />
    </div>
  );
}
