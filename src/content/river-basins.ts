export const THAILAND_BASIN_REGIONS = [
	{ label: "ภาคเหนือ", color: "#60a5fa" },
	{ label: "ภาคกลาง", color: "#38bdf8" },
	{ label: "ภาคตะวันออก", color: "#22c55e" },
	{ label: "ภาคใต้", color: "#f59e0b" },
] as const;

export const RIVER_STORY_VIDEOS = [
	{
		title: "เรื่องราวจากสายน้ำ 01",
		src: "https://www.youtube.com/embed/-mDqtZeul2s",
		href: "https://youtu.be/-mDqtZeul2s?si=5YisYS2-14_tPO3V",
	},
	{
		title: "เรื่องราวจากสายน้ำ 02",
		src: "https://www.youtube.com/embed/OFkjTq93xFo",
		href: "https://youtu.be/OFkjTq93xFo?si=ssIGNERGqRZnKWDx",
	},
	{
		title: "เรื่องราวจากสายน้ำ 03",
		src: "https://www.youtube.com/embed/Eotc982Ngrw",
		href: "https://youtu.be/Eotc982Ngrw?si=PG0zHKE1p0BVwDkE",
	},
	{
		title: "เรื่องราวจากสายน้ำ 04",
		src: "https://www.youtube.com/embed/en7VNTsU-SY",
		href: "https://youtu.be/en7VNTsU-SY?si=0-MHoF-Cj1NcSEvc",
	},
	{
		title: "เรื่องราวจากสายน้ำ 05",
		src: "https://www.youtube.com/embed/7F_S_0nUfvo",
		href: "https://youtu.be/7F_S_0nUfvo?si=K0KtUgUnwkPnBwtf",
	},
	{
		title: "เรื่องราวจากสายน้ำ 06",
		src: "https://www.youtube.com/embed/dgzq9S2bVQ0",
		href: "https://youtu.be/dgzq9S2bVQ0?si=VAYEybK_y0RClAsd",
	},
] as const;

export const ISAN_BASINS = [
	{
		id: "mekong",
		label: "ลุ่มน้ำโขง",
		shortLabel: "โขง",
		accent: "#38bdf8",
		mapSrc: "/images/basins/mekong-basin.png",
		mapAlt: "แผนที่ลุ่มน้ำโขง",
		dek: "แม่น้ำสายหลักริมพรมแดน ที่เชื่อมชีวิต การเกษตร และการประมงของชุมชนจำนวนมาก",
		summary:
			"ลุ่มน้ำโขงเป็นแกนสำคัญของภาคอีสานตอนบน หลายพื้นที่พึ่งพาน้ำจากโขงทั้งเพื่ออุปโภคบริโภค การเกษตร และระบบนิเวศริมฝั่ง",
		provinces: ["หนองคาย", "บึงกาฬ", "นครพนม", "มุกดาหาร", "อุบลราชธานี"],
		issues: [
			"ระดับน้ำผันผวน ส่งผลต่อการใช้น้ำและการประมง",
			"ชุมชนริมโขงเผชิญความเสี่ยงจากความแห้งแล้งและตลิ่งเปลี่ยนสภาพ",
			"ความเปลี่ยนแปลงต้นน้ำส่งผลต่อปลายน้ำโดยตรง",
		],
		facts: [
			{ label: "บทบาท", value: "น้ำต้นทุน" },
			{ label: "ลักษณะพื้นที่", value: "ริมน้ำ-ชายฝั่ง" },
			{ label: "ผลกระทบเด่น", value: "น้ำผันผวน" },
		],
	},
	{
		id: "chi",
		label: "ลุ่มน้ำชี",
		shortLabel: "ชี",
		accent: "#8b5cf6",
		mapSrc: "/images/basins/chi-basin.png",
		mapAlt: "แผนที่ลุ่มน้ำชี",
		dek: "ลุ่มน้ำขนาดใหญ่ที่หล่อเลี้ยงพื้นที่เกษตรสำคัญของอีสานตอนกลาง",
		summary:
			"ลุ่มน้ำชีครอบคลุมพื้นที่เกษตรจำนวนมาก โดยเฉพาะนาข้าวและพื้นที่เพาะปลูกที่ต้องพึ่งน้ำตามฤดูกาลอย่างชัดเจน",
		provinces: ["ชัยภูมิ", "ขอนแก่น", "มหาสารคาม", "ร้อยเอ็ด", "ยโสธร"],
		issues: [
			"ฝนทิ้งช่วงกระทบการเพาะปลูกโดยตรง",
			"แหล่งเก็บน้ำขนาดกลางและเล็กมีความสำคัญสูง",
			"เมื่อปริมาณน้ำต้นฤดูไม่พอ ความเสี่ยงจะลามตลอดฤดูผลิต",
		],
		facts: [
			{ label: "บทบาท", value: "เกษตรกรรม" },
			{ label: "ลักษณะพื้นที่", value: "ที่ราบลุ่ม" },
			{ label: "ผลกระทบเด่น", value: "เสี่ยงฝนทิ้งช่วง" },
		],
	},
	{
		id: "mun",
		label: "ลุ่มน้ำมูล",
		shortLabel: "มูล",
		accent: "#f18717",
		mapSrc: "/images/basins/mun-basin.png",
		mapAlt: "แผนที่ลุ่มน้ำมูล",
		dek: "เครือข่ายน้ำขนาดใหญ่ของอีสานตอนล่าง ที่เชื่อมพื้นที่เกษตร เมือง และชุมชนเข้าด้วยกัน",
		summary:
			"ลุ่มน้ำมูลรองรับทั้งพื้นที่เกษตรและเมืองหลายแห่ง จึงสะท้อนความเหลื่อมล้ำในการเข้าถึงน้ำได้ชัด ทั้งระหว่างอาชีพและระหว่างพื้นที่",
		provinces: ["นครราชสีมา", "บุรีรัมย์", "สุรินทร์", "ศรีสะเกษ", "อุบลราชธานี"],
		issues: [
			"ความต้องการใช้น้ำหลายภาคส่วนทับซ้อนกัน",
			"พื้นที่ปลายน้ำมักรับผลกระทบสะสมจากทั้งระบบ",
			"ความแห้งแล้งกระทบทั้งเกษตร เมือง และระบบนิเวศ",
		],
		facts: [
			{ label: "บทบาท", value: "เกษตร-เมือง" },
			{ label: "ลักษณะพื้นที่", value: "ตอนล่างอีสาน" },
			{ label: "ผลกระทบเด่น", value: "แข่งขันใช้น้ำ" },
		],
	},
] as const;
