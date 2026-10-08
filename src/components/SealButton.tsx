import type { ButtonHTMLAttributes, ReactNode } from "react";

interface SealButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  soft?: boolean;
  /** Light background variant: dark ink text so the label stays readable. */
  kawaii?: boolean;
}

/** Wax-seal styled action button with layered borders and a sweep highlight. */
export function SealButton({
  children,
  soft = false,
  kawaii = false,
  className = "",
  ...rest
}: SealButtonProps) {
  return (
    <button
      {...rest}
      className={
        "group relative inline-flex items-center gap-3 border px-10 py-4 " +
        "text-carved text-[0.62rem] transition-all duration-500 " +
        "hover:-translate-y-0.5 hover:tracking-[0.34em] disabled:opacity-25 " +
        (kawaii
          ? "border-parchment-ink/50 bg-background/0 text-parchment-ink hover:bg-blush/30 "
          : soft
            ? "border-blush/70 text-foreground hover:bg-blush/20 "
            : "border-primary text-foreground hover:bg-primary/20 ") +
        className
      }
    >
      <span
        className={
          "absolute inset-[3px] border opacity-45 transition-opacity duration-500 group-hover:opacity-90 " +
          (kawaii
            ? "border-parchment-ink/35"
            : soft
              ? "border-blush/50"
              : "border-primary/60")
        }
      />
      <span className="sweep absolute inset-0 overflow-hidden" />
      <span
        className={
          kawaii ? "text-parchment-ink" : soft ? "text-blush" : "text-primary"
        }
      >
        {soft || kawaii ? "♡" : "✝"}
      </span>
      <span className="relative">{children}</span>
      <span
        className={
          kawaii ? "text-parchment-ink" : soft ? "text-blush" : "text-primary"
        }
      >
        {soft || kawaii ? "♡" : "✝"}
      </span>
    </button>
  );
}

