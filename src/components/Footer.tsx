import { siteConfig } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
        <p className="text-sm text-muted">
          Senior Software Engineer · {siteConfig.location}
        </p>
      </div>
    </footer>
  );
}
