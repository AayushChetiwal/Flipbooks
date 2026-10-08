import { useCallback, useEffect, useState } from "react";
import { CornerFiligree, OrnateRule, Sigil } from "@/components/Ornament";
import { Embers } from "@/components/Embers";
import { Scatter } from "@/components/Scatter";

import { SealButton } from "@/components/SealButton";

export type Variant = "single" | "triple" | "kawaii";

export interface FlipEntry {
  date: string;
  title: string;
  body: string;
  image?: string;
  images?: (string | undefined)[];
  imageCaption?: string;
  imageCaptions?: (string | undefined)[];
}

export interface FlipCover {
  title: string;
  subtitle: string;
  image?: string | undefined;
}

export interface JumpscareConfig {
  /** Index into `entries` (0-based) where this should ambush the reader. */
  pageIndex: number;
  image: string;
  caption: string;
  /** YouTube video id to blast on arrival. */
  videoId: string;
  buttonLabel: string;
}

// Placeholder content only — replace the strings below with your own words.
export const entries: FlipEntry[] = [
  { date: "ABCD", title: "ABCD", body: "ABCD", imageCaption: "ABCD" },
  { date: "ABCD", title: "ABCD", body: "ABCD", imageCaption: "ABCD" },
  { date: "ABCD", title: "ABCD", body: "ABCD", imageCaption: "ABCD" },
  { date: "ABCD", title: "ABCD", body: "ABCD", imageCaption: "ABCD" },
  { date: "ABCD", title: "ABCD", body: "ABCD", imageCaption: "ABCD" },
];

// Second book — three images per page, each with its own text beside it.
export const entriesTwo: FlipEntry[] = Array.from({ length: 6 }, () => ({
  date: "ABCD",
  title: "ABCD",
  body: "ABCD",
  images: [undefined, undefined, undefined],
  imageCaptions: ["ABCD", "ABCD", "ABCD"],
}));

// Cover placeholders — edit these later.
export const cover: FlipCover = {
  title: "ABCD",
  subtitle: "ABCD",
  image: undefined,
};

export const coverTwo: FlipCover = {
  title: "ABCD",
  subtitle: "ABCD",
  image: undefined,
};

export const jumpscareTwo: JumpscareConfig = {
  pageIndex: 5,
  image: "/assets/book2/jumpscare.png",
  caption:
    "Madhzeepoour da munna dharampal yadav jumpscare 🥶🥶🥶🥶🥶🥶🥶🥶🥶1!!!!111!1!!!1",
  videoId: "FYZMrVmK9u8",
  buttonLabel: "sorry for the rude interruption les get back",
};

// Third book — fully kawaii.
export const entriesThree: FlipEntry[] = [
  {
    date: "ABCD",
    title: "ABCD",
    body: "ABCD",
    images: [
      "/assets/book3/img-01.png",
      "/assets/book3/img-02.png",
      "/assets/book3/img-03.png",
    ],
    imageCaptions: [undefined, undefined, undefined],
  },
  {
    date: "ABCD",
    title: "ABCD",
    body: "ABCD",
    images: [
      "/assets/book3/img-04.png",
      "/assets/book3/img-05.png",
      "/assets/book3/img-06.png",
    ],
    imageCaptions: [undefined, undefined, undefined],
  },
  {
    date: "ABCD",
    title: "ABCD",
    body: "ABCD",
    images: [
      "/assets/book3/img-07.png",
      "/assets/book3/img-08.png",
      "/assets/book3/img-09.png",
    ],
    imageCaptions: [undefined, undefined, undefined],
  },
  {
    date: "ABCD",
    title: "ABCD",
    body: "ABCD",
    images: [
      "/assets/book3/img-10.png",
      "/assets/book3/img-11.png",
      "/assets/book3/img-12.png",
    ],
    imageCaptions: [undefined, undefined, undefined],
  },
  {
    date: "ABCD",
    title: "ABCD",
    body: "ABCD",
    images: [
      "/assets/book3/img-13.webp",
      "/assets/book3/img-14.webp",
      "/assets/book3/img-15.jpg",
    ],
    imageCaptions: [undefined, undefined, undefined],
  },
  {
    date: "ABCD",
    title: "ABCD",
    body: "ABCD",
    images: [
      "/assets/book3/img-16.webp",
      "/assets/book3/img-17.webp",
      "/assets/book3/img-18.webp",
    ],
    imageCaptions: [undefined, undefined, undefined],
  },
  {
    date: "ABCD",
    title: "ABCD",
    body: "ABCD",
    images: [
      "/assets/book3/img-19.webp",
      "/assets/book3/img-20.jpg",
      "/assets/book3/img-21.jpg",
    ],
    imageCaptions: [undefined, undefined, undefined],
  },
  {
    date: "ABCD",
    title: "ABCD",
    body: "ABCD",
    images: [
      "/assets/book3/img-22.jpg",
      "/assets/book3/img-23.jpg",
      "/assets/book3/img-24.jpg",
    ],
    imageCaptions: [undefined, undefined, undefined],
  },
  {
    date: "ABCD",
    title: "ABCD",
    body: "ABCD",
    images: [
      "/assets/book3/img-25.jpg",
      "/assets/book3/img-26.jpg",
      "/assets/book3/img-27.jpg",
    ],
    imageCaptions: [undefined, undefined, undefined],
  },
  {
    date: "ABCD",
    title: "ABCD",
    body: "ABCD",
    images: [
      "/assets/book3/img-28.jpg",
      "/assets/book3/img-29.jpg",
      "/assets/book3/img-30.jpg",
    ],
    imageCaptions: [undefined, undefined, undefined],
  },
  {
    date: "ABCD",
    title: "ABCD",
    body: "ABCD",
    images: [
      "/assets/book3/img-31.jpg",
      "/assets/book3/img-32.jpg",
      "/assets/book3/img-33.jpg",
    ],
    imageCaptions: [undefined, undefined, undefined],
  },
  {
    date: "ABCD",
    title: "ABCD",
    body: "ABCD",
    images: [
      "/assets/book3/img-34.jpg",
      "/assets/book3/img-35.jpg",
      "/assets/book3/img-36.jpg",
    ],
    imageCaptions: [undefined, undefined, undefined],
  },
  {
    date: "ABCD",
    title: "ABCD",
    body: "ABCD",
    images: [
      "/assets/book3/img-37.jpg",
      "/assets/book3/img-38.jpg",
      "/assets/book3/img-39.jpg",
    ],
    imageCaptions: [undefined, undefined, undefined],
  },
  {
    date: "ABCD",
    title: "ABCD",
    body: "ABCD",
    images: [
      "/assets/book3/img-40.jpg",
      "/assets/book3/img-41.jpg",
      "/assets/book3/img-42.jpg",
    ],
    imageCaptions: [undefined, undefined, undefined],
  },
  {
    date: "ABCD",
    title: "ABCD",
    body: "ABCD",
    images: [
      "/assets/book3/img-43.jpg",
      "/assets/book3/img-44.png",
      "/assets/book3/img-45.jpg",
    ],
    imageCaptions: [undefined, undefined, undefined],
  },
  {
    date: "ABCD",
    title: "ABCD",
    body: "ABCD",
    images: ["/assets/book3/img-46.jpg", "/assets/book3/img-47.png", undefined],
    imageCaptions: [undefined, undefined, undefined],
  },
];

export const coverThree: FlipCover = {
  title: "ABCD",
  subtitle: "ABCD",
  image: undefined,
};

function PhotoFrame({
  src,
  caption,
  compact,
  tilt = 0,
  kawaii = false,
}: {
  src?: string | undefined;
  caption?: string | undefined;
  compact?: boolean;
  tilt?: number;
  kawaii?: boolean;
}) {
  return (
    <figure className="animate-drift-in group flex flex-col">
      <div
        className={
          "relative border border-parchment-ink/45 bg-parchment/25 p-1.5 shadow-[0_10px_24px_-14px_oklch(0_0_0/0.8)] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.04] " +
          (kawaii ? "rounded-3xl border-blush/70 bg-parchment/50 p-2" : "")
        }
        style={{ transform: `rotate(${tilt}deg)` }}
      >
        <span className="pointer-events-none absolute -left-1 -top-1 text-[0.6rem] text-parchment-ink/50">
          ✜
        </span>
        <span className="pointer-events-none absolute -bottom-1 -right-1 text-[0.6rem] text-parchment-ink/50">
          ✜
        </span>
        <div
          className={
            "flex aspect-4/3 items-center justify-center overflow-hidden border border-parchment-ink/25 " +
            (kawaii ? "rounded-[1.35rem]" : "")
          }
        >
          {src ? (
            <img
              src={src}
              alt={caption ?? ""}
              loading="lazy"
              className={
                "h-full w-full object-cover transition-[filter] duration-700 " +
                (kawaii
                  ? "[filter:saturate(1.1)]"
                  : "[filter:grayscale(1)_contrast(1.15)] group-hover:[filter:grayscale(0.35)_contrast(1.05)]")
              }
            />
          ) : (
            <span className="text-carved px-2 text-center text-[0.5rem] text-parchment-ink/50">
              photograph
            </span>
          )}
        </div>
      </div>
      {caption ? (
        <figcaption
          className={
            "mt-2 text-center italic text-parchment-ink/65 " +
            (compact ? "text-[0.6rem]" : "text-xs")
          }
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function JumpscareOverlay({
  config,
  onDismiss,
}: {
  config: JumpscareConfig;
  onDismiss: () => void;
}) {
  return (
    <div className="animate-jumpscare-in absolute inset-0 z-30 flex flex-col items-center justify-between overflow-hidden bg-black p-4 text-center">
      <iframe
        aria-hidden="true"
        title="jumpscare-audio"
        className="pointer-events-none absolute h-px w-px opacity-0"
        src={`https://www.youtube.com/embed/${config.videoId}?autoplay=1&playsinline=1`}
        allow="autoplay"
      />
      <img
        src={config.image}
        alt="jumpscare"
        className="animate-jumpscare-shake mt-2 max-h-[70%] w-full flex-1 rounded-md object-contain"
      />
      <p className="mt-3 text-[0.85rem] font-bold leading-snug text-white">
        {config.caption}
      </p>
      <button
        type="button"
        onClick={onDismiss}
        className="mt-4 rounded-full border border-white/70 bg-white/10 px-4 py-2 text-[0.7rem] text-white transition hover:bg-white/20"
      >
        {config.buttonLabel}
      </button>
    </div>
  );
}

const KAWAII_PAPERS = ["bg-kawaii-paper-1", "bg-kawaii-paper-2"];
const SANRIO_PAPERS = [
  "bg-sanrio-paper-1",
  "bg-sanrio-paper-2",
  "bg-sanrio-paper-4",
];

// Deterministic pseudo-random pick so SSR and client agree.
function paperFor(index: number, kawaii = false) {
  const set = kawaii ? SANRIO_PAPERS : KAWAII_PAPERS;
  const h = Math.sin(index * 12.9898) * 43758.5453;
  const frac = h - Math.floor(h);
  return set[Math.floor(Math.abs(frac) * set.length)];
}

/** One image + its own text, side by side. Mirrors when `flip` is set. */
function PhotoRow({
  src,
  caption,
  date,
  text,
  flip,
  align,
  kawaii = false,
}: {
  src?: string | undefined;
  caption?: string | undefined;
  date: string;
  text: string;
  flip: boolean;
  align: "start" | "center" | "end";
  kawaii?: boolean;
}) {
  const justify =
    align === "center"
      ? "justify-center"
      : align === "end"
        ? "justify-end"
        : "justify-start";

  return (
    <div className={`flex ${justify}`}>
      <div
        className={
          "flex w-[92%] items-center gap-3 " + (flip ? "flex-row-reverse" : "")
        }
      >
        <div className="w-[46%] shrink-0">
          <PhotoFrame
            src={src}
            caption={caption}
            compact
            kawaii={kawaii}
            tilt={flip ? 1.4 : -1.4}
          />
        </div>
        <div className={"flex-1 " + (flip ? "text-right" : "text-left")}>
          <p
            className={
              "text-[0.5rem] text-parchment-ink/60 " +
              (kawaii ? "text-kawaii" : "text-carved")
            }
          >
            {date}
          </p>
          <p
            className={
              "mt-1 text-[0.8rem] leading-6 text-parchment-ink/90 " +
              (kawaii ? "text-kawaii" : "")
            }
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function Page({
  entry,
  index,
  variant,
}: {
  entry: FlipEntry | undefined;
  index: number;
  variant: Variant;
}) {
  const triple = variant !== "single";
  const kawaii = variant === "kawaii";
  const paper = triple ? paperFor(index, kawaii) : "bg-old-paper";

  if (!entry) {
    return (
      <div
        className={`${paper} relative flex min-h-[30rem] items-center justify-center p-8 ${kawaii ? "rounded-[2rem]" : ""}`}
      >
        <span className="text-carved animate-twinkle text-[0.55rem] text-parchment-ink/35">
          ✝
        </span>
      </div>
    );
  }

  const captions = entry.imageCaptions ?? [];
  const images = entry.images ?? [];
  // Alternate the arrangement page to page: lefts become rights.
  const flip = index % 2 === 1;

  return (
    <div
      className={`${paper} animate-page-turn-in relative flex min-h-[30rem] flex-col p-4 sm:p-7 ${kawaii ? "rounded-[2rem]" : ""}`}
    >
      <span
        className={
          "pointer-events-none absolute inset-2 border border-parchment-ink/15 " +
          (kawaii ? "rounded-[1.6rem] border-blush/60 border-2 border-dashed" : "")
        }
      />

      {kawaii ? null : (
        <header className="relative">
          <h3 className="text-parchment-ink text-gothic text-2xl sm:text-3xl">
            {entry.title}
          </h3>
          <p className="mt-1 text-[0.55rem] text-parchment-ink/60 text-carved">
            {entry.date}
          </p>
          <p className="mt-2 text-[0.75rem] text-primary">
            {triple ? (
              <>
                ✝ <span className="text-blush animate-twinkle inline-block">♡</span> ⚔
              </>
            ) : (
              <>✝ ⚔ ✝</>
            )}
          </p>
        </header>
      )}

      {triple ? (
        kawaii ? (
          <div className="relative mt-4 flex flex-1 flex-col items-center justify-center gap-6">
            <div
              className="animate-float-soft w-[72%]"
              style={{ alignSelf: flip ? "flex-end" : "flex-start" }}
            >
              <PhotoFrame src={images[0]} kawaii tilt={flip ? 2 : -2} />
            </div>
            <div className="w-[78%]">
              <PhotoFrame src={images[1]} kawaii tilt={1.2} />
            </div>
            <div
              className="animate-float-soft w-[72%]"
              style={{ alignSelf: flip ? "flex-start" : "flex-end" }}
            >
              <PhotoFrame src={images[2]} kawaii tilt={flip ? -2 : 2} />
            </div>
          </div>
        ) : (
          <div className="relative mt-4 flex flex-1 flex-col justify-between gap-4">
            <PhotoRow
              src={images[0]}
              caption={captions[0]}
              date={entry.date}
              text={entry.body}
              flip={flip}
              align={flip ? "end" : "start"}
              kawaii={kawaii}
            />
            <div className="animate-float-soft">
              <PhotoRow
                src={images[1]}
                caption={captions[1]}
                date={entry.date}
                text={entry.body}
                flip={!flip}
                align={flip ? "start" : "end"}
                kawaii={kawaii}
              />
            </div>
            <PhotoRow
              src={images[2]}
              caption={captions[2]}
              date={entry.date}
              text={entry.body}
              flip={flip}
              align={flip ? "end" : "start"}
              kawaii={kawaii}
            />
          </div>
        )
      ) : (
        <div className="relative mt-4">
          <PhotoFrame src={entry.image} caption={entry.imageCaption} />
          <p className="mt-5 text-[0.9rem] leading-7 text-parchment-ink/90">
            {entry.body}
          </p>
        </div>
      )}

      {kawaii ? null : (
        <span
          className={
            "mt-auto pt-5 text-[0.65rem] text-parchment-ink/50 " +
            (flip ? "text-left" : "text-right")
          }
        >
          {triple ? <span className="text-kawaii">♡ </span> : null}
          {index + 1}
        </span>
      )}
    </div>
  );
}

function Cover({
  data,
  soft = false,
  kawaii = false,
}: {
  data: FlipCover;
  soft?: boolean;
  kawaii?: boolean;
}) {
  return (
    <div
      className={
        "animate-drift-in relative flex min-h-[30rem] flex-col items-center justify-center border p-10 text-center " +
        (kawaii
          ? "rounded-[2.5rem] border-2 border-blush bg-kawaii-cream "
          : soft
            ? "border-blush/40 bg-plum-black "
            : "border-primary/60 bg-background ")
      }
    >
      <CornerFiligree soft={soft} />
      <Sigil soft={soft} />

      <div
        className={
          "mt-8 flex aspect-4/3 w-56 items-center justify-center border " +
        (kawaii
          ? "rounded-[1.75rem] border-2 border-blush/80 "
          : "border-foreground/40 ") +
        " transition-transform duration-700 hover:scale-[1.05] hover:rotate-1 " +
          (soft ? "animate-float-soft" : "")
        }
      >
        {data.image ? (
          <img
            src={data.image}
            alt={data.title}
            className={
              "h-full w-full object-cover " +
              (kawaii ? "" : "[filter:grayscale(1)]")
            }
          />
        ) : (
          <span
            className={
              "text-[0.55rem] " +
              (kawaii
                ? "text-kawaii text-parchment-ink/50"
                : "text-carved text-foreground/45")
            }
          >
            cover image
          </span>
        )}
      </div>

      <h3
        className={
          "mt-8 " +
          (kawaii
            ? "text-kawaii text-3xl text-parchment-ink"
            : "candle-glow text-gothic text-4xl text-foreground " +
              (soft ? "text-3xl" : ""))
        }
      >
        {data.title}
      </h3>
      <p
        className={
          "mt-4 text-[0.6rem] " +
          (kawaii
            ? "text-kawaii tracking-widest text-parchment-ink/70"
            : "text-carved text-foreground/60")
        }
      >
        {data.subtitle}
      </p>

      <div className="mt-8">
        <OrnateRule soft={soft} />
      </div>
    </div>
  );
}

interface FlipbookProps {
  entries?: FlipEntry[];
  cover?: FlipCover;
  variant?: Variant;
  eyebrow?: string;
  heading?: string;
  onFinish?: () => void;
  jumpscare?: JumpscareConfig;
  onJumpscareChange?: (active: boolean) => void;
}

export function Flipbook({
  entries: pages = entries,
  cover: coverData = cover,
  variant = "single",
  eyebrow = "part one",
  heading = "⚔ Our Journey ⚔",
  onFinish,
  jumpscare,
  onJumpscareChange,
}: FlipbookProps) {
  const kawaii = variant === "kawaii";
  const soft = variant !== "single";
  // spread 0 = cover, spread n = pages[(n-1)*2], pages[(n-1)*2 + 1]
  const spreadCount = 1 + Math.ceil(pages.length / 2);
  const [spread, setSpread] = useState(0);
  const [turn, setTurn] = useState<"none" | "next" | "prev">("none");
  const [jumpscareDismissed, setJumpscareDismissed] = useState(false);
  const jumpscareSpread = jumpscare
    ? Math.floor(jumpscare.pageIndex / 2) + 1
    : -1;
  const jumpscareShowing =
    !!jumpscare && !jumpscareDismissed && spread === jumpscareSpread;

  useEffect(() => {
    onJumpscareChange?.(jumpscareShowing);
  }, [jumpscareShowing, onJumpscareChange]);

  const atEnd = spread === spreadCount - 1;
  const jumpscareIsFinalPage =
    !!jumpscare && jumpscare.pageIndex === pages.length - 1;

  const handleJumpscareDismiss = useCallback(() => {
    setJumpscareDismissed(true);
    if (jumpscareIsFinalPage) {
      onFinish?.();
    }
  }, [jumpscareIsFinalPage, onFinish]);

  const go = useCallback(
    (dir: "next" | "prev") => {
      setTurn((busy) => {
        if (busy !== "none") return busy;
        if (jumpscareShowing) return busy;
        if (dir === "next" && spread === spreadCount - 1) {
          onFinish?.();
          return busy;
        }
        const target = dir === "next" ? spread + 1 : spread - 1;
        if (target < 0 || target > spreadCount - 1) return busy;
        window.setTimeout(() => {
          setSpread(target);
          setTurn("none");
        }, 520);
        return dir;
      });
    },
    [spread, spreadCount, onFinish, jumpscareShowing],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go("next");
      if (e.key === "ArrowLeft") go("prev");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const left = spread > 0 ? (spread - 1) * 2 : -1;

  return (
    <section
      className={
        "relative min-h-screen px-4 py-24 " +
        (kawaii ? "bg-kawaii-photo" : soft ? "bg-fusion-photo" : "bg-gothic-photo")
      }
    >
      {kawaii ? (
        <div className="absolute inset-0 bg-kawaii-cream/45" />
      ) : (
        <div className={"absolute inset-0 " + (soft ? "vignette opacity-80" : "vignette")} />
      )}
      <Scatter
        tone={kawaii ? "kawaii" : soft ? "fusion" : "gothic"}
        count={kawaii ? 14 : soft ? 16 : 20}
      />
      <Embers soft={soft} />


      <header className="animate-drift-in relative mx-auto max-w-3xl text-center">
        <OrnateRule soft={soft} label={eyebrow} />
        <h2
          className={
            kawaii
              ? "text-kawaii animate-float-soft mt-5 text-4xl text-parchment-ink sm:text-5xl"
              : "candle-glow animate-flicker text-gothic mt-5 text-4xl text-foreground sm:text-5xl"
          }
        >
          {heading}
        </h2>
      </header>

      <div className="book-perspective relative mx-auto mt-14 max-w-5xl">
        {/* stacked page edges behind the book */}
        <span className="absolute -left-2 top-3 h-[calc(100%-1.5rem)] w-2 bg-parchment/30" />
        <span className="absolute -right-2 top-3 h-[calc(100%-1.5rem)] w-2 bg-parchment/30" />

        <div
          className={
            "preserve-3d relative border shadow-[0_40px_100px_-24px_oklch(0_0_0/0.95)] transition-all duration-500 " +
            (kawaii
              ? "rounded-[2.75rem] border-2 border-blush overflow-hidden "
              : "border-primary ") +
            (turn === "next"
              ? "animate-turn-next"
              : turn === "prev"
                ? "animate-turn-prev"
                : "")
          }
        >
          {/* ribbon bookmark */}
          <span className="pointer-events-none absolute -top-4 right-10 z-10 h-16 w-4 bg-primary/85 shadow-[0_6px_14px_-6px_oklch(0_0_0/0.9)] after:absolute after:bottom-[-0.5rem] after:h-0 after:w-full after:border-x-8 after:border-t-8 after:border-x-transparent after:border-t-primary/85 after:content-['']" />

          <div className="relative grid grid-cols-2">
            {spread === 0 ? (
              <>
                <Cover data={coverData} soft={soft} kawaii={kawaii} />
                <div
                  className={
                    "min-h-[30rem] border " +
                    (kawaii
                      ? "rounded-[2.5rem] border-2 border-blush bg-kawaii-cream"
                      : soft
                        ? "border-blush/40 bg-plum-black"
                        : "border-primary/60 bg-background")
                  }
                />
              </>
            ) : (
              <>
                <div className="relative border-r border-parchment-ink/30">
                  <Page entry={pages[left]} index={left} variant={variant} />
                  {jumpscare && jumpscare.pageIndex === left && jumpscareShowing ? (
                    <JumpscareOverlay
                      config={jumpscare}
                      onDismiss={handleJumpscareDismiss}
                    />
                  ) : null}
                </div>
                <div className="relative">
                  <Page
                    entry={pages[left + 1]}
                    index={left + 1}
                    variant={variant}
                  />
                  {jumpscare &&
                  jumpscare.pageIndex === left + 1 &&
                  jumpscareShowing ? (
                    <JumpscareOverlay
                      config={jumpscare}
                      onDismiss={handleJumpscareDismiss}
                    />
                  ) : null}
                </div>
                {/* centre gutter shadow */}
                <span className="book-gutter pointer-events-none absolute inset-y-0 left-1/2 w-16 -translate-x-1/2" />
              </>
            )}
          </div>
        </div>

        {/* progress rail */}
        <div className="relative mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: spreadCount }, (_, i) => (
            <button
              key={i}
              aria-label={`Go to spread ${i + 1}`}
              onClick={() => setSpread(i)}
              className={
                "h-2 w-2 rotate-45 border transition-all duration-300 " +
                (i === spread
                  ? soft
                    ? "scale-125 border-blush bg-blush"
                    : "scale-125 border-primary bg-primary"
                  : "border-foreground/40 hover:border-primary")
              }
            />
          ))}
        </div>

        <div className="relative mt-6 flex items-center justify-center gap-6">
          <SealButton
            soft={soft}
            kawaii={kawaii}
            onClick={() => go("prev")}
            disabled={spread === 0 || jumpscareShowing}
          >

            Back
          </SealButton>
          <span
            className={
              "text-[0.6rem] " +
              (kawaii
                ? "text-kawaii text-parchment-ink/80"
                : "text-carved text-foreground/70")
            }
          >
            {spread + 1} / {spreadCount}
          </span>
          <SealButton
            soft={soft}
            kawaii={kawaii}
            onClick={() => go("next")}
            disabled={(atEnd && !onFinish) || jumpscareShowing}
          >

            {atEnd ? "Close" : "Turn"}
          </SealButton>
        </div>
      </div>
    </section>
  );
}
