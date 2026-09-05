import { forwardRef, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { SectionBackdropWord } from "@/components/editorial/SectionBackdropWord";
import { SectionEndBorder } from "@/components/editorial/SectionEndBorder";
import { SourceAttribution } from "@/components/editorial/SourceAttribution";
import { HUMAN_DROUGHT_CAUSES, NATURAL_DROUGHT_CAUSES } from "@/content/drought-overview";
import humanImage from "../../../public/images/overview/human.jpg";
import naturalImage from "../../../public/images/overview/natural.jpg";
import openingImage from "../../../public/images/overview/opening.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;
const CAUSE_CHAPTERS = [
	{
		id: "natural",
		title: "ธรรมชาติ",
		lead: "เกิดขึ้นจากระบบธรรมชาติที่เปลี่ยนไป",
		image: naturalImage,
		alt: "เมฆฝนเหนือแนวภูเขาและผืนป่า",
		causes: NATURAL_DROUGHT_CAUSES,
	},
	{
		id: "human",
		title: "การกระทำของมนุษย์",
		lead: "มนุษย์ทำให้ความแห้งแล้งหนักขึ้นได้",
		image: humanImage,
		alt: "กลุ่มควันจากปล่องโรงงานใต้ท้องฟ้าสีส้ม",
		causes: HUMAN_DROUGHT_CAUSES,
	},
] as const;

export const DroughtCausesSection = forwardRef<HTMLElement>((_props, ref) => {
	const reduceMotion = useReducedMotion();
	const sceneRef = useRef<HTMLDivElement>(null);
	const naturalRef = useRef<HTMLElement>(null);
	const humanRef = useRef<HTMLElement>(null);
	const { scrollYProgress: sceneProgress } = useScroll({
		target: sceneRef,
		offset: ["start start", "end end"],
	});
	const { scrollYProgress: naturalProgress } = useScroll({
		target: naturalRef,
		offset: ["start end", "start start"],
	});
	const { scrollYProgress: humanProgress } = useScroll({
		target: humanRef,
		offset: ["start end", "start start"],
	});
	const sceneY = useTransform(sceneProgress, [0, 1], [-12, 12]);
	const naturalOpacity = useTransform(naturalProgress, (progress) =>
		reduceMotion ? Number(progress >= 0.7) : Math.max(0, Math.min(1, (progress - 0.3) / 0.5)),
	);
	const humanOpacity = useTransform(humanProgress, (progress) =>
		reduceMotion ? Number(progress >= 0.7) : Math.max(0, Math.min(1, (progress - 0.3) / 0.5)),
	);

	return (
		<section
			id="drought-causes"
			ref={ref}
			aria-labelledby="drought-causes-title"
			className="relative isolate overflow-clip bg-ink text-white"
		>
			<div ref={sceneRef} className="relative">
				{/* One sticky canvas connects the scenes without taking over scrolling. */}
				<div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
					<div className="sticky top-0 h-svh overflow-hidden">
						<motion.div className="absolute -inset-4" style={{ y: reduceMotion ? 0 : sceneY }}>
							<Image
								src={openingImage}
								alt=""
								fill
								sizes="(min-width: 1024px) 100vw, 1px"
								placeholder="blur"
								className="object-cover"
							/>
							<motion.div className="absolute inset-0" style={{ opacity: naturalOpacity }}>
								<Image
									src={naturalImage}
									alt=""
									fill
									sizes="(min-width: 1024px) 100vw, 1px"
									placeholder="blur"
									className="object-cover"
								/>
							</motion.div>
							<motion.div className="absolute inset-0" style={{ opacity: humanOpacity }}>
								<Image
									src={humanImage}
									alt=""
									fill
									sizes="(min-width: 1024px) 100vw, 1px"
									placeholder="blur"
									className="object-cover object-[38%_center]"
								/>
							</motion.div>
						</motion.div>
						<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,23,20,0.42)_0%,rgba(23,23,20,0.38)_38%,rgba(23,23,20,0.88)_62%,rgba(23,23,20,0.96)_100%)]" />
						<div className="absolute inset-0 bg-linear-to-t from-ink/75 via-transparent to-ink/20" />
					</div>
				</div>

				<header className="relative flex min-h-[max(34rem,80svh)] items-end overflow-hidden px-4 pb-14 pt-32 sm:px-8 sm:pb-16 lg:min-h-svh lg:px-10 lg:pb-[12svh]">
					<div aria-hidden="true" className="pointer-events-none absolute inset-0 lg:hidden">
						<Image
							src={openingImage}
							alt=""
							fill
							sizes="(min-width: 1024px) 1px, (orientation: portrait) 140vh, 100vw"
							placeholder="blur"
							className="object-cover object-[38%_center]"
						/>
						<div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-ink/15" />
					</div>
					<SectionBackdropWord>Causes</SectionBackdropWord>
					<motion.div
						initial={reduceMotion ? false : { opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: reduceMotion ? 0 : 0.75, ease: EASE }}
						className="relative grid w-full items-end gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 xl:gap-28"
					>
						<h2
							id="drought-causes-title"
							className="text-[clamp(3.7rem,8.5vw,9rem)] font-black leading-[1.08] tracking-[-0.065em]"
						>
							<span className="block">สาเหตุของ</span>
							<span className="block text-drought">ภัยแล้ง</span>
						</h2>
						<p className="text-base font-medium leading-8 text-white/80 lg:pb-2 lg:text-xl lg:leading-9">
							ภัยแล้งไม่ได้เกิดจากปัจจัยเดียว
							<br />
							แต่เป็นผลจากทั้งธรรมชาติและกิจกรรมของมนุษย์ที่ซ้อนทับกัน
						</p>
					</motion.div>
				</header>

				{CAUSE_CHAPTERS.map((chapter, index) => (
					<article
						key={chapter.id}
						ref={index === 0 ? naturalRef : humanRef}
						aria-labelledby={`drought-cause-${chapter.id}`}
						className="relative bg-ink lg:grid lg:min-h-[135svh] lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:bg-transparent lg:px-10 lg:pb-[22svh] lg:pt-[18svh] xl:gap-28"
					>
						<div className="relative flex min-h-96 flex-col justify-end overflow-hidden px-4 pb-8 pt-24 sm:min-h-112 sm:px-8 sm:pb-10 lg:sticky lg:top-[32svh] lg:min-h-0 lg:self-start lg:overflow-visible lg:p-0">
							<div className="absolute inset-0 lg:hidden">
								<Image
									src={chapter.image}
									alt={chapter.alt}
									fill
									sizes="(min-width: 1024px) 1px, (min-width: 640px) 100vw, 640px"
									placeholder="blur"
									className="object-cover object-[38%_center]"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-ink via-ink/25 to-ink/10" />
								<div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-ink to-transparent" />
							</div>
							<div className="relative max-w-xl lg:[text-shadow:0_2px_24px_rgba(0,0,0,0.4)]">
								<h3
									id={`drought-cause-${chapter.id}`}
									className="text-[clamp(2.75rem,5.5vw,5.75rem)] font-black leading-[1.15] tracking-tighter"
								>
									{chapter.id === "human" ? (
										<>
											การกระทำ<span className="block">ของมนุษย์</span>
										</>
									) : (
										chapter.title
									)}
								</h3>
								<p className="mt-5 max-w-sm text-base font-medium leading-7 text-white/90 lg:text-lg lg:leading-8">
									{chapter.lead}
								</p>
							</div>
						</div>

						<ul className="px-4 pb-16 sm:px-8 sm:pb-20 lg:px-0 lg:pb-0">
							{chapter.causes.map((cause) => (
								<motion.li
									key={cause}
									initial={reduceMotion ? false : { opacity: 0, y: 16 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.15 }}
									transition={{ duration: reduceMotion ? 0 : 0.55, ease: EASE }}
									className="border-t border-white/20 py-6 sm:py-7 lg:py-8"
								>
									<p className="text-base font-medium leading-8 text-white/85 sm:text-lg sm:leading-9">
										{cause}
									</p>
								</motion.li>
							))}
						</ul>
					</article>
				))}
			</div>

			<footer className="relative bg-ink px-4 py-8 sm:px-8 lg:px-10 lg:py-10">
				<SourceAttribution>
					หนังสืออยู่กับภัยใกล้ตัว สำนักป้องกันและบรรเทาสาธารณภัย กรุงเทพมหานคร
				</SourceAttribution>
			</footer>
			<SectionEndBorder />
		</section>
	);
});

DroughtCausesSection.displayName = "DroughtCausesSection";
