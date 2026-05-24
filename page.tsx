import { Hero } from "@/components/sections/hero";
import { Credibility } from "@/components/sections/credibility";
import { Projects } from "@/components/sections/projects";
import { Philosophy } from "@/components/sections/philosophy";
import { Capabilities } from "@/components/sections/capabilities";
import { Timeline } from "@/components/sections/timeline";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Credibility />
      <Projects />
      <Philosophy />
      <Capabilities />
      <Timeline />
      <Contact />
    </>
  );
}
