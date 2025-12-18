import { forwardRef } from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { motion } from 'motion/react'
import { Flame, ThermometerSun } from 'lucide-react'

const CHART_DATA = [
  { year: '2553', temp: 44 },
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
      <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl border border-orange-200 shadow-xl">
        <div className="flex items-center gap-2 mb-2 border-b border-orange-100 pb-2">
          <span className="font-bold text-gray-700">ปี {label}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-100 rounded-lg">
            <ThermometerSun className="text-orange-600" size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">อุณหภูมิสูงสุด</p>
            <p className="text-2xl font-black text-orange-600">
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
      className="relative min-h-svh bg-[#ffe3bb] flex flex-col justify-center py-20 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-orange-200/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="text-center mb-16 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-bold uppercase tracking-wider mb-4"
            >
              <Flame size={16} fill="currentColor" />
              Historical Record
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-gray-900 leading-tight"
            >
              สถิติความร้อน
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-red-600">
                ในรอบ 10 ปี
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex justify-center gap-12 pt-4"
            >
              <div className="text-center">
                <p className="text-gray-500 mb-1">สูงสุดที่เคยบันทึก</p>
                <p className="text-5xl font-black text-red-500">45°C</p>
                <p className="text-sm text-red-400 font-medium mt-1">ปี 2559</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <p className="text-gray-500 mb-1">ค่าเฉลี่ย 10 ปี</p>
                <p className="text-5xl font-black text-orange-500">43°C</p>
                <p className="text-sm text-orange-400 font-medium mt-1">
                  สูงกว่าเกณฑ์ปกติ
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl p-6 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.05)] w-full max-w-5xl mx-auto"
          >
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={CHART_DATA}
                  margin={{ top: 20, right: 0, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#e5e7eb"
                  />
                  <XAxis
                    dataKey="year"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6b7280', fontSize: 14 }}
                    dy={10}
                  />
                  <YAxis
                    domain={[35, 48]}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6b7280', fontSize: 14 }}
                  />
                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={{
                      stroke: '#f97316',
                      strokeWidth: 2,
                      strokeDasharray: '4 4',
                    }}
                  />

                  <ReferenceLine y={40} stroke="#ef4444" strokeDasharray="3 3">
                    <g transform="translate(20, -10)">
                      <text
                        x="0"
                        y="40"
                        fill="#ef4444"
                        fontSize="12"
                        fontWeight="bold"
                      >
                        Danger Zone (40°C+)
                      </text>
                    </g>
                  </ReferenceLine>

                  <Area
                    type="monotone"
                    dataKey="temp"
                    stroke="#ef4444"
                    strokeWidth={4}
                    fillOpacity={1}
                    fill="url(#colorTemp)"
                    activeDot={{
                      r: 8,
                      stroke: '#fff',
                      strokeWidth: 2,
                      fill: '#ef4444',
                    }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">
                ข้อมูลจากกรมอุตุนิยมวิทยา แสดงอุณหภูมิสูงสุดรายปีในช่วงฤดูแล้ง
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

TemperatureHistory.displayName = 'TemperatureHistory'
