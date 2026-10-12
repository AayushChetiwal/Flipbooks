import { useState } from "react";
import { SealButton } from "@/components/SealButton";

interface EndingScreenProps {
  message: string;
  buttonLabel: string;
  /** Where the "off" button sends the viewer, once the screen goes dark. */
  redirectUrl: string;
}

/** Synthesized "switch flipped" click — a short descending tone, no audio file needed. */
function playLightsOff() {
  try {
    const AudioCtxCtor =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioCtxCtor) return;
    const ctx = new AudioCtxCtor();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "square";
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.14);
    gain.gain.setValueAtTime(0.4, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.22);
  } catch {
    // Sound is a nice-to-have, never block the redirect on it.
  }
}

/**
 * Closing kawaii interlude. Its button kills the lights (synthesized click +
 * a full-screen fade to black) before sending the viewer somewhere else.
 */
export function EndingScreen({
  message,
  buttonLabel,
  redirectUrl,
}: EndingScreenProps) {
  const [blackout, setBlackout] = useState(false);

  const handleClick = () => {
    playLightsOff();
    setBlackout(true);
    window.setTimeout(() => {
      window.location.href = redirectUrl;
    }, 900);
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
