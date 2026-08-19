import { forwardRef } from "react";
import { CartesianGrid, Line, LineChart, ReferenceDot, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "motion/react";

const CHART_DATA = [
	{ year: "2554", temp: 41 },
	{ year: "2555", temp: 42 },
	{ year: "2556", temp: 43 },
	{ year: "2557", temp: 42 },
	{ year: "2558", temp: 43 },
	{ year: "2559", temp: 45 },
	{ year: "2560", temp: 42 },
	{ year: "2561", temp: 42 },
	{ year: "2562", temp: 44 },
	{ year: "2563", temp: 44 },
];

const PEAK = CHART_DATA.reduce((highest, item) => (item.temp > highest.temp ? item : highest));
const LOWEST = Math.min(...CHART_DATA.map((item) => item.temp));

const CustomTooltip = ({ active, payload, label }: any) => {
	if (!active || !payload?.length) return null;

	return (
		<div className="min-w-36 border border-white/12 bg-[#171714]/96 px-4 py-3 text-white shadow-2xl backdrop-blur-xl">
			<p className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-white/38">พ.ศ. {label}</p>
			<div className="mt-1 flex items-end justify-between gap-5">
				<span className="text-sm font-semibold text-white/58">สูงสุด</span>
				<span className="text-2xl font-black tabular-nums text-[#f18717]">{payload[0].value}°C</span>
			</div>
		</div>
	);
};

export const TemperatureHistory = forwardRef<HTMLElement>((_props, ref) => {
	return (
		<section ref={ref} className="relative overflow-clip bg-[#1c1c1a] text-white">
			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/12" />
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute right-[-20vw] top-[6%] size-[58vw] rounded-full bg-[#f18717]/7 blur-[210px]" />
				<div className="absolute left-[-26vw] top-[44%] size-[52vw] rounded-full bg-[#f18717]/3 blur-[220px]" />
				<div className="absolute inset-x-8 top-[33%] h-px bg-white/10" />
				<div className="absolute inset-x-0 top-[66%] h-px bg-white/[0.035]" />
			</div>

			<header className="relative mx-auto flex min-h-[82svh] flex-col px-4 py-16 sm:px-8">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
					className="flex items-center justify-between gap-6"
				>
					<div className="flex items-center gap-3 text-[0.66rem] font-black uppercase tracking-[0.22em] text-[#f18717] sm:text-xs">
						<span className="h-px w-8 bg-[#f18717]" />
						<span>Thailand · 2554—2563</span>
					</div>
				</motion.div>

				<div className="flex flex-1 items-center py-14 md:py-16 lg:py-10">
					<div className="grid w-full items-end gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:gap-16 xl:gap-24">
						<motion.div
							initial={{ opacity: 0, scale: 0.98, y: 24 }}
							whileInView={{ opacity: 1, scale: 1, y: 0 }}
							viewport={{ once: true, margin: "-80px" }}
							transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
							className="relative"
						>
							<div className="flex items-start">
								<span className="text-[clamp(9.5rem,25vw,25rem)] font-black leading-[0.65] tracking-[-0.075em] text-white">
									{PEAK.temp}
								</span>
								<span className="ml-2 mt-[0.05em] text-[clamp(3rem,7vw,7rem)] font-black leading-none tracking-[-0.06em] text-[#f18717]">
									°C
								</span>
							</div>
							<div className="mt-6 flex items-center gap-4 sm:mt-8">
								<span className="text-xs font-black uppercase tracking-[0.2em] text-white/30">
									Peak year
								</span>
								<span className="h-px w-10 bg-white/14" />
								<span className="text-xl font-black tabular-nums text-white/78 sm:text-2xl">
									พ.ศ. {PEAK.year}
								</span>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 26 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-80px" }}
							transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
							className="border-l border-white/12 pl-5 sm:pl-8 lg:mb-4 lg:pl-10"
						>
							<h2 className="mt-5 text-[clamp(2.8rem,5vw,5.8rem)] font-black leading-[1.2] tracking-[-0.065em]">
								<span className="block">อุณหภูมิสูงสุด</span>
								<span className="block text-[#f18717]">ในรอบ 10 ปี</span>
							</h2>
							<p className="mt-4 max-w-xl text-sm font-medium leading-7 text-white/48 sm:text-base sm:leading-8">
								พ.ศ. 2559 คือจุดสูงสุดของทศวรรษ ขณะที่ข้อมูลทั้งชุดแกว่งอยู่ระหว่าง {LOWEST}–{PEAK.temp}
								°C
							</p>
						</motion.div>
					</div>
				</div>
			</header>

			<div className="relative border-white/12">
				<div className="mx-auto px-4 py-14 sm:px-8 lg:px-10">
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-90px" }}
						transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
					>
						<div className="mb-8 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end lg:mb-10">
							<div>
								<p className="text-[0.66rem] font-black uppercase tracking-[0.2em] text-[#f18717]">
									The decade
								</p>
								<p className="mt-3 max-w-2xl text-lg font-bold leading-8 text-white/68 sm:text-xl">
									เส้นทางของอุณหภูมิสูงสุดรายปี ไม่ได้เพิ่มขึ้นเป็นเส้นตรง
									แต่ความร้อนระดับสูงยังคงปรากฏซ้ำตลอดช่วงเวลา
								</p>
							</div>
							<span className="text-xs font-black uppercase tracking-[0.18em] text-white/40">°C</span>
						</div>

						<div className="h-97 w-full sm:h-120 lg:h-140">
							<ResponsiveContainer width="100%" height="100%">
								<LineChart data={CHART_DATA} margin={{ top: 36, right: 22, left: -14, bottom: 12 }}>
									<CartesianGrid
										vertical={false}
										stroke="rgba(255,255,255,0.075)"
										strokeDasharray="1 10"
									/>
									<XAxis
										dataKey="year"
										axisLine={{
											stroke: "#f18717",
											strokeWidth: 1,
											strokeDasharray: "4 6",
											opacity: 0.7,
										}}
										tickLine={false}
										tick={{ fill: "rgba(255,255,255,0.42)", fontSize: 12, fontWeight: 800 }}
										dy={16}
									/>
									<YAxis
										domain={[40, 46]}
										ticks={[40, 42, 44, 46]}
										axisLine={{
											stroke: "#f18717",
											strokeWidth: 1,
											strokeDasharray: "4 6",
											opacity: 0.7,
										}}
										tickLine={false}
										tick={{ fill: "rgba(255,255,255,0.22)", fontSize: 11, fontWeight: 800 }}
										tickFormatter={(value) => `${value}°`}
									/>
									<Tooltip
										content={<CustomTooltip />}
										cursor={{
											stroke: "rgba(241,135,23,0.34)",
											strokeWidth: 1,
											strokeDasharray: "3 6",
										}}
									/>
									<Line
										type="monotone"
										dataKey="temp"
										stroke="#f18717"
										strokeWidth={5}
										animationDuration={1450}
										animationEasing="ease-out"
										dot={{ r: 4, stroke: "#f18717", strokeWidth: 2, fill: "#1c1c1a" }}
										activeDot={{ r: 7, stroke: "#fff", strokeWidth: 2, fill: "#f18717" }}
									/>
									<ReferenceDot
										x={PEAK.year}
										y={PEAK.temp}
										r={8}
										fill="#f18717"
										stroke="#ffffff"
										strokeWidth={2}
										label={{
											value: `${PEAK.temp}°C`,
											position: "top",
											fill: "#f18717",
											fontSize: 14,
											fontWeight: 900,
										}}
									/>
								</LineChart>
							</ResponsiveContainer>
						</div>
					</motion.div>
				</div>
			</div>

			<footer className="relative mx-auto px-4 pb-24 pt-10 sm:px-8 md:pb-32 md:pt-12 lg:px-10 lg:pb-36">
				<div className="grid border-y border-white/12 sm:grid-cols-2 lg:grid-cols-3">
					{[
						{ label: "ช่วงข้อมูล", value: "10 ปี" },
						{ label: "ค่าต่ำสุด", value: `${LOWEST}°C` },
						{ label: "ค่าสูงสุด", value: `${PEAK.temp}°C` },
					].map((item, index) => (
						<motion.div
							key={item.label}
							initial={{ opacity: 0, y: 14 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
							className="border-b border-white/10 py-6 sm:border-r sm:px-6 lg:border-b-0 lg:px-8 first:pl-0 last:border-r-0 lg:last:pr-0"
						>
							<p className="text-xs font-black uppercase tracking-[0.18em] text-white/40">{item.label}</p>
							<p className="mt-2 text-[clamp(1.9rem,3vw,3rem)] font-black tabular-nums tracking-[-0.045em] text-white/82">
								{item.value}
							</p>
						</motion.div>
					))}
				</div>

				<div className="mt-6 flex flex-col gap-3 text-sm font-bold uppercase tracking-[0.16em] text-white/24 sm:flex-row sm:items-center sm:justify-between">
					<span>อุณหภูมิสูงสุดรายปี · ประเทศไทย · พ.ศ. 2554–2563</span>
					<span className="shrink-0">ที่มา · กรมอุตุนิยมวิทยา</span>
				</div>
			</footer>
		</section>
	);
});

TemperatureHistory.displayName = "TemperatureHistory";
