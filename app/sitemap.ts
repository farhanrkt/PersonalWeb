import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";
import { pieces } from "@/lib/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  });

  return [
    page("", 1),
    page("/work", 0.9),
    page("/research", 0.8),
    page("/writing", 0.7),
    page("/about", 0.7),
    ...projects.map((p) => page(`/work/${p.slug}`, 0.8)),
    ...pieces.map((p) => page(`/writing/${p.slug}`, 0.6)),
  ];
}
