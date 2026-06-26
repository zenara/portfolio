import { experience } from "@/data/portfolio";
import Reveal, { StaggerContainer, StaggerItem } from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 bg-surface/50">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            label="Experience"
            title="A track record of delivery at scale"
            description="Leading frontend initiatives across enterprise platforms, from architecture to production releases."
          />
        </Reveal>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-border to-transparent hidden md:block" />

          <StaggerContainer className="space-y-10" stagger={0.12}>
            {experience.map((job) => (
              <StaggerItem key={`${job.company}-${job.period}`}>
                <article className="relative md:pl-12">
                  <div className="absolute left-0 top-6 hidden md:block h-3.5 w-3.5 rounded-full border-2 border-accent bg-background" />

                  <div className="group rounded-2xl border border-border bg-surface-elevated p-6 sm:p-8 transition-all duration-300 hover:border-accent/25 hover:shadow-[0_8px_40px_var(--card-shadow)]">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                          {job.role}
                        </h3>
                        <p className="mt-1 text-accent">{job.company}</p>
                        <p className="text-sm text-muted">{job.location}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                        <span className="text-sm font-medium text-foreground/80">
                          {job.period}
                        </span>
                        <span className="text-xs text-muted bg-background px-2.5 py-1 rounded-full border border-border">
                          {job.duration}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {job.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 text-sm text-muted leading-relaxed"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-secondary/80" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <ul className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <li
                          key={tag}
                          className="text-xs text-accent bg-accent/10 px-2.5 py-1 rounded-md border border-accent/10"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
