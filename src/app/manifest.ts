import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/portfolio";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#080a0f",
    theme_color: "#080a0f",
  };
}
