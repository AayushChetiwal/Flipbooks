import { useEffect, useState } from "react";
import heartAsset from "@/assets/heart.png.asset.json";
import chainAsset from "@/assets/chain.png.asset.json";
import envelopeAsset from "@/assets/envelope.png.asset.json";

const DOTS = "...";

/**
 * Final act: darkness, a typed "...", a chained pulsating heart that opens
 * a sealed envelope when clicked.
 */
export function Finale() {
  const [typed, setTyped] = useState("");
  const [showHeart, setShowHeart] = useState(false);
  const [openEnvelope, setOpenEnvelope] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(DOTS.slice(0, i));
      if (i >= DOTS.length) {
        window.clearInterval(id);
        window.setTimeout(() => setShowHeart(true), 1200);
      }
    }, 620);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="bg-void relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      <p className="text-rose-glow text-kawaii text-5xl tracking-[0.4em] select-none">
        {typed}
        <span className="animate-flicker">|</span>
      </p>

      {showHeart && (
        <div className="animate-drift-in relative mt-16 flex items-center justify-center">
          <img
            src={chainAsset.url}
            alt=""
            aria-hidden="true"
            className="animate-sway pointer-events-none absolute -top-10 -left-24 w-40 opacity-70 [filter:invert(1)_drop-shadow(0_0_14px_var(--rose-glow))]"
          />
          <img
            src={chainAsset.url}
            alt=""
            aria-hidden="true"
            className="animate-sway pointer-events-none absolute -right-24 -bottom-10 w-40 rotate-180 opacity-70 [filter:invert(1)_drop-shadow(0_0_14px_var(--rose-glow))]"
          />
          <img
            src={chainAsset.url}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-8 -left-20 w-32 -rotate-45 opacity-50 [filter:invert(1)]"
          />
          <img
            src={chainAsset.url}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -top-8 -right-20 w-32 rotate-[135deg] opacity-50 [filter:invert(1)]"
          />

          <button
            type="button"
            onClick={() => setOpenEnvelope(true)}
            aria-label="Open the letter"
            className="animate-heartbeat relative cursor-pointer"
          >
            <img
              src={heartAsset.url}
              alt="A heart"
              className="w-64 rounded-full [filter:drop-shadow(0_0_45px_var(--rose-glow))] sm:w-80"
            />
          </button>
        </div>
      )}

      {openEnvelope && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="animate-scale-in relative flex flex-col items-center">
            <img
              src={envelopeAsset.url}
              alt="A sealed envelope"
              className="animate-float-soft w-[22rem] max-w-[85vw] [filter:drop-shadow(0_0_40px_var(--rose-glow))]"
            />
            <button
              type="button"
              onClick={() => setOpenEnvelope(false)}
              className="text-kawaii text-rose-glow mt-8 text-sm tracking-[0.3em] uppercase"
            >
              close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
