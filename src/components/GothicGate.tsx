import { CornerFiligree, OrnateRule, Sigil } from "@/components/Ornament";
import { Embers } from "@/components/Embers";
import { Scatter } from "@/components/Scatter";
import { SealButton } from "@/components/SealButton";

interface GothicGateProps {
  onEnter: () => void;
}

export function GothicGate({ onEnter }: GothicGateProps) {
  return (
    <div className="bg-gothic-photo fixed inset-0 z-50 flex items-center justify-center px-6">
      <div className="vignette absolute inset-0" />
      <Scatter tone="gothic" count={20} />
      <Embers count={22} />


      <div className="animate-drift-in relative w-full max-w-2xl">
        <div className="relative border border-primary/50 bg-background/70 px-8 py-14 text-center backdrop-blur-sm sm:px-14">
          <CornerFiligree />

          <div className="relative flex justify-center">
            <Sigil />
          </div>

          <p className="text-carved mt-8 text-[0.6rem] text-foreground/65">
            an invitation
          </p>

          <h1 className="text-gothic candle-glow animate-flicker mt-5 text-3xl leading-tight text-foreground sm:text-5xl">
            † Would you like to go on a fun little trip :3 ? †
          </h1>

          <div className="mt-8">
            <OrnateRule label="⚔ ✞ ⚔" />
          </div>

          <div className="mt-10">
            <SealButton onClick={onEnter}>Enter</SealButton>
          </div>
        </div>
      </div>
    </div>
  );
}
