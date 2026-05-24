import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className,
  narrow = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-section scroll-mt-24",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto px-gutter",
          narrow ? "max-w-prose" : "max-w-content"
        )}
      >
        {children}
      </div>
    </section>
  );
}
