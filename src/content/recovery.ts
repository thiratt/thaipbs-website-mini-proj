export const DROUGHT_RECOVERY_ITEMS = [
	{
		title: "การลอกคลอง",
		category: "Water Management",
		description:
			"การขุดลอกตะกอน ดิน และวัชพืชที่สะสมในคลอง ช่วยให้น้ำไหลสะดวกขึ้นและเพิ่มพื้นที่กักเก็บน้ำสำหรับช่วงฤดูแล้ง โดยต้องดูแลทางน้ำและระบบนิเวศควบคู่กัน",
		imageSrc: "/images/recovery/channel-dredging.jpg",
	},
	{
		title: "การขุดบ่อ",
		category: "Reservoir",
		description:
			"บ่อในไร่นาหรือพื้นที่ครัวเรือนช่วยรับและเก็บน้ำฝนไว้ใช้ในการเกษตรช่วงขาดแคลน ลดการพึ่งพาแหล่งน้ำภายนอก โดยควรเลือกตำแหน่งและขนาดให้เหมาะกับสภาพพื้นที่",
		imageSrc: "/images/recovery/farm-pond.jpg",
	},
	{
		title: "ขุดเจาะบ่อบาดาล",
		category: "Groundwater",
		description:
			"น้ำบาดาลเป็นแหล่งน้ำสำรองสำคัญในช่วงแล้ง แต่ต้องสำรวจศักยภาพและคุณภาพน้ำก่อนใช้ พร้อมควบคุมการสูบไม่ให้เกินอัตราที่ธรรมชาติเติมกลับ",
		imageSrc: "/images/recovery/groundwater-well.jpg",
	},
	{
		title: "ปลูกพืชคลุมดิน",
		category: "Agriculture",
		description:
			"พืชคลุมดิน เช่น พืชตระกูลถั่วหรือหญ้าแฝก ช่วยบังผิวดิน ลดการระเหยและการชะล้างพังทลาย รากของพืชยังช่วยรักษาโครงสร้างและความชุ่มชื้นของดิน",
		imageSrc: "/images/recovery/ground-cover-crops.jpg",
	},
	{
		title: "ฟื้นฟูพื้นที่ต้นน้ำลำธาร",
		category: "Reforestation",
		description:
			"การฟื้นป่าและพืชพื้นถิ่นในพื้นที่ต้นน้ำหรือพื้นที่เสื่อมโทรม ช่วยให้ดินซึมซับและเก็บความชุ่มชื้น ลดการพังทลาย และค่อย ๆ ฟื้นความสมดุลของระบบนิเวศ",
		imageSrc: "/images/recovery/watershed-restoration.jpg",
	},
] as const;
