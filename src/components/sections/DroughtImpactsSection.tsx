import { forwardRef } from "react";
import { motion } from "motion/react";
import { DROUGHT_IMPACTS, type DroughtImpact } from "@/content/drought-impacts";
import { SectionTopline } from "@/components/editorial/SectionTopline";

function ImpactRow({ item, index }: { item: DroughtImpact; index: number }) {
	const number = String(index + 1).padStart(2, "0");

	return (
		<motion.li
			initial={{ opacity: 0, x: 22 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true, margin: "-70px" }}
			transition={{
				duration: 0.52,
				delay: index * 0.025,
				ease: [0.22, 1, 0.36, 1],
			}}
			className="group relative grid min-h-32 grid-cols-[2.75rem_1fr_5rem] items-center gap-4 border-b border-white/12 py-6 sm:grid-cols-[3.5rem_1fr_6.5rem] sm:gap-6 md:min-h-36 md:py-7"
		>
			<span className="self-start pt-2 font-black tabular-nums text-white/22 transition-colors duration-300 group-hover:text-drought">
				{number}
			</span>

			<p className="max-w-2xl text-[clamp(1.05rem,1.7vw,1.45rem)] font-semibold leading-[1.55] tracking-[-0.015em] text-white/68 transition-colors duration-300 group-hover:text-white">
				{item.text}
			</p>

			<div className="relative ml-auto size-16 overflow-hidden rounded-full bg-white/[0.035] ring-1 ring-white/10 transition-[scale,opacity,filter] duration-500 group-hover:scale-110 group-hover:ring-white/20 sm:size-20 md:size-24">
				<img
					src={item.iconSrc}
					alt={item.iconAlt}
					className="size-full object-cover opacity-60 grayscale transition-[opacity,filter,scale] duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
					loading="lazy"
				/>
			</div>
		</motion.li>
	);
}

export const DroughtImpactsSection = forwardRef<HTMLElement>((_props, ref) => {
	return (
		<section ref={ref} className="relative overflow-clip bg-ink text-white">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute left-[-18vw] top-[8%] size-[50vw] rounded-full bg-drought/4 blur-[180px]" />
				<div className="absolute right-[-18vw] top-[46%] size-[48vw] rounded-full bg-drought/5 blur-[190px]" />
				<div className="absolute inset-x-0 bottom-0 h-88 bg-linear-to-b from-transparent to-[#232323]" />
				<div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/12" />
			</div>

			<div className="relative mx-auto px-4 pt-24 pb-24 sm:px-8 md:pt-32 lg:px-10 lg:pt-36">
				<div className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 xl:gap-28">
					<motion.div
						initial={{ opacity: 0, x: -24 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-90px" }}
						transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
						className="relative isolate lg:sticky lg:top-28 lg:self-start"
					>
						<div className="pointer-events-none absolute left-[24vw] top-0 z-0 hidden select-none whitespace-nowrap text-[clamp(10rem,24vw,26rem)] font-black uppercase leading-none tracking-[-0.08em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.075)] lg:block">
							Impact
						</div>
						<SectionTopline className="relative z-10" label="When water disappears" />

						<h2 className="relative z-10 mt-7 text-[clamp(4.6rem,9vw,9.4rem)] font-black leading-[0.78] tracking-[-0.075em]">
							<span className="block text-white">ผล</span>
							<span className="block text-drought">กระทบ</span>
						</h2>

						<div className="relative z-10 mt-8 flex items-end gap-5 border-t border-white/14 pt-6">
							<span className="text-[clamp(4rem,7vw,7rem)] font-black leading-none tabular-nums text-white/12">
								10
							</span>
							<p className="max-w-xs pb-1 text-sm font-semibold leading-7 text-white/46 sm:text-base">
								เมื่อความแห้งแล้งยืดเยื้อ ผลกระทบจะลามจากผืนดินไปสู่ชีวิต สุขภาพ เศรษฐกิจ และระบบนิเวศ
							</p>
						</div>
					</motion.div>

					<div>
						<motion.div
							initial={{ scaleX: 0 }}
							whileInView={{ scaleX: 1 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
							className="h-px origin-left bg-linear-to-r from-drought via-drought/50 to-white/10"
						/>

						<ul>
							{DROUGHT_IMPACTS.map((item, index) => (
								<ImpactRow key={item.text} item={item} index={index} />
							))}
						</ul>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm font-bold uppercase tracking-[0.16em] text-white/40 sm:flex-row sm:items-center sm:justify-between"
				>
					<span>ผลกระทบไม่ได้เกิดขึ้นแยกจากกัน แต่เชื่อมโยงและส่งต่อถึงกัน</span>
					<span className="shrink-0">ที่มา · 1784 กรมป้องกันและบรรเทาสาธารณภัย</span>
				</motion.div>
			</div>
		</section>
	);
});

DroughtImpactsSection.displayName = "DroughtImpactsSection";
