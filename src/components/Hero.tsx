"use client";

import { motion } from "framer-motion";
import {
  siteConfig,
  stats,
  techStack,
} from "@/data/portfolio";
import { StaggerContainer, StaggerItem } from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-24 pb-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent-secondary/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-accent backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              {siteConfig.role}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.08]"
            >
              {siteConfig.name}
              <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl font-normal text-muted">
                Jayathilake
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-6 text-lg sm:text-xl text-muted leading-relaxed max-w-xl"
            >
              {siteConfig.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="rounded-md border border-border bg-surface-elevated px-3 py-1.5 text-xs font-medium text-foreground/80"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#experience"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-[0_0_30px_rgba(201,169,98,0.2)]"
              >
                View experience
              </a>
              <a
                href={siteConfig.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface/50 px-7 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:bg-surface-elevated"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </motion.div>
          </div>

          <StaggerContainer className="grid grid-cols-2 gap-4" stagger={0.08}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="group rounded-xl border border-border bg-surface/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-surface-elevated">
                  <p className="text-3xl sm:text-4xl font-semibold text-accent tabular-nums">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted leading-snug">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
