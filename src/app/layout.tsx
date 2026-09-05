import type { Metadata } from "next";
import { Anuphan } from "next/font/google";
import { siteConfig, siteUrl } from "@/config/site";
import "@/styles/globals.css";

const anuphan = Anuphan({
	variable: "--font-anuphan",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: siteUrl,
	title: siteConfig.title,
	description: siteConfig.description,
	applicationName: siteConfig.name,
	authors: [{ name: "New Gen Team" }],
	creator: "New Gen Team",
	publisher: "Thai PBS",
	category: "สารคดีเชิงข้อมูล",
	keywords: [
		"ภัยแล้ง",
		"ภัยแล้งประเทศไทย",
		"ความเหลื่อมล้ำ",
		"วิกฤตน้ำ",
		"ลุ่มน้ำอีสาน",
		"การจัดการน้ำ",
		"การเปลี่ยนแปลงสภาพภูมิอากาศ",
		"Thai PBS",
	],
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "article",
		locale: siteConfig.locale,
		url: "/",
		siteName: siteConfig.name,
		title: siteConfig.title,
		description: siteConfig.description,
		images: [
			{
				url: siteConfig.image,
				width: 1200,
				height: 630,
				alt: "ผืนดินแตกระแหงและปลาที่ได้รับผลกระทบจากภัยแล้ง",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.title,
		description: siteConfig.description,
		images: [siteConfig.image],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	formatDetection: {
		telephone: false,
	},
};

const structuredData = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebSite",
			"@id": `${siteUrl.origin}/#website`,
			url: siteUrl.origin,
			name: siteConfig.name,
			inLanguage: siteConfig.language,
		},
		{
			"@type": "Article",
			"@id": `${siteUrl.origin}/#article`,
			headline: siteConfig.shortName,
			description: siteConfig.description,
			inLanguage: siteConfig.language,
			isAccessibleForFree: true,
			mainEntityOfPage: {
				"@type": "WebPage",
				"@id": siteUrl.origin,
			},
			image: new URL(siteConfig.image, siteUrl).href,
			author: {
				"@type": "Organization",
				name: "New Gen Team",
			},
			publisher: {
				"@type": "Organization",
				name: "Thai PBS",
				logo: {
					"@type": "ImageObject",
					url: new URL("/brand/thai-pbs-logo.png", siteUrl).href,
				},
			},
			about: [
				{ "@type": "Thing", name: "ภัยแล้ง" },
				{ "@type": "Thing", name: "ความเหลื่อมล้ำ" },
				{ "@type": "Thing", name: "การจัดการน้ำในประเทศไทย" },
			],
		},
	],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="th" className={`${anuphan.variable} antialiased`}>
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
					}}
				/>
				{children}
			</body>
		</html>
	);
}
