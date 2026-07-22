import type { APIRoute } from "astro";
import { getSiteUrl } from "@/lib/site";

export const GET: APIRoute = () => {
  const siteUrl = getSiteUrl();

  const body = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
