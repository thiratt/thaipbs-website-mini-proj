import type { MetadataRoute } from "next";
import { siteConfig, siteUrl } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: siteUrl.origin,
			changeFrequency: "monthly",
			priority: 1,
			images: [new URL(siteConfig.image, siteUrl).href],
		},
	];
}
