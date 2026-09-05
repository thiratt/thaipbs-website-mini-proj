const fallbackSiteUrl = "http://localhost:3000";

function normalizeSiteUrl(value?: string) {
	const candidate = value?.trim() || fallbackSiteUrl;
	const url =
		candidate.startsWith("http://") || candidate.startsWith("https://") ? candidate : `https://${candidate}`;

	return new URL(url);
}

export const siteUrl = normalizeSiteUrl(
	process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL,
);

export const siteConfig = {
	name: "Thai PBS Longform Article Project by New Gen",
	shortName: "แล้งเราไม่เท่ากัน",
	title: "แล้งเราไม่เท่ากัน: วิกฤตน้ำและความเหลื่อมล้ำ | Thai PBS New Gen",
	description:
		"สำรวจภัยแล้งไทย ตั้งแต่สาเหตุ ผลกระทบ ความเหลื่อมล้ำ อุณหภูมิ งบประมาณ ลุ่มน้ำอีสาน อาหาร ประเพณี และแนวทางฟื้นฟู ผ่านเรื่องเล่าและข้อมูล",
	locale: "th_TH",
	language: "th-TH",
	image: "/images/og-drought.jpg",
} as const;
