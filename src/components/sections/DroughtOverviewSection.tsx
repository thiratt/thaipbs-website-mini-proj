import { forwardRef, useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
	DROUGHT_DEFINITION,
	HUMAN_DROUGHT_CAUSES,
	NATURAL_DROUGHT_CAUSES,
	PARTICIPATION_URL,
} from "@/content/drought-overview";
import { SectionTopline } from "@/components/editorial/SectionTopline";

function ParticipationQrCode() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let cancelled = false;

		const renderQrCode = async () => {
			const { default: QRCodeStyling } = await import("qr-code-styling");

			if (cancelled || !containerRef.current) return;

			containerRef.current.replaceChildren();

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

			qrCode.append(containerRef.current);
		};

		void renderQrCode();

		return () => {
			cancelled = true;
			containerRef.current?.replaceChildren();
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
			<section ref={ref} className="relative overflow-clip bg-ink text-white">
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
						<div className="absolute right-[-2vw] top-[18%] hidden select-none text-[clamp(12rem,28vw,32rem)] font-black leading-none tracking-[-0.08em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.055)] lg:block">
							แล้ง
						</div>
					</div>

					<div className="relative mx-auto px-4 pb-24 pt-6 sm:px-8 md:pb-32 md:pt-8 lg:px-10 lg:pb-36 lg:pt-10">
						<motion.div
							initial={{ opacity: 0, y: 14 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-80px" }}
							transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
							className="flex items-center gap-4 border-t border-white/14 pt-5 text-[0.68rem] font-black uppercase tracking-[0.22em] text-white/42"
						>
							<span>Drought / Definition</span>
						</motion.div>

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
								<p className="mt-8 max-w-sm text-sm font-semibold leading-7 text-white/46 sm:text-base sm:leading-8">
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

				<div className="relative border-white/8">
					<div className="pointer-events-none absolute inset-0 overflow-hidden">
						<div className="absolute right-[-2vw] top-0 hidden text-[clamp(8rem,19vw,21rem)] font-black uppercase leading-none tracking-[-0.08em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.075)] lg:block">
							Causes
						</div>
					</div>

					<div className="relative mx-auto px-4 pb-16 pt-12 sm:px-8 sm:pt-16 md:pb-24 md:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
						<motion.div
							initial={{ opacity: 0, y: 18 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-90px" }}
							transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
							className="border-t border-white/14 pt-8 md:pt-10"
						>
							<div className="max-w-5xl">
								<SectionTopline label="Why drought happens" />

								<h2 className="mt-6 text-[clamp(3.7rem,7.2vw,7.2rem)] font-black leading-[0.95] tracking-[-0.065em]">
									<span className="block text-white">สาเหตุของ</span>
									<span className="block text-drought">ภัยแล้ง</span>
								</h2>

								<p className="mt-6 max-w-2xl text-sm font-medium leading-7 text-white/56 sm:text-base sm:leading-8">
									ภัยแล้งไม่ได้เกิดจากปัจจัยเดียว
									แต่เป็นผลจากทั้งธรรมชาติและกิจกรรมของมนุษย์ที่ซ้อนทับกัน
								</p>
							</div>
						</motion.div>
					</div>

					<article className="relative border-y border-white/12 lg:grid lg:grid-cols-2">
						<div className="relative min-h-[60svh] overflow-hidden lg:sticky lg:top-0 lg:h-svh">
							<motion.img
								src="/images/overview/natural-drought-causes.png"
								alt="พื้นที่แห้งแล้งจากสาเหตุทางธรรมชาติ"
								initial={{ scale: 1.05 }}
								whileInView={{ scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
								className="absolute inset-0 h-full w-full object-cover"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-[#171714]/90 via-[#171714]/18 to-black/10" />
							<div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-[#171714]/24" />
							<div className="absolute inset-x-5 bottom-6 flex items-end justify-between gap-6 sm:inset-x-8 sm:bottom-8 lg:inset-x-10 lg:bottom-10">
								<div>
									<p className="text-xs font-black uppercase tracking-[0.24em] text-drought">
										Natural factors
									</p>
									<p className="mt-2 text-[clamp(2.5rem,5vw,5.5rem)] font-black leading-none tracking-tighter">
										ธรรมชาติ
									</p>
								</div>
								<span className="text-[clamp(4rem,8vw,8rem)] font-black leading-none tabular-nums text-white/12">
									01
								</span>
							</div>
						</div>

						<div className="relative flex flex-col justify-center px-4 py-16 sm:px-8 sm:py-20 lg:min-h-[112svh] lg:px-12 lg:py-28 xl:px-16">
							<div className="mb-10 flex items-center gap-4 text-sm font-black uppercase tracking-[0.22em] text-white/60">
								<span className="h-px w-10 bg-drought" />
								<span>เกิดขึ้นจากระบบธรรมชาติที่เปลี่ยนไป</span>
							</div>
							<ul className="border-t border-white/14">
								{NATURAL_DROUGHT_CAUSES.map((cause, index) => (
									<motion.li
										key={cause}
										initial={{ opacity: 0, x: 18 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true, margin: "-70px" }}
										transition={{ duration: 0.5, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
										className="group grid gap-4 border-b border-white/12 py-6 sm:grid-cols-[2.5rem_1fr] sm:py-7"
									>
										<span className="pt-1 text-xs font-black tabular-nums text-white/22 transition-colors duration-300 group-hover:text-drought">
											{String(index + 1).padStart(2, "0")}
										</span>
										<p className="text-base font-semibold leading-7 text-white/68 transition-colors duration-300 group-hover:text-white sm:text-lg sm:leading-8">
											{cause}
										</p>
									</motion.li>
								))}
							</ul>
						</div>
					</article>

					<article className="relative border-b border-white/12 lg:grid lg:grid-cols-2">
						<div className="order-2 relative min-h-[60svh] overflow-hidden lg:sticky lg:top-0 lg:order-2 lg:h-svh">
							<motion.img
								src="/images/overview/human-drought-causes.png"
								alt="โรงงานอุตสาหกรรมและมลพิษจากกิจกรรมของมนุษย์"
								initial={{ scale: 1.05 }}
								whileInView={{ scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
								className="absolute inset-0 h-full w-full object-cover"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-[#171714]/92 via-[#171714]/18 to-black/10" />
							<div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-[#171714]/24" />
							<div className="absolute inset-x-5 bottom-6 flex items-end justify-between gap-6 sm:inset-x-8 sm:bottom-8 lg:inset-x-10 lg:bottom-10">
								<div>
									<p className="text-xs font-black uppercase tracking-[0.24em] text-drought">
										Human factors
									</p>
									<p className="mt-2 max-w-xl text-[clamp(2.35rem,4.8vw,5rem)] font-black leading-[0.95] tracking-tighter">
										การกระทำของมนุษย์
									</p>
								</div>
								<span className="text-[clamp(4rem,8vw,8rem)] font-black leading-none tabular-nums text-white/12">
									02
								</span>
							</div>
						</div>

						<div className="order-1 relative flex flex-col justify-center px-4 py-16 sm:px-8 sm:py-20 lg:min-h-[112svh] lg:px-12 lg:py-28 xl:px-16">
							<div className="mb-10 flex items-center gap-4 text-sm font-black uppercase tracking-[0.22em] text-white/60">
								<span className="h-px w-10 bg-drought" />
								<span>มนุษย์ทำให้ความแห้งแล้งหนักขึ้นได้</span>
							</div>
							<ul className="border-t border-white/14">
								{HUMAN_DROUGHT_CAUSES.map((cause, index) => (
									<motion.li
										key={cause}
										initial={{ opacity: 0, x: -18 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true, margin: "-70px" }}
										transition={{ duration: 0.5, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
										className="group grid gap-4 border-b border-white/12 py-6 sm:grid-cols-[2.5rem_1fr] sm:py-7"
									>
										<span className="pt-1 text-xs font-black tabular-nums text-white/22 transition-colors duration-300 group-hover:text-drought">
											{String(index + 1).padStart(2, "0")}
										</span>
										<p className="text-base font-semibold leading-7 text-white/68 transition-colors duration-300 group-hover:text-white sm:text-lg sm:leading-8">
											{cause}
										</p>
									</motion.li>
								))}
							</ul>
						</div>
					</article>
				</div>
			</section>
		</>
	);
});

DroughtOverviewSection.displayName = "DroughtOverviewSection";

export { DroughtOverviewSection };
