import { forwardRef } from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

const HeroSection = forwardRef<HTMLElement, { onContinue?: () => void }>(({ onContinue }, ref) => {
	return (
		<section ref={ref} className="relative min-h-svh flex flex-col overflow-hidden bg-ink text-white">
			<div className="absolute inset-0">
				<motion.img
					src="/images/hero/drought-hero.jpg"
					alt="พื้นที่ที่ได้รับผลกระทบจากภัยแล้ง"
					initial={{ scale: 1.025 }}
					animate={{ scale: 1.075 }}
					transition={{
						duration: 18,
						repeat: Infinity,
						repeatType: "reverse",
						ease: "easeInOut",
					}}
					className="h-full w-full object-cover object-[62%_center]"
				/>

				<div className="absolute inset-0 bg-black/20" />
				<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,23,20,0.7)_0%,rgba(23,23,20,0.1)_24%,rgba(23,23,20,0.26)_56%,#171714_100%)] lg:bg-[linear-gradient(90deg,#171714_0%,rgba(23,23,20,0.94)_24%,rgba(23,23,20,0.64)_47%,rgba(23,23,20,0.12)_72%,rgba(23,23,20,0.22)_100%)]" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(241,135,23,0.08),transparent_30%)]" />
			</div>

			<div className="relative z-10 flex min-h-svh items-center px-4 py-24 lg:px-8">
				<div className="w-full">
					<motion.div
						initial={{ opacity: 0, y: 28 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
						className="font-black tracking-[-0.075em]"
					>
						<p className="relative z-10 translate-x-1 translate-y-[clamp(0.75rem,2vw,1rem)] text-[clamp(4rem,12vw,8rem)] leading-[0.72] text-white/80 sm:translate-x-2">
							ภัย
						</p>

						<h1>
							<span className="block text-[clamp(6.5rem,18vw,13rem)] leading-[0.7] text-drought">
								แล้ง
							</span>
							<span className="mt-4 block max-w-4xl text-[clamp(3rem,7.3vw,6.75rem)] leading-[0.88] text-white sm:mt-5">
								เราไม่เท่ากัน
							</span>
						</h1>
					</motion.div>

					<motion.p
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.55, delay: 0.34, ease: "easeOut" }}
						className="mt-6 max-w-2xl text-sm font-medium leading-7 text-white/62 sm:mt-8 sm:text-base md:text-lg md:leading-8"
					>
						<span className="block">เมื่อฝนหายไป น้ำที่เหลืออยู่ไม่เคยถูกแบ่งอย่างเท่าเทียม</span>
						<span className="block">เรื่องของภัยธรรมชาติที่ซ้อนทับด้วยชีวิต เศรษฐกิจ</span>
						<span className="block">และความเหลื่อมล้ำ</span>
					</motion.p>
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 12 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
				className="absolute inset-x-4 bottom-4 z-20 grid grid-cols-[auto_1fr_auto] items-center gap-4 sm:bottom-5 sm:gap-6 lg:inset-x-8"
			>
				<button
					type="button"
					onClick={onContinue}
					className="group flex items-center gap-3 text-left text-xs font-bold tracking-[0.12em] text-white/78 transition-colors hover:text-white sm:text-sm"
				>
					<span className="flex size-10 items-center justify-center rounded-full border border-white/24 bg-black/10 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-1 sm:size-11">
						<ArrowDown className="size-4" strokeWidth={1.8} />
					</span>
					<span className="hidden sm:inline">เลื่อนเพื่อสำรวจ</span>
				</button>

				<div className="relative h-2 overflow-hidden bg-white/20 rounded-full">
					<motion.div
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ duration: 1.1, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
						className="absolute inset-y-0 left-0 w-[9.1%] origin-left bg-drought"
					/>
				</div>

				<div className="flex items-baseline gap-2 tabular-nums">
					<span className="text-sm font-black text-white">01</span>
					<span className="text-[0.68rem] font-bold text-white/40">/ 11</span>
				</div>
			</motion.div>
		</section>
	);
});

HeroSection.displayName = "HeroSection";

export { HeroSection };
