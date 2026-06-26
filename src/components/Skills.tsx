import { skills } from "@/data/portfolio";
import Reveal, { StaggerContainer, StaggerItem } from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            label="Expertise"
            title="Technical depth across the stack"
            description="From component architecture to CI/CD — a full spectrum of senior engineering capabilities."
          />
        </Reveal>

        <StaggerContainer className="grid sm:grid-cols-2 gap-5" stagger={0.08}>
          {skills.map((group) => (
            <StaggerItem key={group.category}>
              <div className="group h-full rounded-2xl border border-border bg-surface p-6 sm:p-7 transition-all duration-300 hover:border-accent/20 hover:bg-surface-elevated">
                <h3 className="font-semibold text-foreground mb-5 flex items-center gap-3">
                  <span className="h-px flex-1 bg-border group-hover:bg-accent/30 transition-colors" />
                  <span className="shrink-0 text-sm tracking-wide">{group.category}</span>
                  <span className="h-px flex-1 bg-border group-hover:bg-accent/30 transition-colors" />
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted bg-background/60 px-3 py-1.5 rounded-lg border border-border-subtle transition-colors hover:border-accent/20 hover:text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
