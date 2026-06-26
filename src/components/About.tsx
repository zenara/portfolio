import { aboutParagraphs } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            label="About"
            title="Engineering leadership with depth and discipline"
            description="A senior engineer focused on scalable architecture, team mentorship, and delivering production-grade products."
          />
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <Reveal direction="left">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-2xl border border-border bg-surface p-8">
                <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                  Core Focus
                </p>
                <ul className="space-y-4">
                  {[
                    "Scalable frontend & mobile architecture",
                    "Nx monorepo & modular design systems",
                    "TDD, CI/CD & engineering excellence",
                    "Cross-functional leadership & mentoring",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            {aboutParagraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-lg text-muted leading-relaxed">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
