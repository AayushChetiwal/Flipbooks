/**
 * Shared decorative primitives: corner filigree, rules, and dividers.
 * Pure presentation — no state, no data.
 */

export function CornerFiligree({
  soft = false,
  kawaii = false,
  className = "",
}: {
  soft?: boolean;
  kawaii?: boolean;
  className?: string;
}) {
  const color = kawaii ? "text-blush" : "text-primary";
  const mark = kawaii ? "✥" : soft ? "♰" : "✠";
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
        className={`absolute inset-3 border ${kawaii ? "border-blush/25" : "border-primary/25"}`}
      />
    </div>
  );
}

export function OrnateRule({
  soft = false,
  kawaii = false,
  label,
}: {
  soft?: boolean;
  kawaii?: boolean;
  label?: string;
}) {
  const lineColor = kawaii ? "bg-blush/40" : "bg-primary/45";
  const textColor = kawaii ? "text-blush" : "text-primary";
  const defaultLabel = kawaii ? "♡" : soft ? "♰" : "✝ ⚔ ✝";
  return (
    <div className="flex items-center justify-center gap-3">
      <span className={`h-px w-16 ${lineColor} sm:w-24`} />
      <span className={`text-[0.7rem] tracking-[0.4em] ${textColor}`}>
        {label ?? defaultLabel}
      </span>
      <span className={`h-px w-16 ${lineColor} sm:w-24`} />
    </div>
  );
}

export function Sigil({
  soft = false,
  kawaii = false,
}: {
  soft?: boolean;
  kawaii?: boolean;
}) {
  return (
    <span className="relative inline-flex h-16 w-16 items-center justify-center">
      <span
        className={`animate-slow-spin absolute inset-0 rotate-45 border ${
          kawaii ? "border-blush/45" : "border-primary/55"
        }`}
      />
      <span
        className={`absolute inset-2 rotate-12 border ${
          kawaii ? "border-blush/25" : "border-primary/30"
        }`}
      />
      <span
        className={`animate-flicker relative text-lg ${kawaii ? "text-blush" : "text-primary"}`}
      >
        {kawaii ? "♡" : soft ? "♰" : "✞"}
      </span>
    </span>
  );
}
