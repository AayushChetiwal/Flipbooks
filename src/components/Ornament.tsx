/**
 * Shared decorative primitives: corner filigree, rules, and dividers.
 * Pure presentation — no state, no data.
 */

export function CornerFiligree({
  soft = false,
  className = "",
}: {
  soft?: boolean;
  className?: string;
}) {
  const color = soft ? "text-blush" : "text-primary";
  const mark = soft ? "✥" : "✠";
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      {(
        [
          "left-2 top-2",
          "right-2 top-2",
          "left-2 bottom-2",
          "right-2 bottom-2",
        ] as const
      ).map((pos, i) => (
        <span
          key={pos}
          className={`animate-twinkle absolute ${pos} ${color} text-[0.7rem] opacity-70`}
          style={{ animationDelay: `${i * 0.7}s` }}
        >
          {mark}
        </span>
      ))}
      <span
        className={`absolute inset-3 border ${soft ? "border-blush/25" : "border-primary/25"}`}
      />
    </div>
  );
}

export function OrnateRule({
  soft = false,
  label,
}: {
  soft?: boolean;
  label?: string;
}) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={`h-px w-16 ${soft ? "bg-blush/40" : "bg-primary/45"} sm:w-24`}
      />
      <span
        className={`text-[0.7rem] tracking-[0.4em] ${soft ? "text-blush" : "text-primary"}`}
      >
        {label ?? (soft ? "✝ ♡ ⚔ ♡ ✝" : "✝ ⚔ ✝")}
      </span>
      <span
        className={`h-px w-16 ${soft ? "bg-blush/40" : "bg-primary/45"} sm:w-24`}
      />
    </div>
  );
}

export function Sigil({ soft = false }: { soft?: boolean }) {
  return (
    <span className="relative inline-flex h-16 w-16 items-center justify-center">
      <span
        className={`animate-slow-spin absolute inset-0 rotate-45 border ${
          soft ? "border-blush/45" : "border-primary/55"
        }`}
      />
      <span
        className={`absolute inset-2 rotate-12 border ${
          soft ? "border-blush/25" : "border-primary/30"
        }`}
      />
      <span
        className={`animate-flicker relative text-lg ${soft ? "text-blush" : "text-primary"}`}
      >
        {soft ? "♡" : "✞"}
      </span>
    </span>
  );
}
