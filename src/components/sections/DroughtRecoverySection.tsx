import { forwardRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { SectionEndBorder } from "@/components/editorial/SectionEndBorder";
import { DROUGHT_RECOVERY_ITEMS } from "@/content/recovery";

const EASE = [0.22, 1, 0.36, 1] as const;
const RECOVERY_DETAILS = [
	{ label: "เปิดทางน้ำ", alt: "รถขุดกำลังขุดลอกดินริมคลอง" },
	{ label: "เก็บน้ำไว้ใช้", alt: "รถขุดกำลังปรับพื้นที่สำหรับแหล่งเก็บน้ำ" },
	{ label: "สำรองน้ำใต้ดิน", alt: "เครื่องขุดเจาะบ่อบาดาลกำลังทำงาน" },
	{ label: "รักษาความชุ่มชื้น", alt: "ต้นอ่อนของพืชในแปลงเกษตร" },
	{ label: "คืนสมดุลต้นน้ำ", alt: "สายน้ำที่ไหลผ่านป่าต้นน้ำสีเขียว มองจากมุมสูง" },
] as const;

export const DroughtRecoverySection = forwardRef<HTMLElement>((_props, ref) => {
	const reduceMotion = useReducedMotion();

	return (
		<section
			id="drought-recovery"
			ref={ref}
			aria-labelledby="drought-recovery-title"
			className="relative isolate overflow-hidden bg-ink text-white [overflow-anchor:none]"
		>
			<div className="relative px-4 pb-16 pt-28 sm:px-8 sm:pb-20">
				<motion.header
					initial={reduceMotion ? false : { opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: reduceMotion ? 0 : 0.6, ease: EASE }}
					className="grid items-end gap-5 pb-7 sm:pb-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12"
				>
					<div>
						<h2
							id="drought-recovery-title"
							className="text-[clamp(2rem,4.4vw,4rem)] font-black leading-[1.3] tracking-[-0.055em]"
						>
							<span className="whitespace-nowrap">
								ฟื้นน้ำ <span className="text-drought">ฟื้นดิน</span>
							</span>
							<span className="block text-white/65">ฟื้นต้นน้ำ</span>
						</h2>
					</div>
				</motion.header>

				<div className="mt-4 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-6">
					{DROUGHT_RECOVERY_ITEMS.map((item, index) => {
						const detail = RECOVERY_DETAILS[index];
						const ecosystem = index >= 3;

						return (
							<motion.article
								key={item.title}
								initial={reduceMotion ? false : { opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.12 }}
								transition={{ duration: reduceMotion ? 0 : 0.55, ease: EASE }}
								className={`group overflow-hidden rounded-xl border border-white/10 bg-ink-elevated ${ecosystem ? "lg:col-span-3 xl:grid xl:grid-cols-[0.42fr_0.58fr]" : "lg:col-span-2"}`}
							>
								<div
									className={`relative h-44 overflow-hidden bg-ink-soft sm:h-48 ${ecosystem ? "xl:h-full xl:min-h-60" : ""}`}
								>
									<Image
										src={item.imageSrc}
										alt={detail.alt}
										fill
										sizes={
											ecosystem
												? "(min-width: 1280px) calc(21vw - 19px), (min-width: 1024px) calc(50vw - 44px), (min-width: 640px) calc(50vw - 44px), calc(100vw - 32px)"
												: "(min-width: 1024px) calc(33.33vw - 38px), (min-width: 640px) calc(50vw - 44px), calc(100vw - 32px)"
										}
										className="object-cover transition-transform duration-700 group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
									/>
								</div>
								<div className="p-5">
									<h3 className="text-[1.375rem] font-bold leading-[1.4] tracking-[-0.035em] sm:text-2xl">
										{item.title}
									</h3>
									<p className="mt-2 text-sm text-white/60">{item.description}</p>
								</div>
							</motion.article>
						);
					})}
				</div>
			</div>
			<SectionEndBorder />
		</section>
	);
});

DroughtRecoverySection.displayName = "DroughtRecoverySection";
