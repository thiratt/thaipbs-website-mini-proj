import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { SECTIONS, type SectionId } from "@/config/sections";
import type { ChapterNavigationProps } from "@/types";
import { cn } from "@/lib/utils";
import Image from "next/image";

function ChapterNavigation({ activeSection: externalActiveSection, onNavigate }: ChapterNavigationProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const activeSectionId = externalActiveSection ?? "home";
	const activeIndex = Math.max(
		SECTIONS.findIndex((section) => section.id === activeSectionId),
		0,
	);
	const totalSections = SECTIONS.length;
	const progressPercent = ((activeIndex + 1) / totalSections) * 100;
	const activeLabel = SECTIONS[activeIndex]?.label ?? SECTIONS[0].label;

	useEffect(() => {
		let frameId: number | null = null;

		const updateScrolledState = () => {
			frameId = null;
			const currentY = window.scrollY;

			setIsScrolled((previous) => {
				if (!previous && currentY > 32) return true;
				if (previous && currentY < 8) return false;
				return previous;
			});
		};

		const scheduleUpdate = () => {
			if (frameId !== null) return;
			frameId = window.requestAnimationFrame(updateScrolledState);
		};

		updateScrolledState();
		window.addEventListener("scroll", scheduleUpdate, { passive: true });

		return () => {
			if (frameId !== null) window.cancelAnimationFrame(frameId);
			window.removeEventListener("scroll", scheduleUpdate);
		};
	}, []);

	useEffect(() => {
		if (!isMenuOpen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setIsMenuOpen(false);
		};

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isMenuOpen]);

	const handleNavigate = (sectionId: SectionId) => {
		setIsMenuOpen(false);
		window.requestAnimationFrame(() => onNavigate?.(sectionId));
	};

	return (
		<>
			<header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: -14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
					className={cn(
						"pointer-events-auto mx-auto flex h-14 w-full items-center gap-4 rounded-2xl px-3 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 sm:h-16 sm:px-4",
						isScrolled || isMenuOpen
							? "border border-white/10 bg-ink/88 shadow-[0_14px_44px_rgba(0,0,0,0.16)] backdrop-blur-xl"
							: "border border-transparent bg-transparent",
					)}
				>
					<button
						type="button"
						onClick={() => handleNavigate("home")}
						className="group flex shrink-0 items-center text-white"
						aria-label="กลับไปหน้าหลัก"
					>
						<Image
							src="/brand/thai-pbs-logo.png"
							alt="Thai PBS"
							width={120}
							height={40}
							className="h-8 w-auto object-contain"
							loading="eager"
						/>
					</button>

					<div className="hidden h-4 w-px bg-white/16 md:block" />

					<div className="relative hidden h-6 min-w-0 flex-1 overflow-hidden md:block">
						<AnimatePresence initial={false} mode="popLayout">
							<motion.span
								key={activeLabel}
								initial={{ opacity: 0, y: 6 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -6 }}
								transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
								className="absolute inset-y-0 left-0 flex max-w-full items-center truncate font-semibold text-white/62"
							>
								{activeLabel}
							</motion.span>
						</AnimatePresence>
					</div>

					<div className="ml-auto flex min-w-0 items-center gap-3 sm:gap-4">
						<div className="hidden w-32 items-center gap-3 sm:flex lg:w-44">
							<div className="relative h-2 flex-1 overflow-hidden bg-white/20 rounded-full">
								<motion.div
									className="absolute inset-y-0 left-0 bg-drought"
									animate={{ width: `${progressPercent}%` }}
									transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
								/>
							</div>
							<div className="flex shrink-0 items-baseline gap-1 tabular-nums">
								<span className="font-black text-white">
									{String(activeIndex + 1).padStart(2, "0")}
								</span>
								<span className="font-bold text-white/35">
									/ {String(totalSections).padStart(2, "0")}
								</span>
							</div>
						</div>

						<button
							type="button"
							onClick={() => setIsMenuOpen((open) => !open)}
							className="group flex items-center gap-2.5 rounded-xl px-2 py-2 text-white transition-colors hover:bg-white/20 sm:px-3"
							aria-expanded={isMenuOpen}
							aria-controls="chapter-navigation"
							aria-label={isMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
						>
							<span className="hidden text-[0.68rem] font-black uppercase tracking-[0.16em] text-white/72 sm:inline">
								Chapters
							</span>
							<span className="flex size-8 items-center justify-center rounded-full border border-white/18 bg-white/4 transition-colors group-hover:border-white/30 group-hover:bg-white/8">
								{isMenuOpen ? (
									<X className="size-4" strokeWidth={1.8} />
								) : (
									<Menu className="size-4" strokeWidth={1.8} />
								)}
							</span>
						</button>
					</div>
				</motion.div>
			</header>

			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						id="chapter-navigation"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.28 }}
						className="fixed inset-0 z-40 scrollbar-none overflow-y-auto bg-ink text-white"
					>
						<div className="pointer-events-none absolute inset-0 overflow-hidden">
							<div className="absolute right-[-12vw] top-[8vh] size-[54vw] rounded-full bg-drought/5.5 blur-3xl" />
							<div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_55%,rgba(255,255,255,0.018)_55%,rgba(255,255,255,0.018)_56%,transparent_56%)]" />
						</div>

						<div className="relative grid min-h-svh grid-rows-[minmax(0,1fr)_auto] px-3 pb-[clamp(0.75rem,2vh,1.5rem)] pt-[clamp(5.5rem,11vh,7rem)] sm:px-8">
							<nav className="grid min-h-0 auto-rows-min gap-x-12 md:grid-cols-2 md:grid-rows-6 md:auto-rows-fr">
								{SECTIONS.map((item, index) => {
									const isActive = item.id === activeSectionId;
									const number = String(index + 1).padStart(2, "0");

									return (
										<motion.button
											key={item.id}
											type="button"
											initial={{ opacity: 0, y: 14 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{
												duration: 0.4,
												delay: 0.04 + index * 0.025,
												ease: [0.22, 1, 0.36, 1],
											}}
											onClick={() => handleNavigate(item.id)}
											className="group relative flex min-h-0 items-center border-b border-white/10 py-[clamp(0.7rem,1.6vh,1.25rem)] text-left md:py-0"
										>
											<span
												className={cn(
													"w-8 shrink-0 font-black tabular-nums transition-colors duration-300",
													isActive
														? "text-drought"
														: "text-white/28 group-hover:text-white/55",
												)}
											>
												{number}
											</span>

											<span
												className={cn(
													"min-w-0 text-xl font-bold tracking-tight transition-[color,translate] duration-300 ease-out sm:text-2xl md:text-[clamp(1.15rem,2.6vh,1.7rem)]",
													isActive
														? "translate-x-1 text-white"
														: "text-white/62 group-hover:translate-x-1 group-hover:text-white",
												)}
											>
												{item.label}
											</span>

											<span
												className={cn(
													"ml-auto h-2 shrink-0 bg-drought transition-all duration-300 rounded-full",
													isActive
														? "w-10 opacity-100"
														: "w-0 opacity-0 group-hover:w-6 group-hover:opacity-70",
												)}
											/>
										</motion.button>
									);
								})}
							</nav>

							<div className="mt-[clamp(0.65rem,1.7vh,1.35rem)] flex items-center justify-between gap-4 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/60">
								<span>Thai PBS · Next Gen</span>
								<span>Interactive Documentary · 2569</span>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

export { ChapterNavigation };
