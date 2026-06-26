import {
  education,
  publications,
  achievements,
} from "@/data/portfolio";
import Reveal, { StaggerContainer, StaggerItem } from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export default function Education() {
  return (
    <section id="education" className="relative py-28 px-6 bg-surface/50">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            label="Education & Recognition"
            title="Academic foundation and industry leadership"
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Reveal>
              <h3 className="text-sm font-semibold tracking-widest uppercase text-accent mb-6">
                Education
              </h3>
            </Reveal>
            <StaggerContainer className="space-y-4" stagger={0.1}>
              {education.map((item) => (
                <StaggerItem key={item.degree}>
                  <div className="rounded-xl border border-border bg-surface-elevated p-6 transition-all hover:border-accent/20">
                    <h4 className="font-semibold text-foreground">{item.degree}</h4>
                    <p className="mt-1 text-sm text-accent">{item.institution}</p>
                    <p className="text-sm text-muted">
                      {item.location} · {item.period}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <Reveal delay={0.2} className="mt-10">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-accent mb-6">
                Publications
              </h3>
              {publications.map((pub) => (
                <div
                  key={pub.title}
                  className="rounded-xl border border-border bg-surface-elevated p-6"
                >
                  <h4 className="font-medium text-foreground leading-snug">
                    {pub.title}
                  </h4>
                  <p className="mt-2 text-sm text-muted">{pub.venue}</p>
                  <p className="text-xs text-muted mt-1">{pub.year}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <div>
            <Reveal>
              <h3 className="text-sm font-semibold tracking-widest uppercase text-accent mb-6">
                Achievements & Leadership
              </h3>
            </Reveal>
            <StaggerContainer className="space-y-4" stagger={0.1}>
              {achievements.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="rounded-xl border border-border bg-surface-elevated p-6 transition-all hover:border-accent/20">
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
