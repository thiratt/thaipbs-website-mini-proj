import { forwardRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { SectionBackdropWord } from "@/components/editorial/SectionBackdropWord";
import { SectionEndBorder } from "@/components/editorial/SectionEndBorder";

const EASE = [0.22, 1, 0.36, 1] as const;

const ThailandRiverBasinsSection = forwardRef<HTMLElement>((_props, ref) => {
	const reduceMotion = useReducedMotion();

	return (
		<section
			id="thailand-basins"
			ref={ref}
			aria-labelledby="thailand-basins-title"
			className="relative isolate overflow-clip bg-ink text-white"
		>
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<SectionBackdropWord>Basins</SectionBackdropWord>
				<div className="absolute right-[-12vw] top-[8%] size-[52vw] rounded-full bg-water/5 blur-[160px]" />
			</div>

			<div className="relative mx-auto px-4 pb-16 pt-28 sm:px-8 sm:pb-20 lg:flex lg:h-svh lg:flex-col lg:pb-6 lg:pt-24">
				<div className="grid items-center gap-10 lg:min-h-0 lg:flex-1 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-16">
					<motion.div
						initial={reduceMotion ? false : { opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.7, ease: EASE }}
						className="relative z-10 lg:py-1"
					>
						<h2
							id="thailand-basins-title"
							className="text-[clamp(3.75rem,7.7vw,8rem)] font-black leading-[1.15] tracking-[-0.065em] lg:text-[clamp(2.5rem,min(8vw,11svh),8rem)]"
						>
							มารู้จัก
							<br />
							<span className="ml-4 text-drought">ลุ่มน้ำ</span>ทั่วไทย
						</h2>
						<p className="mt-7 max-w-lg text-base font-medium leading-8 text-white/65 sm:mt-9 lg:mt-8 lg:max-w-[42rem] lg:text-[clamp(1.125rem,min(1.25vw,2.7svh),1.12rem)] lg:leading-[1.75]">
							เมื่อวันที่ 11 กุมภาพันธ์ 2564 พระราชกฤษฎีกากำหนดลุ่มน้ำ พ.ศ.2564
							ได้แบ่งพื้นที่ลุ่มน้ำของประเทศไทยใหม่ เพื่อให้การบริหารจัดการน้ำสอดคล้องกับวิถีชีวิตประชาชน
							โดยกำหนดให้มี <strong className="font-bold text-drought">22 ลุ่มน้ำหลัก</strong> และ{" "}
							<strong className="font-bold text-drought">353 ลุ่มน้ำสาขา</strong>
						</p>

						<blockquote className="mt-6 max-w-lg border-l-2 border-drought pl-5 text-base leading-8 text-white/85 lg:mt-8 lg:max-w-[42rem] lg:text-[clamp(1.125rem,min(1.15vw,2.5svh),1.375rem)] lg:leading-[1.75]">
							<p className="italic">
								“ถือเป็นการเปลี่ยนแปลงครั้งสำคัญในรอบ 3 ทศวรรษ
								เพื่อการจัดการทรัพยากรน้ำที่ยั่งยืนและครอบคลุมพื้นที่กว่า 500,000 ตร.กม. ทั่วประเทศ”
							</p>
						</blockquote>
					</motion.div>

					<motion.figure
						initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.97 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						viewport={{ once: true, amount: 0.15 }}
						transition={{ duration: 0.9, ease: EASE }}
						className="relative mx-auto w-full max-w-[620px] lg:h-full lg:min-h-0"
					>
						<Image
							src="/images/basins/thailand-river-basins.png"
							alt="ภาพประกอบประเทศไทย แสดงภูเขา สายน้ำ พื้นที่เกษตร เมือง และผู้คนที่ใช้น้ำ"
							width={2187}
							height={3200}
							sizes="(min-width: 1280px) 560px, (min-width: 1024px) 50vw, (min-width: 640px) 480px, 100vw"
							className="mx-auto h-auto max-h-[72svh] w-auto max-w-full object-contain lg:h-full lg:max-h-full lg:w-full"
						/>
					</motion.figure>
				</div>
			</div>
			<SectionEndBorder />
		</section>
	);
});

ThailandRiverBasinsSection.displayName = "ThailandRiverBasinsSection";

export { ThailandRiverBasinsSection };
