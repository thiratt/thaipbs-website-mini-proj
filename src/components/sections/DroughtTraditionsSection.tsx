import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useAnimationControls, useScroll, useTransform } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { SectionEndBorder } from "@/components/editorial/SectionEndBorder";
import { cn } from "@/lib/utils";

const TRADITION_MARKERS = [
	{
		id: "long-boat",
		label: "แข่งเรือยาว",
		period: "ปลายฤดูฝน · ช่วงออกพรรษา",
		description:
			"ถ้ามองผ่านสายตาคนทั่วไปภาพการแข่งขันเรือยาวในปัจจุบันอาจดูแล้วเป็นกิจกรรมที่เน้นเรื่องความสนุก แต่ในความเป็นจริงแล้วการแข่งขันเรือยาวไม่ได้จัดขึ้นเพื่อความสนุกสนานเพียงอย่างเดียว แต่ยังแฝงไปด้วยวัตถุประสงค์อันลึกซึ้งอีกหลากหลายประการ",
		imageSrc: "/images/traditions/LongBoatRacingFestival.png",
		imageAlt: "เรือยาวและฝีพายกลางแม่น้ำ",
		imageCredit: "Thai PBS",
		x: 30,
		y: 15,
		labelSide: "right",
	},
	{
		id: "surin-elephant",
		label: "งานช้างสุรินทร์",
		period: "เดือนพฤศจิกายน · จังหวัดสุรินทร์",
		description:
			"งานช้างสุรินทร์สะท้อนความผูกพันระหว่างชุมชนกูยกับช้าง ผ่านขบวนแสดง วัฒนธรรมการเลี้ยงช้าง และเรื่องราวที่สืบทอดในพื้นที่มายาวนาน",
		imageSrc: "/images/traditions/SurinElephantFestival.png",
		imageAlt: "ขบวนช้างและผู้เลี้ยงช้างสุรินทร์",
		imageCredit: "Thai PBS | ศูนย์ข่าวภาคอีสาน",
		x: 75,
		y: 30,
		labelSide: "left",
	},
	{
		id: "candle-festival",
		label: "แห่เทียนพรรษา",
		period: "ช่วงเข้าพรรษา · ฮีตเดือนแปด",
		description:
			"การถวายเทียนสำหรับพระสงฆ์ในช่วงจำพรรษา พัฒนาเป็นงานช่างแกะสลักและขบวนแห่ขนาดใหญ่ โดยเฉพาะประเพณีแห่เทียนที่จังหวัดอุบลราชธานี",
		imageSrc: "/images/traditions/CandleParade.jpg",
		imageAlt: "ขบวนต้นเทียนแกะสลัก",
		imageCredit: "Thai PBS | C-Site",
		x: 35,
		y: 45,
		labelSide: "right",
	},
	{
		id: "rocket-festival",
		label: "บุญบั้งไฟ",
		period: "ก่อนฤดูทำนา · ฮีตเดือนหก",
		description:
			"ชุมชนทำบั้งไฟ แห่ และจุดขึ้นฟ้าตามความเชื่อเรื่องการขอฝนจากพญาแถน เป็นงานบุญที่ผูกความหวังต่อฤดูเพาะปลูกเข้ากับแรงร่วมของคนทั้งหมู่บ้าน",
		imageSrc: "/images/traditions/BunBangFaiRocketFestival.png",
		imageAlt: "การจุดบั้งไฟก่อนฤดูทำนา",
		imageCredit: "Thai PBS | The Active",
		x: 80,
		y: 80,
		labelSide: "left",
	},
	{
		id: "hae-nang-maew",
		label: "แห่นางแมว",
		period: "เมื่อฝนขาดช่วง · ไม่มีเดือนตายตัว",
		description:
			"เมื่อฝนไม่มาตามฤดูกาล ชาวบ้านจะจัดขบวนแห่ ร้องเซิ้ง และสาดน้ำตามความเชื่อเรื่องการขอฝน ปัจจุบันหลายพื้นที่ใช้ตุ๊กตาหรือสัญลักษณ์แทนสัตว์จริง",
		imageSrc: "/images/traditions/HaeNangMaewRainRitual.png",
		imageAlt: "ขบวนแห่นางแมวร่วมสมัย",
		imageCredit: "Thai PBS | ไทยบันเทิง",
		x: 50,
		y: 75,
		labelSide: "left",
	},
	{
		id: "songkran",
		label: "สงกรานต์",
		period: "เดือนเมษายน · วันขึ้นปีใหม่ไทย",
		description:
			"น้ำในประเพณีสงกรานต์เชื่อมโยงกับการสรงน้ำ ขอพร และแสดงความเคารพต่อผู้ใหญ่ แม้อยู่ก่อนฤดูฝน แต่ไม่ใช่พิธีขอฝนของชุมชน",
		imageSrc: "/images/traditions/SongkranFestival.png",
		imageAlt: "การสรงน้ำและรดน้ำขอพร",
		imageCredit: "Thai PBS News",
		x: 25,
		y: 85,
		labelSide: "right",
	},
] as const;

const DETAIL_CONTENT_VARIANTS = {
	enter: (direction: number) => ({ opacity: 0, x: direction * 64 }),
	center: { opacity: 1, x: 0 },
	exit: (direction: number) => ({ opacity: 0, x: direction * -64 }),
};

export const DroughtTraditionsSection = forwardRef<HTMLElement>((_props, ref) => {
	const sectionRef = useRef<HTMLElement>(null);
	const dialogRef = useRef<HTMLDivElement>(null);
	const closeButtonRef = useRef<HTMLButtonElement>(null);
	const triggerButtonRef = useRef<HTMLButtonElement | null>(null);
	const boundaryControls = useAnimationControls();
	const [activeMarkerId, setActiveMarkerId] = useState<string | null>(null);
	const [navigationDirection, setNavigationDirection] = useState<1 | -1>(1);
	const [hasNavigatedInModal, setHasNavigatedInModal] = useState(false);
	const selectedTradition = TRADITION_MARKERS.find((marker) => marker.id === activeMarkerId) ?? null;
	const selectedTraditionImage =
		selectedTradition && "imageSrc" in selectedTradition ? selectedTradition.imageSrc : null;
	const selectedTraditionIndex = selectedTradition
		? TRADITION_MARKERS.findIndex((marker) => marker.id === selectedTradition.id)
		: -1;
	const isModalOpen = selectedTradition !== null;

	const closeModal = useCallback(() => {
		boundaryControls.stop();
		boundaryControls.set({ x: 0 });
		setActiveMarkerId(null);
		setHasNavigatedInModal(false);
		window.requestAnimationFrame(() => triggerButtonRef.current?.focus());
	}, [boundaryControls]);

	const navigateTradition = useCallback(
		(direction: 1 | -1) => {
			const currentIndex = TRADITION_MARKERS.findIndex((marker) => marker.id === activeMarkerId);
			const nextIndex = currentIndex + direction;

			if (currentIndex < 0) return;

			if (nextIndex < 0 || nextIndex >= TRADITION_MARKERS.length) {
				void boundaryControls.start({
					x: [0, direction === 1 ? -18 : 18, 0],
					transition: {
						duration: 0.34,
						ease: [0.22, 1, 0.36, 1],
						times: [0, 0.38, 1],
					},
				});
				return;
			}

			setHasNavigatedInModal(true);
			setNavigationDirection(direction);
			setActiveMarkerId(TRADITION_MARKERS[nextIndex].id);
		},
		[activeMarkerId, boundaryControls],
	);

	useEffect(() => {
		if (!isModalOpen) return;

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		closeButtonRef.current?.focus();

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				event.preventDefault();
				closeModal();
				return;
			}

			if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
				event.preventDefault();
				navigateTradition(event.key === "ArrowRight" ? 1 : -1);
				return;
			}

			if (event.key !== "Tab") return;

			const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
			);
			if (!focusableElements?.length) return;

			const firstElement = focusableElements[0];
			const lastElement = focusableElements[focusableElements.length - 1];

			if (event.shiftKey && document.activeElement === firstElement) {
				event.preventDefault();
				lastElement.focus();
			} else if (!event.shiftKey && document.activeElement === lastElement) {
				event.preventDefault();
				firstElement.focus();
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [closeModal, isModalOpen, navigateTradition]);

	useImperativeHandle(ref, () => sectionRef.current!);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start 85%", "start 15%"],
	});

	const rotateX = useTransform(scrollYProgress, [0, 1], [24, 0]);
	const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
	const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

	return (
		<>
			<section
				id="drought-traditions"
				ref={sectionRef}
				className="relative flex min-h-0 items-start overflow-hidden bg-ink pb-16 pt-28 text-white lg:min-h-svh lg:items-center lg:py-24"
			>
				<div className="pointer-events-none absolute inset-0">
					<div className="absolute right-[-18vw] top-[-20%] size-[58vw] rounded-full bg-water/5 blur-[220px]" />
					<div className="absolute bottom-[-30%] left-[-20vw] size-[48vw] rounded-full bg-drought/5 blur-[210px]" />
				</div>

				<div className="relative grid w-full items-center gap-8 px-0 lg:grid-cols-[0.34fr_0.66fr] lg:gap-16 lg:px-8 xl:gap-24">
					<motion.header
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
						className="relative z-30 px-4 sm:px-8 lg:px-0"
					>
						<h2 className="whitespace-nowrap text-[clamp(1.9rem,8.4vw,2.75rem)] font-black leading-none tracking-tighter lg:whitespace-normal lg:text-[clamp(3.4rem,6.8vw,7rem)] lg:leading-[0.86] lg:tracking-[-0.068em]">
							<span className="text-drought lg:block lg:text-[1.45em] lg:leading-[0.72]">6</span>
							<span className="ml-2 lg:ml-0 lg:block">ประเพณี</span>
							<span className="text-white/48 lg:block lg:text-white/38">ภาคอีสาน</span>
						</h2>
						<p className="mt-3 text-sm font-semibold leading-7 text-white/55 sm:text-base sm:leading-8 lg:mt-7 lg:max-w-xs lg:border-l lg:border-drought/65 lg:pl-4 lg:text-white/42">
							กดที่วงกลมเพื่อดูรายละเอียด
						</p>
					</motion.header>

					<div className="relative flex justify-center overflow-visible perspective-[700px]">
						<motion.div
							className="relative w-full max-w-none origin-bottom lg:w-fit lg:max-w-full"
							style={{
								rotateX,
								scale,
								y,
							}}
						>
							<Image
								src="/images/traditions/isan-traditions-map.png"
								alt="ภาพแผนที่รวม 6 ประเพณีภาคอีสาน"
								width={1211}
								height={986}
								className="block h-auto w-full max-w-none object-contain lg:w-auto lg:max-h-[72svh] lg:max-w-full"
							/>

							{TRADITION_MARKERS.map((marker) => {
								const isActive = activeMarkerId === marker.id;
								const labelId = `tradition-marker-${marker.id}`;
								const dialogId = `tradition-dialog-${marker.id}`;

								return (
									<button
										key={marker.id}
										type="button"
										aria-label={`ดูรายละเอียด ${marker.label}`}
										aria-haspopup="dialog"
										aria-controls={isActive ? dialogId : undefined}
										aria-expanded={isActive}
										onClick={(event) => {
											triggerButtonRef.current = event.currentTarget;
											boundaryControls.stop();
											boundaryControls.set({ x: 0 });
											setHasNavigatedInModal(false);
											setActiveMarkerId(marker.id);
										}}
										className="group absolute z-10 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-drought focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
										style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
									>
										<span
											aria-hidden="true"
											className={cn(
												"absolute size-8 rounded-full border border-white/80 bg-ink/25 shadow-[0_4px_16px_rgba(13,20,19,0.28)] backdrop-blur-[2px] transition duration-300 group-hover:scale-110 group-hover:border-drought",
												isActive && "scale-110 border-drought bg-drought/20",
											)}
										/>
										<span
											aria-hidden="true"
											className={cn(
												"relative size-3.5 rounded-full border-2 border-ink bg-drought shadow-[0_0_0_2px_rgba(255,255,255,0.92)] transition-transform duration-300 group-hover:scale-125",
												isActive && "scale-125",
											)}
										/>

										<span
											id={labelId}
											role="tooltip"
											className={cn(
												"pointer-events-none absolute top-1/2 z-20 -translate-y-1/2 whitespace-nowrap border border-white/15 bg-ink/92 px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow-[0_8px_24px_rgba(13,20,19,0.32)] backdrop-blur-md transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100",
												marker.labelSide === "right"
													? "left-full ml-1 translate-x-1 group-hover:translate-x-0 group-focus-visible:translate-x-0"
													: "right-full mr-1 -translate-x-1 group-hover:translate-x-0 group-focus-visible:translate-x-0",
												isActive && "translate-x-0 opacity-100",
											)}
										>
											{marker.label}
										</span>
									</button>
								);
							})}
						</motion.div>
					</div>
				</div>

				<SectionEndBorder />
			</section>

			{typeof document !== "undefined" &&
				createPortal(
					<AnimatePresence>
						{selectedTradition && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.2 }}
								className="fixed inset-0 z-100 flex items-center justify-center bg-ink/82 p-4 backdrop-blur-md sm:p-8"
								onMouseDown={(event) => {
									if (event.target === event.currentTarget) closeModal();
								}}
							>
								<motion.div
									ref={dialogRef}
									id={`tradition-dialog-${selectedTradition.id}`}
									role="dialog"
									aria-modal="true"
									aria-labelledby={`tradition-title-${selectedTradition.id}`}
									initial={{ opacity: 0, y: 24, scale: 0.95, clipPath: "inset(7% 9% 7% 9%)" }}
									animate={{ opacity: 1, y: 0, scale: 1, clipPath: "inset(0% 0% 0% 0%)" }}
									exit={{ opacity: 0, y: 12, scale: 0.97, clipPath: "inset(4% 6% 4% 6%)" }}
									transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
									className="relative max-h-[calc(100svh-2rem)] w-full max-w-[48rem] overflow-x-hidden overflow-y-auto overscroll-contain border border-white/18 bg-ink-elevated text-white shadow-[0_38px_120px_rgba(0,0,0,0.68)] [clip-path:polygon(0_0,calc(100%-2rem)_0,100%_2rem,100%_100%,0_100%)] sm:overflow-hidden lg:h-[calc(100svh-4rem)] lg:max-h-none lg:max-w-none"
									onMouseDown={(event) => event.stopPropagation()}
								>
									<div className="pointer-events-none absolute inset-0 z-20 border border-white/[0.06]" />
									<div className="pointer-events-none absolute right-0 top-8 z-30 h-20 w-1 bg-drought" />

									<button
										ref={closeButtonRef}
										type="button"
										onClick={closeModal}
										aria-label="ปิดรายละเอียดประเพณี"
										className="absolute right-4 top-4 z-40 flex size-10 items-center justify-center rounded-full border border-drought/70 bg-ink/80 text-white/65 backdrop-blur-md transition hover:rotate-90 hover:bg-drought hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-5 sm:top-5"
									>
										<X aria-hidden="true" className="size-4" strokeWidth={1.8} />
									</button>

									<motion.div animate={boundaryControls} className="min-h-full lg:h-full">
										<AnimatePresence mode="wait" custom={navigationDirection}>
											<motion.div
												key={selectedTradition.id}
												custom={navigationDirection}
												variants={DETAIL_CONTENT_VARIANTS}
												initial={hasNavigatedInModal ? "enter" : false}
												animate="center"
												exit="exit"
												transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
												drag="x"
												dragConstraints={{ left: 0, right: 0 }}
												dragElastic={0.18}
												dragMomentum={false}
												dragDirectionLock
												onDragEnd={(_, info) => {
													if (info.offset.x < -56 || info.velocity.x < -600)
														navigateTradition(1);
													else if (info.offset.x > 56 || info.velocity.x > 600)
														navigateTradition(-1);
												}}
												className="grid min-h-full touch-pan-y select-none sm:grid-cols-[1.08fr_0.92fr] lg:h-full lg:min-h-0 lg:grid-cols-[minmax(0,1.35fr)_minmax(22rem,0.65fr)]"
											>
												<motion.div
													initial={hasNavigatedInModal ? false : { opacity: 0, x: -24 }}
													animate={{ opacity: 1, x: 0 }}
													transition={{
														duration: 0.52,
														delay: 0.08,
														ease: [0.22, 1, 0.36, 1],
													}}
													className="relative min-h-[14rem] overflow-hidden bg-[#d9d0bd] text-ink sm:min-h-[29rem] lg:h-full lg:min-h-0 hover:cursor-grab active:cursor-grabbing"
												>
													{selectedTraditionImage ? (
														<>
															<Image
																src={selectedTraditionImage}
																alt={selectedTradition.imageAlt}
																fill
																sizes="(min-width: 1024px) 68vw, (min-width: 640px) 54vw, 100vw"
																className="object-cover"
																priority
															/>
															<div className="absolute inset-0 bg-linear-to-t from-ink/82 via-ink/5 to-transparent" />
														</>
													) : (
														<div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_24%,rgba(241,135,23,0.34),transparent_31%),linear-gradient(145deg,rgba(255,255,255,0.34),transparent_45%),linear-gradient(25deg,rgba(23,23,20,0.07),transparent_60%)]" />
													)}
													<div
														className={cn(
															"absolute inset-4 border sm:inset-5",
															selectedTraditionImage
																? "border-white/22"
																: "border-ink/15",
														)}
													/>
													<span
														className={cn(
															"absolute right-7 top-14 text-[clamp(6rem,20vw,10rem)] font-black leading-none tracking-[-0.1em] sm:right-8 sm:top-20",
															selectedTraditionImage
																? "text-white/[0.12]"
																: "text-ink/[0.07]",
														)}
													>
														{String(selectedTraditionIndex + 1).padStart(2, "0")}
													</span>

													{!selectedTraditionImage && (
														<div
															aria-hidden="true"
															className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/15 sm:size-32"
														>
															<span className="absolute left-1/2 top-[-2rem] h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-ink/10" />
															<span className="absolute left-[-2rem] top-1/2 h-px w-[calc(100%+4rem)] -translate-y-1/2 bg-ink/10" />
															<span className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[#d9d0bd] bg-drought shadow-[0_0_0_1px_rgba(23,23,20,0.32)]" />
														</div>
													)}

													<div className="absolute inset-x-7 bottom-7 z-10 hidden sm:inset-x-8 sm:bottom-8 sm:block">
														<p
															className={cn(
																"max-w-[20rem] text-xl font-bold leading-6",
																selectedTraditionImage
																	? "text-white/82 drop-shadow-lg"
																	: "text-ink/72",
															)}
														>
															{selectedTradition.imageCredit}
														</p>
													</div>
												</motion.div>

												<motion.div
													initial={hasNavigatedInModal ? false : { opacity: 0, x: 24 }}
													animate={{ opacity: 1, x: 0 }}
													transition={{
														duration: 0.52,
														delay: 0.12,
														ease: [0.22, 1, 0.36, 1],
													}}
													className="relative z-10 flex min-h-[20.5rem] flex-col justify-center bg-ink-elevated px-5 pb-20 sm:px-8 sm:pb-20 sm:pt-10 lg:h-full lg:min-h-0 lg:px-12"
												>
													<h3
														id={`tradition-title-${selectedTradition.id}`}
														className="relative z-10 -mt-9 mr-12 w-fit bg-ink px-4 py-3 text-[clamp(1.9rem,5vw,3.25rem)] font-black leading-[0.95] tracking-[-0.055em] shadow-[12px_12px_0_rgba(241,135,23,0.16)] sm:-ml-20 sm:mt-0 sm:mr-0 sm:px-6 sm:py-4"
													>
														{selectedTradition.label}
													</h3>
													<p className="mt-7 text-base font-black leading-5 text-drought sm:mt-8">
														{selectedTradition.period}
													</p>
													<div className="mt-4 flex items-center gap-2">
														<span className="h-px w-12 bg-drought" />
														<span className="h-px flex-1 bg-white/10" />
													</div>
													<p className="mt-5 text-base font-medium leading-7 text-white/57 sm:leading-8">
														{selectedTradition.description}
													</p>
												</motion.div>
											</motion.div>
										</AnimatePresence>
									</motion.div>

									<div className="absolute bottom-4 right-4 z-40 flex items-center gap-1 border border-white/12 bg-ink/92 p-1.5 shadow-[0_10px_28px_rgba(0,0,0,0.34)] backdrop-blur-md sm:bottom-5 sm:right-5">
										<button
											type="button"
											onClick={() => navigateTradition(-1)}
											aria-label="ดูประเพณีก่อนหน้า"
											aria-disabled={selectedTraditionIndex === 0}
											className={cn(
												"flex size-9 items-center justify-center text-white/50 transition hover:bg-white/8 hover:text-drought focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-drought",
												selectedTraditionIndex === 0 && "text-white/20",
											)}
										>
											<ChevronLeft aria-hidden="true" className="size-4" />
										</button>
										<span className="min-w-14 text-center text-sm font-black tabular-nums tracking-[0.14em] text-white/30">
											<span className="text-drought">
												{String(selectedTraditionIndex + 1).padStart(2, "0")}
											</span>
											<span className="mx-1.5 text-white/15">/</span>
											{String(TRADITION_MARKERS.length).padStart(2, "0")}
										</span>
										<button
											type="button"
											onClick={() => navigateTradition(1)}
											aria-label="ดูประเพณีถัดไป"
											aria-disabled={selectedTraditionIndex === TRADITION_MARKERS.length - 1}
											className={cn(
												"flex size-9 items-center justify-center text-white/50 transition hover:bg-white/8 hover:text-drought focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-drought",
												selectedTraditionIndex === TRADITION_MARKERS.length - 1 &&
													"text-white/20",
											)}
										>
											<ChevronRight aria-hidden="true" className="size-4" />
										</button>
									</div>
								</motion.div>
							</motion.div>
						)}
					</AnimatePresence>,
					document.body,
				)}
		</>
	);
});

DroughtTraditionsSection.displayName = "DroughtTraditionsSection";
