import { forwardRef, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { SectionBackdropWord } from "@/components/editorial/SectionBackdropWord";
import { SectionEndBorder } from "@/components/editorial/SectionEndBorder";
import { BUDGET_AMOUNT_MILLION_BAHT } from "@/content/budget";

const AnimatedBudgetAmount = ({ value }: { value: number }) => {
	const ref = useRef<HTMLSpanElement>(null);
	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, { stiffness: 120, damping: 20 });
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

	const formattedValue = value.toLocaleString("en-US", {
		minimumFractionDigits: 4,
		maximumFractionDigits: 4,
	});

	return (
		<span className="relative inline-block max-w-full align-bottom tabular-nums">
			{/* Reserve the final number's wrapping before the count-up enters view. */}
			<span className="invisible" aria-hidden="true">
				{formattedValue}
			</span>
			<span ref={ref} className="absolute inset-0" aria-hidden="true">
				0.0000
			</span>
			<span className="sr-only">{formattedValue}</span>
		</span>
	);
};

export const DroughtBudgetSection = forwardRef<HTMLElement>((_props, ref) => {
	return (
		<section id="drought-budget" ref={ref} className="relative overflow-clip bg-ink text-white">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute right-[-18vw] top-[4%] size-[56vw] rounded-full bg-drought/6 blur-[210px]" />
				<div className="absolute left-[-22vw] top-[38%] size-[48vw] rounded-full bg-drought/3 blur-[220px]" />
				<SectionBackdropWord>Budget</SectionBackdropWord>
			</div>

			<div className="relative mx-auto px-4 py-16 sm:px-8">
				<div className="grid items-end gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 xl:gap-28">
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
			</div>
			<SectionEndBorder />
		</section>
	);
});

DroughtBudgetSection.displayName = "DroughtBudgetSection";
