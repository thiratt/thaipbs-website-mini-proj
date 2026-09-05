import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { SectionBackdropWord } from "@/components/editorial/SectionBackdropWord";
import { SectionEndBorder } from "@/components/editorial/SectionEndBorder";
import { DROUGHT_FOOD_ITEMS } from "@/content/drought-food";

const EASE = [0.22, 1, 0.36, 1] as const;

export const DroughtFoodSection = forwardRef<HTMLElement>((_props, ref) => {
	const reduceMotion = useReducedMotion();
	const galleryRef = useRef<HTMLUListElement>(null);
	const dragRef = useRef<{ pointerId: number; clientX: number; scrollLeft: number } | null>(null);
	const [canGoBack, setCanGoBack] = useState(false);
	const [canGoForward, setCanGoForward] = useState(true);

	const updateScrollEdges = useCallback(() => {
		const gallery = galleryRef.current;
		if (!gallery) return;
		setCanGoBack(gallery.scrollLeft > 2);
		setCanGoForward(gallery.scrollLeft + gallery.clientWidth < gallery.scrollWidth - 2);
	}, []);

	useEffect(() => {
		const gallery = galleryRef.current;
		if (!gallery) return;
		updateScrollEdges();
		const observer = new ResizeObserver(updateScrollEdges);
		observer.observe(gallery);
		return () => observer.disconnect();
	}, [updateScrollEdges]);

	const moveGallery = (direction: -1 | 1) => {
		const gallery = galleryRef.current;
		if (!gallery) return;
		const first = gallery.children[0] as HTMLElement | undefined;
		const second = gallery.children[1] as HTMLElement | undefined;
		if (!first || !second) return;
		gallery.scrollBy({
			left: direction * (second.offsetLeft - first.offsetLeft),
			behavior: reduceMotion ? "instant" : "smooth",
		});
	};

	return (
		<section
			id="drought-food"
			ref={ref}
			aria-labelledby="drought-food-title"
			className="relative isolate overflow-clip bg-ink text-white"
		>
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<SectionBackdropWord>Food</SectionBackdropWord>
			</div>

			<div className="relative px-4 pb-16 pt-28 sm:px-8 sm:pb-20 lg:pt-32">
				<motion.header
					initial={reduceMotion ? false : { opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.7, ease: EASE }}
					className="grid items-end gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
				>
					<h2
						id="drought-food-title"
						className="text-[clamp(3rem,7.2vw,8rem)] font-black leading-[1.12] tracking-[-0.065em]"
					>
						แล้งนี้
						<span className="text-drought">ที่อีสาน</span>
						<span className="block">
							กับ <span className="text-drought">8 เมนู</span>อาหาร
						</span>
						<span className="block">แนะนำ</span>
					</h2>
					<div className="max-w-lg lg:pb-2">
						<p className="text-2xl font-bold leading-snug tracking-[-0.035em] sm:text-3xl">
							กินตามฤดู <span className="text-white/55">อยู่กับผืนดิน</span>
						</p>
						<p className="mt-4 text-base leading-8 text-white/65">
							วัตถุดิบจากนา ป่า และแหล่งน้ำรอบตัว กลายเป็นสำรับที่เปลี่ยนไปตามฤดูกาล
							อาหารแต่ละจานจึงเล่าทั้งเรื่องรสชาติ และวิธีอยู่กับธรรมชาติของชุมชนอีสาน
						</p>
					</div>
				</motion.header>

				<div className="mt-10 flex items-center justify-end gap-4 border-t border-white/15 pt-5 sm:mt-12 lg:mt-14">
					<div className="flex gap-2">
						<button
							type="button"
							aria-label="เมนูก่อนหน้า"
							aria-controls="drought-food-gallery"
							disabled={!canGoBack}
							onClick={() => moveGallery(-1)}
							className="flex size-11 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-drought hover:bg-drought hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-drought disabled:cursor-default disabled:border-white/10 disabled:text-white/25 disabled:hover:bg-transparent disabled:hover:text-white/25 motion-reduce:transition-none"
						>
							<ArrowLeft aria-hidden="true" className="size-5" strokeWidth={1.6} />
						</button>
						<button
							type="button"
							aria-label="เมนูถัดไป"
							aria-controls="drought-food-gallery"
							disabled={!canGoForward}
							onClick={() => moveGallery(1)}
							className="flex size-11 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-drought hover:bg-drought hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-drought disabled:cursor-default disabled:border-white/10 disabled:text-white/25 disabled:hover:bg-transparent disabled:hover:text-white/25 motion-reduce:transition-none"
						>
							<ArrowRight aria-hidden="true" className="size-5" strokeWidth={1.6} />
						</button>
					</div>
				</div>

				<p id="food-gallery-hint" className="sr-only">
					ใช้ปุ่มก่อนหน้าและถัดไป หรือเลื่อนในแนวนอนเพื่อดูเมนูทั้งหมด
				</p>

				<ul
					ref={galleryRef}
					id="drought-food-gallery"
					aria-label="อาหารรับมือหน้าแล้ง 8 เมนู"
					aria-describedby="food-gallery-hint"
					tabIndex={-1}
					onScroll={updateScrollEdges}
					onPointerDown={(event) => {
						// Touch keeps native scrolling; mouse dragging must not select text or drag an image.
						if (event.pointerType !== "mouse" || event.button !== 0) return;
						event.preventDefault();
						event.currentTarget.scrollTo({ left: event.currentTarget.scrollLeft, behavior: "instant" });
						dragRef.current = {
							pointerId: event.pointerId,
							clientX: event.clientX,
							scrollLeft: event.currentTarget.scrollLeft,
						};
						event.currentTarget.setPointerCapture(event.pointerId);
					}}
					onPointerMove={(event) => {
						const drag = dragRef.current;
						if (!drag || drag.pointerId !== event.pointerId) return;
						event.currentTarget.scrollTo({
							left: drag.scrollLeft + drag.clientX - event.clientX,
							behavior: "instant",
						});
					}}
					onPointerUp={() => {
						dragRef.current = null;
					}}
					onPointerCancel={() => {
						dragRef.current = null;
					}}
					onLostPointerCapture={() => {
						dragRef.current = null;
					}}
					onDragStart={(event) => event.preventDefault()}
					className="relative mt-6 flex cursor-grab select-none snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [@media(pointer:fine)]:snap-none sm:gap-8"
				>
					{DROUGHT_FOOD_ITEMS.map((food) => (
						<li
							key={food.name}
							className="w-[84%] max-w-[380px] shrink-0 snap-start sm:w-[44%] lg:w-[30%] xl:w-[28%]"
						>
							<article aria-label={food.name} className="group">
								<div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-elevated">
									<Image
										src={food.imageSrc}
										alt={food.name}
										draggable={false}
										fill
										sizes="(min-width: 1440px) 380px, (min-width: 1024px) 30vw, (min-width: 640px) 44vw, 84vw"
										className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
									/>
								</div>
								<h3 className="mt-5 text-2xl font-bold leading-[1.4] tracking-[-0.035em] sm:text-[1.7rem]">
									{food.name}
								</h3>
								<p className="text-[0.9375rem] leading-7 text-white/65">{food.description}</p>
							</article>
						</li>
					))}
				</ul>
			</div>
			<SectionEndBorder />
		</section>
	);
});

DroughtFoodSection.displayName = "DroughtFoodSection";
