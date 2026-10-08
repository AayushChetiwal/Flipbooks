/**
 * Scattered decorative props layered behind the content.
 * Deterministic placement so SSR and client agree. Pure presentation.
 */

import batAsset from "@/assets/bat.png.asset.json";
import candelabraAsset from "@/assets/candelabra.png.asset.json";
import coffinAsset from "@/assets/coffin.png.asset.json";
import crossAsset from "@/assets/cross.png.asset.json";
import swordAsset from "@/assets/sword.png.asset.json";
import swordHeartAsset from "@/assets/sword-heart.png.asset.json";
import kStrawberryAsset from "@/assets/k-strawberry.png.asset.json";
import kBunnyAsset from "@/assets/k-bunny.png.asset.json";
import kChiikawaAsset from "@/assets/k-chiikawa.png.asset.json";
import kEmiliaAsset from "@/assets/k-emilia.png.asset.json";
import kSubaruAsset from "@/assets/k-subaru.png.asset.json";
import kBowAsset from "@/assets/k-bow.png.asset.json";

type Tone = "gothic" | "fusion" | "kawaii";

const GOTHIC = [
  candelabraAsset.url,
  crossAsset.url,
  swordAsset.url,
  swordHeartAsset.url,
  batAsset.url,
  coffinAsset.url,
];

const FUSION = [
  crossAsset.url,
  swordHeartAsset.url,
  candelabraAsset.url,
  swordAsset.url,
];

const SETS: Record<Tone, string[]> = {
  gothic: GOTHIC,
  fusion: FUSION,
  kawaii: [
    kStrawberryAsset.url,
    kChiikawaAsset.url,
    kEmiliaAsset.url,
    kBowAsset.url,
    kBunnyAsset.url,
    kSubaruAsset.url,
  ],
};

function rand(seed: number) {
  const h = Math.sin(seed * 91.7) * 24634.6345;
  return h - Math.floor(h);
}

export function Scatter({
  tone = "gothic",
  count = 8,
  className = "",
}: {
  tone?: Tone;
  count?: number;
  className?: string;
}) {
  const set = SETS[tone];
  // keep the props sparse — they frame the page, they don't fill it
  const total = Math.max(3, Math.round(count * (tone === "kawaii" ? 0.45 : 0.4)));

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: total }, (_, i) => {
        // keep props near the margins so they never crowd the text
        const side = i % 2 === 0;
        const left = side ? rand(i + 2) * 20 : 76 + rand(i + 2) * 18;
        const top = (i / total) * 82 + rand(i + 47) * 10;
        const size = 6 + rand(i + 71) * 5;
        const tilt = -18 + rand(i + 103) * 36;
        const delay = rand(i + 17) * 6;
        const src = set[i % set.length];
        const anim =
          i % 3 === 0
            ? "animate-flicker"
            : i % 3 === 1
              ? "animate-sway"
              : "animate-float-soft";
        return (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className={`absolute ${anim} select-none`}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}rem`,
              transform: `rotate(${tilt}deg)`,
              opacity: tone === "gothic" ? 0.34 : tone === "fusion" ? 0.3 : 0.85,
              filter:
                tone === "kawaii"
                  ? "drop-shadow(0 2px 6px oklch(0 0 0 / 0.2))"
                  : "grayscale(1) invert(1) contrast(1.4) drop-shadow(0 0 20px oklch(0.52 0.22 27 / 0.5))",
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
