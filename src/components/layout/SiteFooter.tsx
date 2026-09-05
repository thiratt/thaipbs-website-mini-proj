import { forwardRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import itMsuLogo from "../../../public/brand/it-msu-logo.webp";
import msuLogo from "../../../public/brand/msu-logo.png";
import thaiPbsLocalLogo from "../../../public/brand/thai-pbs-locals.png";
import thaiPbsLogo from "../../../public/brand/thai-pbs-logo.png";

const EASE = [0.22, 1, 0.36, 1] as const;

const FOOTER_LOGOS = [
	{ src: thaiPbsLogo, alt: "ไทยพีบีเอส" },
	{ src: thaiPbsLocalLogo, alt: "Thai PBS Local" },
	{ src: msuLogo, alt: "มหาวิทยาลัยมหาสารคาม" },
	{ src: itMsuLogo, alt: "คณะวิทยาการสารสนเทศ มหาวิทยาลัยมหาสารคาม" },
] as const;

const FOOTER_CREDITS = [
	{ thai: "เกียรติศักดิ์ ไชยศิรินทร์", english: "Kaittisak Chaikirin" },
	{ thai: "ชัยชนะ ขนานแข็ง", english: "Chaichana Khanankhang" },
	{ thai: "อนุชิต มาตรพระคลัง", english: "Anuchit Matphrakhlang" },
	{ thai: "ลักษมณ ภูสีทอง", english: "Laksamon Phusithong" },
	{ thai: "สุพิชญา คูคำ", english: "Supichaya Kukam" },
	{ thai: "เขมิกา โพธิ์ษา", english: "Khemika Phosa" },
	{ thai: "มณฑณา สิงห์ชู", english: "Monthana Singchu" },
] as const;

const SiteFooter = forwardRef<HTMLElement>((_props, ref) => {
	const reduceMotion = useReducedMotion();

	return (
		<footer
			ref={ref}
			className="relative overflow-hidden bg-[linear-gradient(180deg,#171714_0%,#0d1517_100%)] text-white"
		>
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute right-[-22vw] top-[-18vw] size-[54vw] rounded-full bg-drought/5 blur-[220px]" />
				<div className="absolute bottom-[-28vw] left-[-24vw] size-[58vw] rounded-full bg-water/4 blur-[240px]" />
				<div className="absolute bottom-[12%] right-[-24vw] size-[48vw] rounded-full bg-sprout/3 blur-[220px]" />
			</div>

			<div className="relative px-4 pb-10 sm:px-8">
				<div className="grid gap-10 py-16 lg:grid-cols-[1.18fr_0.82fr] lg:items-end lg:gap-20 xl:gap-28">
					<motion.h2
						initial={reduceMotion ? false : { opacity: 0, x: -26 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-90px" }}
						transition={{ duration: reduceMotion ? 0 : 0.72, ease: EASE }}
						className="text-[clamp(3.8rem,8.3vw,9rem)] font-black leading-[1.2] tracking-[-0.078em]"
					>
						แล้งไม่ใช่
						<span className="block text-drought">เรื่องของน้ำ</span>
						<span className="block text-white/30">เพียงอย่างเดียว</span>
					</motion.h2>

					<motion.div
						initial={reduceMotion ? false : { opacity: 0, y: 18 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-90px" }}
						transition={{ duration: reduceMotion ? 0 : 0.65, delay: 0.08, ease: EASE }}
						className="max-w-xl lg:pb-3"
					>
						<p className="text-[clamp(1.25rem,2.25vw,2rem)] font-black leading-[1.48] tracking-[-0.02em] text-white/75">
							มันเชื่อมโยงอากาศ อาชีพ รายได้ วัฒนธรรม อาหาร และโอกาสที่จะฟื้นตัวของแต่ละพื้นที่
						</p>
						<p className="mt-6 max-w-lg border-l border-drought/65 pl-5 text-sm font-medium leading-7 text-white/50 sm:text-base sm:leading-8">
							เมื่อทรัพยากรและความพร้อมไม่เท่ากัน ภัยแล้งครั้งเดียวกันจึงไม่เคยส่งผลกับทุกคนเท่ากัน
						</p>
					</motion.div>
				</div>

				<div className="grid gap-12 border-t border-white/15 py-10 sm:py-12 lg:grid-cols-2">
					<motion.section
						initial={reduceMotion ? false : { opacity: 0, y: 18 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: reduceMotion ? 0 : 0.62, ease: EASE }}
						aria-labelledby="footer-credits-heading"
					>
						<div className="mb-4 flex items-center gap-3">
							<span aria-hidden="true" className="h-5 w-1 rounded-full bg-drought" />
							<h3 id="footer-credits-heading" className="text-lg font-semibold text-white/90">
								จัดทำโดย
							</h3>
						</div>
						<ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
							{FOOTER_CREDITS.map((name) => (
								<li key={name.thai} className="min-w-0">
									<p className="text-base font-medium leading-7 text-white/85 sm:text-lg">
										{name.thai}
									</p>
									<p lang="en" className="mt-1 text-sm font-normal leading-5 text-white/50">
										{name.english}
									</p>
								</li>
							))}
						</ul>
					</motion.section>

					<motion.section
						initial={reduceMotion ? false : { opacity: 0, y: 18 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: reduceMotion ? 0 : 0.62, delay: 0.06, ease: EASE }}
						aria-labelledby="footer-collaboration-heading"
						className="lg:border-l lg:border-white/12 lg:pl-8"
					>
						<div className="mb-7 flex items-center gap-3">
							<span aria-hidden="true" className="h-5 w-1 rounded-full bg-water" />
							<h3 id="footer-collaboration-heading" className="text-lg font-semibold text-white/90">
								ความร่วมมือ
							</h3>
						</div>
						<div className="flex flex-wrap items-center gap-x-7 gap-y-6">
							{FOOTER_LOGOS.map((logo) => (
								<Image
									key={logo.alt}
									src={logo.src}
									alt={logo.alt}
									loading="lazy"
									sizes="96px"
									className="h-auto max-h-16 w-auto max-w-24 object-contain"
								/>
							))}
						</div>
						<p className="mt-8 text-base font-medium leading-8 text-white/50 sm:text-lg">
							ศูนย์สร้างสรรค์สื่อเพื่อสาธารณะ มหาวิทยาลัยมหาสารคาม
							<span className="mt-1 block">ร่วมกับ สำนักเครือข่ายและการมีส่วนร่วมสาธารณะ ไทยพีบีเอส</span>
						</p>
					</motion.section>
				</div>

				<div className="flex flex-row items-start justify-between gap-3 border-t border-white/10 pt-5 text-sm font-medium text-white/45">
					<span className="shrink-0 text-[15px]">แล้งเราไม่เท่ากัน</span>

					<span className="text-right sm:whitespace-nowrap">
						<span className="block sm:inline">© 2569 Longform Article Project</span>{" "}
						<span className="block sm:inline">by New Gen Team</span>
					</span>
				</div>
			</div>
		</footer>
	);
});

SiteFooter.displayName = "SiteFooter";

export { SiteFooter };
