import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type MetadataInput = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
};

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = "/images/firnadiq-logo-dark.jpg"
}: MetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1600,
          height: 900,
          alt: `${siteConfig.name} logo`
        }
      ],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [image]
    }
  };
}
