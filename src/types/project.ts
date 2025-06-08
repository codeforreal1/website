import type { ImageMetadata } from "astro";

export type Project = {
  title: string;
  url: string;
  description?: string;
  heroImage?: ImageMetadata;
  starsUrl?: string;
  tags?: string[];
};
