import { forwardRef } from 'react'
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { motion } from 'motion/react'
import { ThermometerSun } from 'lucide-react'

const CHART_DATA = [
  { year: '2554', temp: 41 },
  { year: '2555', temp: 42 },
  { year: '2556', temp: 43 },
  { year: '2557', temp: 42 },
  { year: '2558', temp: 43 },
  { year: '2559', temp: 45 },
  { year: '2560', temp: 42 },
  { year: '2561', temp: 42 },
  { year: '2562', temp: 44 },
  { year: '2563', temp: 44 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl border border-white/10 bg-[#171717]/95 p-4 text-white shadow-xl backdrop-blur-md">
        <div className="mb-2 flex items-center gap-2 border-b border-white/10 pb-2">
          <span className="font-bold text-white/80">ปี {label}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-orange-500/10 p-2">
            <ThermometerSun className="text-orange-400" size={24} />
          </div>
          <div>
            <p className="text-sm text-white/50">อุณหภูมิสูงสุด</p>
            <p className="text-2xl font-black text-orange-400">
              {payload[0].value}°C
            </p>
          </div>
        </div>
      </div>
    )
  }
  return null
}

export const TemperatureHistory = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#232323] px-5 py-20 text-white md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-10 text-center md:mb-14"
        >
          <h2 className="text-3xl font-black tracking-tight md:text-5xl">
            สถิติ <span className="text-[#f18717]">อุณหภูมิสูง</span>{' '}
            ที่สุดในรอบ 10 ปีของประเทศไทย
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] px-3 py-6 sm:px-5 md:px-8 md:py-10"
        >
          <div className="h-[320px] w-full md:h-[420px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={CHART_DATA}
                margin={{ top: 32, right: 18, left: -12, bottom: 8 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="rgba(255,255,255,0.1)"
                />
                <XAxis
                  dataKey="year"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'rgba(255,255,255,0.58)', fontSize: 13 }}
                  dy={12}
                />
                <YAxis
                  domain={[40, 46]}
                  ticks={[40, 41, 42, 43, 44, 45, 46]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'rgba(255,255,255,0.58)', fontSize: 13 }}
                  tickFormatter={(value) => `${value}°`}
                />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{
                    stroke: 'rgba(249,115,22,0.55)',
                    strokeWidth: 1,
                    strokeDasharray: '4 4',
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="temp"
                  stroke="#f18717"
                  strokeWidth={4}
                  dot={{
                    r: 4,
                    stroke: '#f18717',
                    strokeWidth: 2,
                    fill: '#232323',
                  }}
                  activeDot={{
                    r: 7,
                    stroke: '#ffffff',
                    strokeWidth: 2,
                    fill: '#f18717',
                  }}
                />

                <ReferenceDot
                  x="2559"
                  y={45}
                  r={7}
                  fill="#f18717"
                  stroke="#ffffff"
                  strokeWidth={2}
                  label={{
                    value: '45°C',
                    position: 'top',
                    fill: '#fb923c',
                    fontSize: 14,
                    fontWeight: 800,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <p className="mt-5 text-center text-xs leading-relaxed text-white/45 md:text-sm">
            ที่มา : กรมอุตุนิยมวิทยา · อุณหภูมิสูงสุดรายปีในช่วง พ.ศ. 2554–2563
          </p>
        </motion.div>
      </div>
    </section>
  )
})

TemperatureHistory.displayName = 'TemperatureHistory'
