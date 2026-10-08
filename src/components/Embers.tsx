/**
 * Ambient drifting motes. Deterministic positions so SSR and client match.
 */
const GLYPHS_DARK = ["✝", "⚔", "✞", "·", "✠"];
const GLYPHS_SOFT = ["♡", "✝", "✧", "·", "❀"];

function rand(seed: number) {
  const h = Math.sin(seed * 127.1) * 43758.5453;
  return h - Math.floor(h);
}

export function Embers({
  count = 18,
  soft = false,
}: {
  count?: number;
  soft?: boolean;
}) {
  const glyphs = soft ? GLYPHS_SOFT : GLYPHS_DARK;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }, (_, i) => {
        const left = rand(i + 1) * 100;
        const delay = rand(i + 31) * 14;
        const dur = 12 + rand(i + 57) * 14;
        const size = 0.5 + rand(i + 91) * 0.7;
        const glyph = glyphs[Math.floor(rand(i + 13) * glyphs.length)];
        return (
          <span
            key={i}
            className={`animate-rise absolute bottom-[-3rem] ${
              soft ? "text-blush/45" : "text-primary/35"
            }`}
            style={{
              left: `${left}%`,
              fontSize: `${size}rem`,
              animationDelay: `-${delay}s`,
              animationDuration: `${dur}s`,
            }}
          >
            {glyph}
          </span>
        );
      })}
    </div>
  );
}
