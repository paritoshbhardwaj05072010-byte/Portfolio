"use client";

import { useState } from "react";
import { AmbientBackground } from "@/components/layout/ambient-background";
import { CursorGlow } from "@/components/layout/cursor-glow";
import { PageLoader } from "@/components/layout/page-loader";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CommandPalette } from "@/components/layout/command-palette";
import { KeyboardHints } from "@/components/layout/keyboard-hints";
import { CraftModeEasterEgg } from "@/components/easter-egg/craft-mode";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <>
      <PageLoader />
      <AmbientBackground />
      <CursorGlow />
      <Header onOpenCommand={() => setCommandOpen(true)} />
      <main className="relative z-10">{children}</main>
      <Footer />
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
      <KeyboardHints />
      <CraftModeEasterEgg />
    </>
  );
}
