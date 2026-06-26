type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`mb-14 max-w-2xl ${alignClass}`}>
      <p className="mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-accent">
        {label}
      </p>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted leading-relaxed">{description}</p>
      )}
      <div
        className={`mt-6 h-px w-16 bg-gradient-to-r from-accent to-transparent ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
