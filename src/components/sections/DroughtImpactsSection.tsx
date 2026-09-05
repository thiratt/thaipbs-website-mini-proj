import { forwardRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { SectionBackdropWord } from "@/components/editorial/SectionBackdropWord";
import { SectionEndBorder } from "@/components/editorial/SectionEndBorder";
import { DROUGHT_IMPACTS, DROUGHT_IMPACT_QUOTE_IMAGES, type DroughtImpact } from "@/content/drought-impacts";
import { SourceAttribution } from "@/components/editorial/SourceAttribution";
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
			className="group relative grid min-h-32 grid-cols-[2.75rem_1fr_5rem] items-start gap-4 border-b border-white/12 py-6 sm:grid-cols-[3.5rem_1fr_6.5rem] sm:gap-6 md:min-h-36 md:py-7"
		>
			<span className="self-start pt-2 font-black tabular-nums text-white/22 transition-colors duration-300 group-hover:text-drought">
				{number}
			</span>

			<p className="text-[clamp(1.05rem,1.7vw,1.45rem)] font-semibold leading-[1.55] tracking-[-0.015em] text-white/68 transition-colors duration-300 group-hover:text-white">
				{item.text}
			</p>

			<div className="relative ml-auto size-16 transition-transform duration-500 group-hover:scale-110 motion-reduce:transform-none motion-reduce:transition-none sm:size-20 md:size-24">
				<Image
					src={item.iconSrc}
					alt={item.iconAlt}
					width={96}
					height={96}
					sizes="(min-width: 768px) 96px, (min-width: 640px) 80px, 64px"
					className="size-full object-contain"
					loading="lazy"
				/>
			</div>
		</motion.li>
	);
}

export const DroughtImpactsSection = forwardRef<HTMLElement>((_props, ref) => {
	return (
		<section id="drought-impacts" ref={ref} className="relative overflow-clip bg-ink text-white">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute left-[-18vw] top-[8%] size-[50vw] rounded-full bg-drought/4 blur-[180px]" />
				<div className="absolute right-[-18vw] top-[46%] size-[48vw] rounded-full bg-drought/5 blur-[190px]" />
				<div className="absolute inset-x-0 bottom-0 h-88 bg-linear-to-b from-transparent to-ink-soft" />
			</div>

			<div className="relative mx-auto px-4 pt-24 pb-16 sm:px-8">
				<div className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 xl:gap-28">
					<motion.div
						initial={{ opacity: 0, x: -24 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-90px" }}
						transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
						className="relative isolate lg:sticky lg:top-28 lg:self-start"
					>
						<SectionBackdropWord>Impact</SectionBackdropWord>

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

				<SourceAttribution className="mt-4" href="https://dpmpotckg.disaster.go.th/ckg/cms/4848?id=7310">
					1784 กรมป้องกันและบรรเทาสาธารณภัย
				</SourceAttribution>

				<div className="mt-10 border-t border-white/14 pt-16">
					<div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20 xl:gap-28">
						<motion.div
							initial={{ opacity: 0, x: -22 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-80px" }}
							transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
							className="lg:sticky lg:top-28 lg:self-start"
						>
							<h3 className="mt-5 text-[clamp(3.6rem,7vw,7.2rem)] font-black leading-[0.95] tracking-[-0.065em]">
								<span className="block">แล้วใคร</span>
								<span className="block text-white/35">ได้รับ</span>
								<span className="block text-drought">ผลกระทบ?</span>
							</h3>
							<p className="mt-7 max-w-md font-medium leading-7 text-white/44 sm:text-base sm:leading-8">
								จำนวนผู้ที่ได้รับผลกระทบจากภัยแล้ง แยกตามภูมิภาค ปี 2567 ระหว่างวันที่ 14 พฤศจิกายน 2566
								– 2 พฤศจิกายน 2567
							</p>
							<SourceAttribution className="mt-5 max-w-md">
								ข้อมูลจากระบบข้อมูลสาธารณภัย กรมป้องกันและบรรเทาสาธารณภัย · 20 กุมภาพันธ์ 2568
							</SourceAttribution>
						</motion.div>

						<div className="grid items-start gap-5 md:grid-cols-12 md:gap-6">
							{DROUGHT_IMPACT_QUOTE_IMAGES.map((src, index) => {
								const placement = [
									"md:col-span-7",
									"md:col-span-5 md:mt-16",
									"md:col-span-5 md:mt-8",
									"md:col-span-7 md:mt-6",
									"md:col-span-8 md:col-start-3 md:mt-4",
								][index];

								return (
									<motion.figure
										key={src}
										initial={{ opacity: 0, y: 28 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true, margin: "-70px" }}
										transition={{ duration: 0.58, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
										className={`group relative self-start border border-white/10 bg-white/2 p-2 ${placement}`}
									>
										<div className="mb-2 flex items-center justify-between px-1 text-[0.58rem] font-black uppercase tracking-[0.18em] text-white/22">
											<span>{String(index + 1).padStart(2, "0")}</span>
											<span>Impact voice</span>
										</div>
										<Image
											src={src}
											alt="ภาพสะท้อนผลกระทบจากภัยแล้ง"
											width={1080}
											height={1080}
											className="h-auto w-full opacity-90 transition-opacity duration-300 group-hover:opacity-100"
											loading="lazy"
										/>
									</motion.figure>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<SectionEndBorder />
		</section>
	);
});

DroughtImpactsSection.displayName = "DroughtImpactsSection";
