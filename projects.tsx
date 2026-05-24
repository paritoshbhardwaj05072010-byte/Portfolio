import { projects } from "@/lib/data/projects";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { FadeInView } from "@/components/motion/fade-in-view";
import { SectionLabel } from "@/components/motion/section-label";
import { SectionHeading } from "@/components/motion/section-heading";
import { ProjectCard } from "@/components/sections/project-card";

export function Projects() {
  return (
    <SectionWrapper id="work">
      <FadeInView>
        <SectionLabel>Selected work</SectionLabel>
        <SectionHeading
          className="mt-4"
          title="Systems built to last."
          description="Production-grade platforms spanning infrastructure, intelligence, and product surfaces. Each project reflects deliberate trade-offs and measurable outcomes."
        />
      </FadeInView>

      <div className="mt-16 space-y-12 md:mt-20 md:space-y-16">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
