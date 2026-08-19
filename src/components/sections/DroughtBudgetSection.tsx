import { forwardRef, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import {
	BUDGET_AMOUNT_MILLION_BAHT,
	BUDGET_PRIORITIES,
	DROUGHT_IMPACT_QUOTE_IMAGES,
} from "@/content/budget";
import { SectionTopline } from "@/components/editorial/SectionTopline";

const AnimatedBudgetAmount = ({ value }: { value: number }) => {
	const ref = useRef<HTMLSpanElement>(null);
	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, {
		stiffness: 200,
		damping: 40,
	});
	const isInView = useInView(ref, { once: true, margin: "0px" });

	useEffect(() => {
		if (isInView) {
			motionValue.set(value);
		}
	}, [isInView, value, motionValue]);

	useEffect(() => {
		return springValue.on("change", (latest) => {
			if (ref.current) {
				ref.current.textContent = latest.toLocaleString("en-US", {
					minimumFractionDigits: 4,
					maximumFractionDigits: 4,
				});
			}
		});
	}, [springValue]);

	return <span ref={ref}>0.0000</span>;
};

export const DroughtBudgetSection = forwardRef<HTMLElement>((_props, ref) => {
	return (
		<section ref={ref} className="relative overflow-clip bg-ink text-white">
			<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/12" />
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute right-[-18vw] top-[4%] size-[56vw] rounded-full bg-drought/6 blur-[210px]" />
				<div className="absolute left-[-22vw] top-[38%] size-[48vw] rounded-full bg-drought/3 blur-[220px]" />
				<div className="absolute right-[-6vw] top-[3%] hidden select-none text-[clamp(9rem,22vw,24rem)] font-black uppercase leading-none tracking-[-0.08em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.025)] lg:block">
					Budget
				</div>
			</div>

			<div className="relative mx-auto px-4 pb-24 pt-24 sm:px-8 md:pb-32 md:pt-32 lg:px-10 lg:pb-40 lg:pt-36">
				<motion.div
					initial={{ opacity: 0, y: 18 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
					className="border-t border-white/14 pt-5"
				>
					<SectionTopline label="Public budget · Water management" meta="FY 2567" />
				</motion.div>

				<div className="mt-14 grid items-end gap-14 lg:mt-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 xl:gap-28">
					<motion.div
						initial={{ opacity: 0, x: -24 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
					>
						<h2 className="text-[clamp(5rem,10vw,10.5rem)] font-black leading-[0.8] tracking-[-0.08em]">
							<span className="block">งบ</span>
							<span className="block text-drought">ประมาณ</span>
						</h2>
						<p className="mt-8 max-w-md text-sm font-medium leading-7 text-white/46 sm:text-base sm:leading-8">
							งบกลางเพื่อเพิ่มประสิทธิภาพการบริหารจัดการทรัพยากรน้ำในฤดูฝน
							และเตรียมกักเก็บน้ำสำหรับฤดูแล้งปี 2567/2568
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 26 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.72, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
						className="border-l border-white/14 pl-5 sm:pl-8 lg:pl-12"
					>
						<p className="text-sm font-black uppercase tracking-[0.2em] text-white/50">
							วงเงินที่ ครม. อนุมัติ
						</p>
						<div className="mt-4 flex flex-wrap items-end gap-x-4 gap-y-2">
							<span className="break-all text-[clamp(4.4rem,9.2vw,9.8rem)] font-black leading-[0.82] tracking-[-0.075em] text-white">
								<AnimatedBudgetAmount value={BUDGET_AMOUNT_MILLION_BAHT} />
							</span>
							<span className="pb-[0.08em] text-[clamp(1.7rem,3vw,3.2rem)] font-black text-drought">
								ล้านบาท
							</span>
						</div>
						<p className="mt-7 max-w-3xl text-sm font-medium leading-7 text-white/48 sm:text-base sm:leading-8">
							งบประมาณรายจ่ายประจำปี พ.ศ. 2567 จากงบกลางรายการเงินสำรองจ่ายเพื่อกรณีฉุกเฉินหรือจำเป็น
							ตามที่สำนักงานทรัพยากรน้ำแห่งชาติ (สทนช.) เสนอ
						</p>
					</motion.div>
				</div>

				<div className="mt-16 grid border-y border-white/12 sm:grid-cols-3 lg:mt-24">
					{BUDGET_PRIORITIES.map((item, index) => (
						<motion.div
							key={item.index}
							initial={{ opacity: 0, y: 14 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
							className="border-b border-white/10 py-6 sm:border-b-0 sm:border-r sm:px-7 first:pl-0 last:border-r-0 lg:py-8 lg:px-10 lg:last:pr-0"
						>
							<div className="flex items-center justify-between gap-4">
								<span className="text-[0.62rem] font-black tabular-nums tracking-[0.18em] text-drought">
									{item.index}
								</span>
								<span className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-white/24">
									{item.label}
								</span>
							</div>
							<p className="mt-6 max-w-sm text-lg font-bold leading-8 tracking-[-0.02em] text-white/72 lg:text-xl">
								{item.text}
							</p>
						</motion.div>
					))}
				</div>

				<div className="mt-28 border-t border-white/14 pt-8 md:mt-36 md:pt-10 lg:mt-44">
					<div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20 xl:gap-28">
						<motion.div
							initial={{ opacity: 0, x: -22 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-80px" }}
							transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
							className="lg:sticky lg:top-28 lg:self-start"
						>
							<p className="text-[0.66rem] font-black uppercase tracking-[0.2em] text-drought">
								Drought · People
							</p>
							<h3 className="mt-5 text-[clamp(3.6rem,7vw,7.2rem)] font-black leading-[0.95] tracking-[-0.065em]">
								<span className="block">แล้วใคร</span>
								<span className="block text-white/35">ได้รับ</span>
								<span className="block text-drought">ผลกระทบ?</span>
							</h3>
							<p className="mt-7 max-w-md font-medium leading-7 text-white/44 sm:text-base sm:leading-8">
								จำนวนผู้ที่ได้รับผลกระทบจากภัยแล้ง แยกตามภูมิภาค ปี 2567 ระหว่างวันที่ 14 พฤศจิกายน 2566
								– 2 พฤศจิกายน 2567
							</p>
							<p className="mt-5 max-w-md text-sm font-bold uppercase leading-5 tracking-[0.12em] text-white/30">
								ข้อมูลจากระบบข้อมูลสาธารณภัย กรมป้องกันและบรรเทาสาธารณภัย · 20 กุมภาพันธ์ 2568
							</p>
						</motion.div>

						<div className="grid gap-5 md:grid-cols-12 md:gap-6">
							{DROUGHT_IMPACT_QUOTE_IMAGES.map((src, index) => {
								const placement = [
									"md:col-span-7",
									"md:col-span-5 md:mt-16",
									"md:col-span-5 md:-mt-10",
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
										className={`group relative border border-white/10 bg-white/2 p-2 ${placement}`}
									>
										<div className="mb-2 flex items-center justify-between px-1 text-[0.58rem] font-black uppercase tracking-[0.18em] text-white/22">
											<span>{String(index + 1).padStart(2, "0")}</span>
											<span>Impact voice</span>
										</div>
										<img
											src={src}
											alt="ภาพสะท้อนผลกระทบจากภัยแล้ง"
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
		</section>
	);
});

DroughtBudgetSection.displayName = "DroughtBudgetSection";
