import { forwardRef } from "react";
import { motion } from "motion/react";
import { SectionBackdropWord } from "@/components/editorial/SectionBackdropWord";
import { SectionEndBorder } from "@/components/editorial/SectionEndBorder";
import { SectionTopline } from "@/components/editorial/SectionTopline";
import { SourceAttribution } from "@/components/editorial/SourceAttribution";
import { AlertTriangle, Droplets, Flame, ThermometerSun } from "lucide-react";

const HEAT_LEVELS = [
	{
		label: "เฝ้าระวัง",
		temp: "27.0 – 32.9°C",
		min: 27,
		max: 32.9,
		icon: Droplets,
		accent: "#9ac400",
		soft: "rgba(154, 196, 0, 0.12)",
		description:
			"เมื่อสัมผัสความร้อนและทำกิจกรรมกลางแจ้งเป็นเวลานาน อาจเริ่มมีอาการอ่อนเพลีย ปวดศีรษะ ผื่นจากความร้อน บวมจากความร้อน และตะคริวจากความร้อน",
	},
	{
		label: "เตือนภัย",
		temp: "33.0 – 41.9°C",
		min: 33,
		max: 41.9,
		icon: ThermometerSun,
		accent: "#f5c400",
		soft: "rgba(245, 196, 0, 0.12)",
		description:
			"มีความเสี่ยงต่อโรคเพลียแดด (Heat exhaustion) และตะคริวจากความร้อน หากอยู่กลางแจ้งต่อเนื่องอาจพัฒนาไปสู่ฮีทสโตรก (Heat stroke)",
	},
	{
		label: "อันตราย",
		temp: "42.0 – 51.9°C",
		min: 42,
		max: 51.9,
		icon: Flame,
		accent: "#f18717",
		soft: "rgba(241, 135, 23, 0.13)",
		description:
			"ความร้อนระดับนี้ทำให้ร่างกายรับภาระสูง มีโอกาสเกิดโรคเพลียแดด ตะคริว และฮีทสโตรก โดยเฉพาะเมื่อทำกิจกรรมกลางแจ้งต่อเนื่อง",
	},
	{
		label: "อันตรายมาก",
		temp: "≥ 52.0°C",
		min: 52,
		max: 60,
		icon: AlertTriangle,
		accent: "#ef3b20",
		soft: "rgba(239, 59, 32, 0.14)",
		description:
			"เป็นระดับที่มีความเสี่ยงสูงมากต่อฮีทสโตรก ต้องหลีกเลี่ยงการสัมผัสความร้อนและกิจกรรมกลางแจ้งที่ต่อเนื่องเป็นเวลานาน",
	},
] as const;

const GAUGE_MIN = 27;
const GAUGE_MAX = 60;
const EASE = [0.22, 1, 0.36, 1] as const;

function HeatGauge() {
	return (
		<div>
			<div className="flex h-2.5 w-full overflow-hidden rounded-full ring-1 ring-white/10 sm:h-3">
				{HEAT_LEVELS.map((level, index) => {
					const width = ((level.max - level.min) / (GAUGE_MAX - GAUGE_MIN)) * 100;
					return (
						<motion.span
							key={level.label}
							initial={{ scaleX: 0 }}
							whileInView={{ scaleX: 1 }}
							viewport={{ once: true, margin: "-80px" }}
							transition={{ duration: 0.7, delay: 0.1 + index * 0.08, ease: EASE }}
							className="h-full origin-left"
							style={{ width: `${width}%`, backgroundColor: level.accent }}
						/>
					);
				})}
			</div>
			<div className="mt-3 flex justify-between text-[0.62rem] font-black tabular-nums tracking-wider text-white/34 sm:text-xs">
				<span>27°</span>
				<span>33°</span>
				<span>42°</span>
				<span>52°+</span>
			</div>
		</div>
	);
}

function LevelRow({ level, index }: { level: (typeof HEAT_LEVELS)[number]; index: number }) {
	const Icon = level.icon;
	const number = String(index + 1).padStart(2, "0");

	return (
		<motion.li
			initial={{ opacity: 0, y: 18 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-70px" }}
			transition={{ duration: 0.55, delay: index * 0.06, ease: EASE }}
			className="group flex flex-col gap-4 border-b border-white/12 py-7 sm:flex-row sm:items-center sm:gap-8 md:py-8"
		>
			<div className="flex items-center gap-4 sm:w-50 sm:shrink-0">
				<span className="font-black tabular-nums text-white/22 transition-colors duration-300 group-hover:text-white/50">
					{number}
				</span>
				<span
					className="flex size-11 shrink-0 items-center justify-center rounded-full ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110"
					style={{ backgroundColor: level.soft }}
				>
					<Icon className="size-5" style={{ color: level.accent }} strokeWidth={2.4} />
				</span>
				<div>
					<p className="text-xs font-black uppercase tracking-[0.16em] text-white/60 sm:text-sm">
						{level.label}
					</p>
					<p
						className="text-xl font-black tabular-nums leading-tight sm:text-2xl"
						style={{ color: level.accent }}
					>
						{level.temp}
					</p>
				</div>
			</div>

			<p className="text-sm font-medium leading-7 text-white/48 transition-colors duration-300 group-hover:text-white/74 sm:text-base sm:leading-8">
				{level.description}
			</p>
		</motion.li>
	);
}

export const DroughtInequalitySection = forwardRef<HTMLElement>((_props, ref) => {
	return (
		<section id="drought-inequality" ref={ref} className="relative overflow-clip bg-ink text-white">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute right-[-20vw] top-[4%] size-[54vw] rounded-full bg-drought/5 blur-[220px]" />
				<div className="absolute left-[-24vw] top-[62%] size-[48vw] rounded-full bg-drought/3 blur-[220px]" />
				<SectionBackdropWord>Unequal</SectionBackdropWord>
			</div>

			<div className="relative mx-auto px-4 py-16 sm:px-8">
				<div className="grid gap-16 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20 xl:gap-24">
					<motion.div
						initial={{ opacity: 0, x: -24 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-90px" }}
						transition={{ duration: 0.68, ease: EASE }}
						className="lg:sticky lg:top-28 lg:self-start"
					>
						<h2 className="mt-8 text-[clamp(2rem,4.6vw,3.6rem)] font-black leading-[1.22] tracking-[-0.02em]">
							<span className="block text-white/45">“ที่ของฉัน”</span>
							<span className="block pl-[12%] text-white/80 sm:pl-[18%]">…ที่ของเธอ</span>
							<span className="block">
								<span className="text-drought">“แล้ง”</span> เราไม่เท่ากัน
							</span>
						</h2>

						<p className="mt-8 max-w-md text-sm font-medium leading-7 text-white/46 sm:text-base sm:leading-8">
							ดัชนีความร้อนบอกสิ่งที่ร่างกายรู้สึกจริง ไม่ใช่แค่ตัวเลขอุณหภูมิ
							แต่คนที่ต้องอยู่กลางแจ้งโดยไม่มีทางเลือก
							ต้องเผชิญความเสี่ยงระดับเดียวกันนี้บ่อยกว่าและนานกว่าคนอื่น
						</p>

						<div className="mt-8 flex items-end gap-5 border-t border-white/14 pt-6">
							<span className="text-[clamp(3.2rem,6vw,5.6rem)] font-black leading-none tabular-nums text-white/12">
								4
							</span>
							<p className="max-w-xs pb-1 text-sm font-semibold leading-7 text-white/46">
								ระดับความเสี่ยงต่อสุขภาพจากความร้อน จากเฝ้าระวังถึงอันตรายมาก
							</p>
						</div>
					</motion.div>

					<div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-80px" }}
							transition={{ duration: 0.6, ease: EASE }}
						>
							<p className="text-[0.66rem] font-black uppercase tracking-[0.2em] text-drought">
								ค่าดัชนีความร้อน
							</p>
							<div className="mt-6">
								<HeatGauge />
							</div>
						</motion.div>

						<ul className="mt-12">
							{HEAT_LEVELS.map((level, index) => (
								<LevelRow key={level.label} level={level} index={index} />
							))}
						</ul>
					</div>
				</div>

				<SourceAttribution className="mt-8" href="http://www.rnd.tmd.go.th/heatindexanalysis/">
					กรมอุตุนิยมวิทยา — การวิเคราะห์ดัชนีความร้อน
				</SourceAttribution>
			</div>
			<SectionEndBorder />
		</section>
	);
});

DroughtInequalitySection.displayName = "DroughtInequalitySection";
