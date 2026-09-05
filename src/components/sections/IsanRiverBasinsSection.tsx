import { forwardRef, useState } from "react";
import Image from "next/image";
import { NewTabIcon } from "@/components/ui/new-tab-icon";
import { motion, useReducedMotion } from "motion/react";
import { SectionBackdropWord } from "@/components/editorial/SectionBackdropWord";
import { SectionEndBorder } from "@/components/editorial/SectionEndBorder";
import { RIVER_STORY_VIDEOS } from "@/content/river-basins";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const BASIN_STORIES = [
	{
		id: "chi",
		name: "ชี",
		headline: "สายน้ำกลางอีสานหล่อเลี้ยงผืนดินเกษตร",
		description:
			"แม่น้ำชีและลำน้ำสาขาเชื่อมพื้นที่เกษตรกับชุมชนในอีสานตอนกลาง ก่อนน้ำจะไหลไปรวมกับแม่น้ำมูลที่จังหวัดอุบลราชธานี",
		drought: "เมื่อฝนทิ้งช่วง น้ำในลำน้ำและแหล่งเก็บน้ำจึงเป็นต้นทุนสำคัญของการเพาะปลูก",
		alt: "ภาพประกอบลุ่มน้ำชี แสดงสายน้ำ พื้นที่เกษตร และแหล่งเก็บน้ำ",
	},
	{
		id: "mun",
		name: "มูล",
		headline: "รับน้ำจากหลายทางส่งต่อชีวิตสู่ปลายน้ำ",
		description:
			"แม่น้ำมูลไหลผ่านอีสานตอนล่าง รับน้ำจากแม่น้ำชีและลำน้ำสาขา ก่อนไหลลงสู่แม่น้ำโขงที่จังหวัดอุบลราชธานี",
		drought: "น้ำสายเดียวรองรับทั้งไร่นา เมือง และชุมชน การจัดสรรน้ำในฤดูแล้งจึงต้องมองความต้องการตลอดลำน้ำ",
		alt: "ภาพประกอบลุ่มน้ำมูล แสดงเครือข่ายสายน้ำ การเกษตร และชุมชน",
	},
	{
		id: "mekong",
		name: "โขง",
		headline: "สายน้ำริมพรมแดนที่ชีวิตสองฝั่งพึ่งพา",
		description:
			"แม่น้ำโขงเป็นพรมแดนไทย–ลาวในหลายช่วงของภาคอีสาน และรับน้ำจากแม่น้ำมูล เป็นทั้งแหล่งน้ำ แหล่งอาหาร และพื้นที่ทำกินของชุมชนริมฝั่ง",
		drought: "การเปลี่ยนแปลงของระดับน้ำเชื่อมโยงกับการหาปลาและการทำเกษตรริมฝั่ง เรื่องน้ำจึงไม่จบแค่พรมแดน",
		alt: "ภาพประกอบลุ่มน้ำโขง แสดงสายน้ำและวิถีชีวิตของชุมชนริมฝั่ง",
	},
] as const;

export const IsanRiverBasinsSection = forwardRef<HTMLElement>((_props, ref) => {
	const reduceMotion = useReducedMotion();
	const [selectedBasin, setSelectedBasin] = useState<(typeof BASIN_STORIES)[number]["id"]>(BASIN_STORIES[0].id);
	const selectedIndex = BASIN_STORIES.findIndex((basin) => basin.id === selectedBasin);
	const basinTransition = { duration: reduceMotion ? 0 : 0.4, ease: EASE };
	const getBasinMotion = (index: number) => ({
		opacity: index === selectedIndex ? 1 : 0,
		// Park neighboring stories on their own side, ready for either navigation direction.
		x: reduceMotion ? 0 : Math.sign(index - selectedIndex) * 32,
	});

	return (
		<section
			id="isan-basins"
			ref={ref}
			aria-labelledby="isan-basins-title"
			className="relative isolate overflow-clip bg-ink text-white"
		>
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<SectionBackdropWord>Isan</SectionBackdropWord>
			</div>

			<div className="relative px-4 pb-16 pt-28 sm:px-8 sm:pb-20 lg:pt-32">
				<motion.header
					initial={reduceMotion ? false : { opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.6, ease: EASE }}
					className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16"
				>
					<h2
						id="isan-basins-title"
						className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-black leading-[1.15] tracking-[-0.065em]"
					>
						ลุ่มน้ำ<span className="text-drought">อีสาน</span>
					</h2>
					<div className="max-w-lg">
						<p className="text-xl font-bold leading-snug tracking-[-0.025em]">
							ต่างสายน้ำ <span className="text-white/55">แต่เชื่อมถึงกัน</span>
						</p>
						<p className="mt-3 text-base leading-7 text-white/65">
							ชีไหลรวมกับมูล ก่อนมูลไหลสู่โขง เส้นทางน้ำเชื่อมผืนดินและผู้คน
							ทำให้สิ่งที่เกิดขึ้นต้นทางส่งต่อไปถึงปลายทาง
						</p>
					</div>
				</motion.header>

				<div className="mt-8 grid min-w-0 gap-y-6 lg:mt-10 lg:grid-cols-[0.9fr_1.1fr] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-7">
					<div
						role="group"
						aria-label="เลือกลุ่มน้ำ"
						className="relative grid w-full max-w-lg grid-cols-3 border-b border-white/15 lg:col-start-1 lg:row-start-1"
					>
						{BASIN_STORIES.map((basin) => (
							<button
								key={basin.id}
								type="button"
								aria-pressed={selectedBasin === basin.id}
								aria-controls={`isan-basin-${basin.id} isan-basin-artwork`}
								onClick={() => setSelectedBasin(basin.id)}
								className={cn(
									"min-h-14 cursor-pointer px-2 pb-4 pt-2 text-center text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight tracking-[-0.045em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-drought motion-reduce:transition-none",
									selectedBasin === basin.id ? "text-drought" : "text-white/45 hover:text-white/85",
								)}
							>
								<span className="sr-only">ลุ่มน้ำ</span>
								{basin.name}
							</button>
						))}
						<motion.span
							aria-hidden="true"
							initial={false}
							animate={{ x: `${selectedIndex * 100}%` }}
							transition={basinTransition}
							className="pointer-events-none absolute -bottom-px left-0 h-0.5 w-1/3 bg-drought"
						/>
					</div>

					<div
						id="isan-basin-artwork"
						className="relative grid min-w-0 items-center lg:col-start-2 lg:row-span-2 lg:row-start-1"
					>
						{BASIN_STORIES.map((basin, index) => (
							<motion.div
								key={basin.id}
								aria-hidden={selectedBasin !== basin.id}
								initial={false}
								animate={getBasinMotion(index)}
								transition={basinTransition}
								className="pointer-events-none col-start-1 row-start-1 min-w-0"
							>
								<Image
									src={`/images/basins/${basin.id}-basin.png`}
									alt={basin.alt}
									width={3200}
									height={2187}
									sizes="(min-width: 1280px) 640px, (min-width: 1024px) 52vw, (min-width: 640px) 600px, calc(100vw - 32px)"
									className="mx-auto h-[clamp(12rem,48vw,20rem)] w-full max-w-[640px] object-contain lg:h-[clamp(17rem,42svh,25rem)]"
								/>
							</motion.div>
						))}
					</div>

					{/* Keep all stories in one grid cell so switching never changes the reading area's height. */}
					<div className="grid min-w-0 lg:col-start-1 lg:row-start-2">
						{BASIN_STORIES.map((basin, index) => {
							const isSelected = selectedBasin === basin.id;

							return (
								<motion.article
									key={basin.id}
									id={`isan-basin-${basin.id}`}
									aria-labelledby={`isan-basin-${basin.id}-title`}
									aria-hidden={!isSelected}
									inert={!isSelected}
									initial={false}
									animate={getBasinMotion(index)}
									transition={basinTransition}
									className={cn(
										"col-start-1 row-start-1 min-w-0",
										isSelected ? "relative z-10" : "pointer-events-none",
									)}
								>
									<div className="max-w-lg">
										<h3
											id={`isan-basin-${basin.id}-title`}
											className="whitespace-pre-line text-2xl font-bold leading-[1.4] tracking-[-0.035em]"
										>
											<span className="sr-only">ลุ่มน้ำ{basin.name} — </span>
											{basin.headline}
										</h3>
										<p className="mt-4 text-base leading-7 text-white/65">{basin.description}</p>
										<p className="mt-5 border-l-2 border-drought/70 pl-4 text-sm leading-7 text-white/80">
											{basin.drought}
										</p>
									</div>
								</motion.article>
							);
						})}
					</div>
				</div>

				<div className="mt-12 border-t border-white/15 pt-8 sm:mt-16 sm:pt-10">
					<div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
						<h3 className="text-3xl font-black leading-tight tracking-[-0.045em] sm:text-4xl">
							เรื่องราวจาก<span className="text-drought">สายน้ำ</span>
						</h3>
						<p className="max-w-md text-base leading-8 text-white/65">
							สำรวจวิถีชีวิตและวัฒนธรรมที่ผูกพันกับแม่น้ำผ่านสารคดีสั้น
						</p>
					</div>

					<div className="mt-8 grid gap-x-6 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
						{RIVER_STORY_VIDEOS.map((video) => (
							<motion.div
								key={video.href}
								initial={reduceMotion ? false : { opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.15 }}
								transition={{ duration: reduceMotion ? 0 : 0.55, ease: EASE }}
								className="min-w-0"
							>
								<div className="relative aspect-video overflow-hidden rounded-xl bg-ink-elevated">
									<iframe
										src={video.src}
										title={video.title}
										loading="lazy"
										className="absolute inset-0 h-full w-full border-0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										referrerPolicy="strict-origin-when-cross-origin"
										allowFullScreen
									/>
								</div>
								<a
									href={video.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`ดู ${video.title} บน YouTube (เปิดในแท็บใหม่)`}
									className="group mt-2 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-medium text-white/65 transition-colors hover:text-drought focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-drought motion-reduce:transition-none"
								>
									ดูบน YouTube
									<NewTabIcon />
								</a>
							</motion.div>
						))}
					</div>
				</div>
			</div>
			<SectionEndBorder />
		</section>
	);
});

IsanRiverBasinsSection.displayName = "IsanRiverBasinsSection";
