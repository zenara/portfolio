import { siteConfig } from "@/data/portfolio";
import { getSiteUrl } from "@/lib/site";

export default function JsonLd() {
  const siteUrl = getSiteUrl();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressCountry: siteConfig.location,
    },
    sameAs: [siteConfig.social.linkedin],
    description: siteConfig.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
