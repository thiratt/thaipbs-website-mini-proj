import { forwardRef } from "react";
import { motion } from "motion/react";
import { AlertTriangle, Droplets, Flame, ThermometerSun } from "lucide-react";
import { SectionTopline } from "@/components/editorial/SectionTopline";

const HEAT_LEVELS = [
	{
		label: "เฝ้าระวัง",
		temp: "27.0 – 32.9°C",
		icon: Droplets,
		accent: "#9ac400",
		soft: "rgba(154, 196, 0, 0.12)",
		description:
			"เมื่อสัมผัสความร้อนและทำกิจกรรมกลางแจ้งเป็นเวลานาน อาจเริ่มมีอาการอ่อนเพลีย ปวดศีรษะ ผื่นจากความร้อน บวมจากความร้อน และตะคริวจากความร้อน",
	},
	{
		label: "เตือนภัย",
		temp: "33.0 – 41.9°C",
		icon: ThermometerSun,
		accent: "#f5c400",
		soft: "rgba(245, 196, 0, 0.12)",
		description:
			"มีความเสี่ยงต่อโรคเพลียแดด (Heat exhaustion) และตะคริวจากความร้อน หากอยู่กลางแจ้งต่อเนื่องอาจพัฒนาไปสู่ฮีทสโตรก (Heat stroke)",
	},
	{
		label: "อันตราย",
		temp: "42.0 – 51.9°C",
		icon: Flame,
		accent: "#f18717",
		soft: "rgba(241, 135, 23, 0.13)",
		description:
			"ความร้อนระดับนี้ทำให้ร่างกายรับภาระสูง มีโอกาสเกิดโรคเพลียแดด ตะคริว และฮีทสโตรก โดยเฉพาะเมื่อทำกิจกรรมกลางแจ้งต่อเนื่อง",
	},
	{
		label: "อันตรายมาก",
		temp: "≥ 52.0°C",
		icon: AlertTriangle,
		accent: "#ef3b20",
		soft: "rgba(239, 59, 32, 0.14)",
		description:
			"เป็นระดับที่มีความเสี่ยงสูงมากต่อฮีทสโตรก ต้องหลีกเลี่ยงการสัมผัสความร้อนและกิจกรรมกลางแจ้งที่ต่อเนื่องเป็นเวลานาน",
	},
] as const;

export const DroughtInequalitySection = forwardRef<HTMLElement>((_props, ref) => {
	return (
		<section ref={ref} className="relative overflow-clip bg-ink text-white">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute right-[-18vw] top-[8%] size-[54vw] rounded-full bg-drought/6 blur-[200px]" />
				<div className="absolute left-[-22vw] top-[58%] size-[48vw] rounded-full bg-drought/4 blur-[210px]" />
				<div className="absolute right-[-5vw] top-[4%] hidden select-none text-[clamp(9rem,22vw,24rem)] font-black uppercase leading-none tracking-[-0.08em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.025)] lg:block">
					Unequal
				</div>
			</div>

			<div className="relative mx-auto px-4 pb-24 pt-24 sm:px-8 md:pb-32 md:pt-32 lg:px-10 lg:pb-40">
				<motion.header
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-90px" }}
					transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
					className="border-t border-white/14 pt-7 lg:pt-9"
				>
					<SectionTopline label="Heat index · Human impact" />

					<div className="mt-16 grid items-end gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 xl:gap-24">
						<h2 className="text-[clamp(4.5rem,9vw,9.5rem)] font-black leading-[0.78] tracking-[-0.075em]">
							<span className="block">ที่ของฉัน</span>
							<span className="block text-white/28">ที่ของเธอ</span>
							<span className="mt-5 block text-drought">แล้งไม่เท่ากัน</span>
						</h2>

						<div className="border-l border-white/12 pl-5 sm:pl-8 lg:mb-2 lg:pl-10">
							<p className="text-[clamp(1.3rem,2.4vw,2.15rem)] font-black leading-[1.35] tracking-[-0.03em] text-white/86">
								อุณหภูมิเดียวกัน ไม่ได้หมายถึงความเสี่ยงที่เท่ากัน
							</p>
							<p className="mt-5 max-w-xl text-sm font-medium leading-7 text-white/46 sm:text-base sm:leading-8">
								เมื่ออุณหภูมิและความชื้นเพิ่มขึ้น ภาระที่ร่างกายต้องรับก็เพิ่มตามไปด้วย
								ระดับดัชนีความร้อนจึงบอกได้ว่า “ความร้อน” เริ่มอันตรายกับเราแค่ไหน
							</p>
						</div>
					</div>
				</motion.header>

				<div className="relative mt-20 lg:mt-28">
					<div className="grid gap-12 lg:grid-cols-[0.52fr_1.48fr] lg:gap-16 xl:gap-24">
						<motion.aside
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-80px" }}
							transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
							className="lg:sticky lg:top-28 lg:self-start"
						>
							<div className="border-y border-white/12 py-6">
								<p className="text-[0.66rem] font-black uppercase tracking-[0.2em] text-white/30">
									Risk scale
								</p>
								<p className="mt-4 max-w-sm text-[clamp(2rem,3.8vw,4rem)] font-black leading-[1.2] tracking-tighter">
									ยิ่งร้อน
									<span className="block text-drought">ยิ่งเสี่ยง</span>
								</p>
								<p className="mt-5 max-w-sm text-sm font-medium leading-7 text-white/42 sm:text-base">
									ไล่จากระดับเฝ้าระวัง ไปจนถึงระดับที่อาจเป็นอันตรายต่อชีวิต
								</p>
							</div>

							<div className="mt-8 hidden lg:block">
								<div className="relative h-2 overflow-hidden bg-white/[0.045]">
									<div className="absolute inset-0 bg-[linear-gradient(90deg,#9ac400_0%,#f5c400_35%,#f18717_68%,#ef3b20_100%)]" />
								</div>
								<div className="mt-3 flex justify-between text-[0.58rem] font-black uppercase tracking-[0.16em] text-white/22">
									<span>Watch</span>
									<span>Extreme</span>
								</div>
							</div>
						</motion.aside>

						<div className="border-t border-white/14">
							{HEAT_LEVELS.map((level, index) => {
								const Icon = level.icon;
								const number = String(index + 1).padStart(2, "0");

								return (
									<motion.article
										key={level.label}
										initial={{ opacity: 0, y: 24 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true, margin: "-80px" }}
										transition={{ duration: 0.58, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
										className="group relative overflow-hidden border-b border-white/12 py-8 sm:py-10 lg:py-12"
									>
										<div
											className="pointer-events-none absolute inset-y-0 left-0 w-px opacity-70 transition-[width,opacity] duration-500 group-hover:w-1 group-hover:opacity-100"
											style={{ backgroundColor: level.accent }}
										/>
										<div
											className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
											style={{
												background: `linear-gradient(90deg, ${level.soft}, transparent 48%)`,
											}}
										/>

										<div className="relative grid gap-6 pl-5 sm:grid-cols-[3.5rem_1fr] sm:pl-7 lg:grid-cols-[4rem_0.78fr_1.22fr] lg:items-start lg:gap-8">
											<span className="pt-1 text-xs font-black tabular-nums text-white/22 transition-colors duration-300 group-hover:text-white/50">
												{number}
											</span>

											<div>
												<div className="flex items-center gap-3">
													<div
														className="flex size-9 items-center justify-center border border-white/10"
														style={{ backgroundColor: level.soft }}
													>
														<Icon
															className="size-4.5"
															style={{ color: level.accent }}
															strokeWidth={2.2}
														/>
													</div>
													<p
														className="text-sm font-black uppercase tracking-[0.16em]"
														style={{ color: level.accent }}
													>
														{level.label}
													</p>
												</div>

												<p className="mt-5 text-[clamp(2.35rem,4vw,4.3rem)] font-black leading-none tracking-[-0.055em] text-white">
													{level.temp}
												</p>
											</div>

											<p className="max-w-2xl text-sm font-medium leading-7 text-white/56 transition-colors duration-300 group-hover:text-white/76 sm:text-base sm:leading-8 lg:border-l lg:border-white/10 lg:pl-8">
												{level.description}
											</p>
										</div>
									</motion.article>
								);
							})}
						</div>
					</div>
				</div>

				<div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-5 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-white/24 sm:flex-row sm:items-center sm:justify-between">
					<span>ระดับความเสี่ยงจากดัชนีความร้อน</span>
					<span className="shrink-0">ความร้อนเดียวกัน · ผลกระทบไม่เท่ากัน</span>
				</div>
			</div>
		</section>
	);
});

DroughtInequalitySection.displayName = "DroughtInequalitySection";
