import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { GothicGate } from "@/components/GothicGate";
import {
  Flipbook,
  entriesTwo,
  coverTwo,
  entriesThree,
  coverThree,
  jumpscareTwo,
} from "@/components/Flipbook";
import { Interlude } from "@/components/Interlude";
import { BackgroundMusic } from "@/components/BackgroundMusic";

const title = "A Little Trip — A Confession";
const description =
  "A four-part confession that begins in candlelit gothic dark and slowly turns soft and sweet.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Stage = "gate" | "bookTwo" | "interludeTwo" | "bookThree";

const GOTHIC_TRACK = "5Li93NPjT58";
const KAWAII_TRACK = "xhBJ74j1d5I";

function Index() {
  const [stage, setStage] = useState<Stage>("gate");
  const [jumpscareActive, setJumpscareActive] = useState(false);

  const track = jumpscareActive
    ? null
    : stage === "bookTwo"
      ? GOTHIC_TRACK
      : stage === "interludeTwo" || stage === "bookThree"
        ? KAWAII_TRACK
        : null;

  return (
    <main className="min-h-screen bg-background">
      <BackgroundMusic videoId={track} />

      {stage === "gate" && <GothicGate onEnter={() => setStage("bookTwo")} />}
      {stage === "bookTwo" && (
        <Flipbook
          entries={entriesTwo}
          cover={coverTwo}
          variant="triple"
          eyebrow="part one"
          heading="♡ ⚔ Our Firsts ⚔ ♡"
          onFinish={() => setStage("interludeTwo")}
          jumpscare={jumpscareTwo}
          onJumpscareChange={setJumpscareActive}
        />
      )}
      {stage === "interludeTwo" && (
        <Interlude
          kawaii
          eyebrow="a soft interruption"
          message="Whenever someone takes your name, this is all that pops up into my mind. A girl who harbours a vast ocean of culture and ideas."
          onContinue={() => setStage("bookThree")}
        />
      )}
      {stage === "bookThree" && (
        <Flipbook
          entries={entriesThree}
          cover={coverThree}
          variant="kawaii"
          eyebrow="part two"
          heading="♡ ⋆ You ⋆ ♡"
        />
      )}
    </main>
  );
}
