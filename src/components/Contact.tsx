"use client";

import { siteConfig } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            label="Contact"
            title="Let's build something exceptional"
            description="Open to senior engineering roles, consulting, and meaningful collaborations."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-8 sm:p-12 text-center">
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group rounded-xl border border-border-subtle bg-surface-elevated p-6 transition-all hover:border-accent/30"
              >
                <svg
                  className="w-5 h-5 mx-auto mb-3 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-xs font-medium tracking-widest uppercase text-muted mb-1">
                  Email
                </p>
                <p className="text-sm text-foreground group-hover:text-accent transition-colors break-all">
                  {siteConfig.email}
                </p>
              </a>

              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="group rounded-xl border border-border-subtle bg-surface-elevated p-6 transition-all hover:border-accent/30"
              >
                <svg
                  className="w-5 h-5 mx-auto mb-3 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p className="text-xs font-medium tracking-widest uppercase text-muted mb-1">
                  Phone
                </p>
                <p className="text-sm text-foreground group-hover:text-accent transition-colors">
                  {siteConfig.phone}
                </p>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:bg-surface-elevated"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.128 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href={siteConfig.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-[0_0_30px_rgba(201,169,98,0.2)]"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>

            <p className="mt-8 text-sm text-muted">{siteConfig.location}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
