import { forwardRef, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { SectionBackdropWord } from "@/components/editorial/SectionBackdropWord";
import { SectionEndBorder } from "@/components/editorial/SectionEndBorder";
import { DROUGHT_DEFINITION, PARTICIPATION_URL } from "@/content/drought-overview";

function ParticipationQrCode() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let cancelled = false;
		const container = containerRef.current;
		if (!container) return;

		const renderQrCode = async () => {
			const { default: QRCodeStyling } = await import("qr-code-styling");

			if (cancelled) return;

			container.replaceChildren();

			const qrCode = new QRCodeStyling({
				width: 300,
				height: 300,
				type: "canvas",
				data: PARTICIPATION_URL,
				qrOptions: {
					errorCorrectionLevel: "H",
				},
				dotsOptions: {
					color: "#171714",
					type: "rounded",
				},
				cornersSquareOptions: {
					color: "#f18717",
					type: "extra-rounded",
				},
				cornersDotOptions: {
					color: "#171714",
					type: "dot",
				},
				backgroundOptions: {
					color: "#ffffff",
				},
				image: "/brand/thai-pbs-logo.png",
				imageOptions: {
					margin: 4,
				},
			});

			qrCode.append(container);
		};

		void renderQrCode();

		return () => {
			cancelled = true;
			container.replaceChildren();
		};
	}, []);

	return (
		<a
			href={PARTICIPATION_URL}
			target="_blank"
			rel="noreferrer"
			aria-label="เปิดหน้าร่วมตอบคำถามเกี่ยวกับคำว่าแล้ง"
			className="group block w-[min(72vw,20rem)]"
		>
			<div className="relative overflow-hidden rounded-4xl bg-white p-3 shadow-[0_28px_90px_rgba(0,0,0,0.32)] ring-1 ring-white/14 transition-transform duration-300 group-hover:-translate-y-1">
				<div ref={containerRef} className="aspect-square w-full [&_svg]:block [&_svg]:h-full [&_svg]:w-full" />
			</div>
		</a>
	);
}

const DroughtOverviewSection = forwardRef<HTMLElement>((_props, ref) => {
	return (
		<>
			<section id="drought-overview" ref={ref} className="relative overflow-clip bg-ink text-white">
				<div className="pointer-events-none absolute inset-0">
					<div className="absolute right-[-18vw] top-[6%] size-[58vw] rounded-full bg-drought/5 blur-[150px]" />
					<div className="absolute right-[-14vw] top-[28%] size-[56vw] rounded-full bg-drought/5 blur-[180px]" />
					<div className="absolute left-[-22vw] top-[55%] size-[50vw] rounded-full bg-drought/4 blur-[190px]" />
					<div className="absolute right-[-18vw] top-[78%] size-[48vw] rounded-full bg-drought/4 blur-[190px]" />
					<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,23,20,0)_0%,rgba(0,0,0,0.04)_42%,rgba(0,0,0,0.12)_100%)]" />
				</div>

				<div className="relative mx-auto grid items-center gap-14 px-4 py-28 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:gap-10 lg:px-10 lg:py-32 xl:gap-20">
					<motion.div
						initial={{ opacity: 0, y: 22 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
						className="max-w-2xl"
					>
						<h2 className="text-[clamp(3.4rem,7vw,7.4rem)] font-black leading-[0.9] tracking-[-0.065em]">
							เมื่อพูดถึง
							<span className="block text-drought">“แล้ง”</span>
							<span className="block text-white/92">นึกถึงอะไร?</span>
						</h2>

						<p className="mt-8 max-w-md text-sm font-medium leading-7 text-white/54 sm:text-base sm:leading-8">
							ความหมายของความแห้งแล้งอาจไม่เหมือนกันสำหรับทุกคน
							<br />
							ลองมองคำนี้ผ่านประสบการณ์ของผู้คนก่อนเข้าสู่เรื่องราวของภัยแล้ง
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.97, y: 18 }}
						whileInView={{ opacity: 1, scale: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
						className="relative flex min-h-80 flex-col items-center justify-center gap-6 md:min-h-120"
					>
						<ParticipationQrCode />
						<p className="text-center text-xs font-bold tracking-[0.08em] text-white/60 sm:text-base">
							สแกนหรือแตะเพื่อร่วมตอบคำถาม
						</p>
					</motion.div>
				</div>

				<div className="relative border-white/10">
					<div className="pointer-events-none absolute inset-0 overflow-hidden">
						<SectionBackdropWord>Drought</SectionBackdropWord>
					</div>

					<div className="relative mx-auto px-4 pb-24 pt-6 sm:px-8 md:pb-32 md:pt-8 lg:px-10 lg:pb-36 lg:pt-10">
						<div className="flex items-center gap-4 border-t border-white/14 pt-5 text-[0.68rem] font-black uppercase tracking-[0.22em] text-white/42" />

						<div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20 xl:gap-28">
							<motion.div
								initial={{ opacity: 0, x: -24 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: "-80px" }}
								transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
								className="relative lg:sticky lg:top-28 lg:self-start"
							>
								<div className="absolute -left-4 top-2 h-[72%] w-px bg-linear-to-b from-drought via-drought/45 to-transparent sm:-left-8" />
								<h2 className="flex text-[clamp(5.5rem,11vw,11rem)] font-black leading-[0.72] tracking-[-0.08em] sm:flex-col">
									ภัย
									<span className="block text-drought sm:ml-10 md:ml-12 lg:ml-16">แล้ง</span>
								</h2>
								<p className="mt-8 max-w-100 text-sm font-semibold leading-7 text-white/46 sm:text-base sm:leading-8">
									ภัยแล้งไม่ใช่เพียงช่วงเวลาที่ฝนไม่ตก แต่คือความขาดแคลนน้ำที่ยืดเยื้อจนกระทบต่อชีวิต
									การเกษตร และระบบนิเวศ
								</p>
							</motion.div>

							<div className="relative">
								<motion.div
									initial={{ scaleX: 0 }}
									whileInView={{ scaleX: 1 }}
									viewport={{ once: true, margin: "-100px" }}
									transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
									className="h-px origin-left bg-linear-to-r from-drought via-drought/55 to-white/10"
								/>

								<motion.div
									initial={{ opacity: 0, y: 26 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, margin: "-80px" }}
									transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
									className="grid gap-5 py-9 md:grid-cols-[4rem_1fr] md:py-12"
								>
									<span className="pt-2 text-xs font-black tabular-nums text-drought">01</span>
									<p className="text-[clamp(2.1rem,4.7vw,5rem)] font-black leading-[1.04] tracking-tighter text-white">
										{DROUGHT_DEFINITION[0]}
									</p>
								</motion.div>

								<div className="border-t border-white/12">
									{DROUGHT_DEFINITION.slice(1).map((paragraph, index) => (
										<motion.div
											key={paragraph}
											initial={{ opacity: 0, x: 22 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true, margin: "-80px" }}
											transition={{
												duration: 0.58,
												delay: 0.12 + index * 0.07,
												ease: [0.22, 1, 0.36, 1],
											}}
											className="group grid gap-5 border-b border-white/12 py-7 md:grid-cols-[4rem_1fr] md:py-9"
										>
											<span className="pt-1 text-xs font-black tabular-nums text-white/25 transition-colors duration-300 group-hover:text-drought">
												0{index + 2}
											</span>
											<p className="text-[clamp(1.25rem,2.2vw,2rem)] font-bold leading-[1.4] tracking-tight text-white/72 transition-colors duration-300 group-hover:text-white">
												{paragraph}
											</p>
										</motion.div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>

				<SectionEndBorder />
			</section>
		</>
	);
});

DroughtOverviewSection.displayName = "DroughtOverviewSection";

export { DroughtOverviewSection };
