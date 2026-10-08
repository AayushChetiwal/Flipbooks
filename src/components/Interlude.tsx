import { CornerFiligree, OrnateRule, Sigil } from "@/components/Ornament";
import { Embers } from "@/components/Embers";
import { Scatter } from "@/components/Scatter";
import { SealButton } from "@/components/SealButton";


interface InterludeProps {
  onContinue: () => void;
  eyebrow?: string;
  message?: string;
  kawaii?: boolean;
}

export function Interlude({
  onContinue,
  eyebrow = "an intermission",
  message = "† well, that was quite a ride lmao wasnt it †",
  kawaii = false,
}: InterludeProps) {
  return (
    <div
      className={
        "fixed inset-0 z-50 flex items-center justify-center px-6 " +
        (kawaii ? "bg-kawaii-scene" : "bg-gothic-photo")
      }
    >
      {kawaii ? null : <div className="vignette absolute inset-0" />}
      <Scatter tone="fusion" count={18} />
      <Embers count={20} soft />


      <div className="animate-drift-in relative w-full max-w-2xl">
        <div
          className={
            "relative border px-8 py-14 text-center backdrop-blur-sm sm:px-14 " +
            (kawaii
              ? "border-blush bg-kawaii-cream"
              : "border-blush/45 bg-background/70")
          }
        >
          <CornerFiligree soft />

          <div className="relative flex justify-center">
            <Sigil soft />
          </div>

          <p
            className={
              "mt-8 text-[0.6rem] " +
              (kawaii
                ? "text-kawaii tracking-widest text-parchment-ink/70"
                : "text-carved text-foreground/65")
            }
          >
            {eyebrow}
          </p>

          <h2
            className={
              "mt-5 text-2xl leading-relaxed sm:text-3xl " +
              (kawaii
                ? "text-kawaii animate-float-soft text-parchment-ink"
                : "text-gothic candle-glow animate-flicker text-foreground sm:text-5xl")
            }
          >
            {message}
          </h2>

          <div className="mt-8">
            <OrnateRule soft />
          </div>

          <div className="mt-10">
            <SealButton soft kawaii={kawaii} onClick={onContinue}>
              Continue
            </SealButton>
          </div>
        </div>
      </div>
    </div>
  );
}
