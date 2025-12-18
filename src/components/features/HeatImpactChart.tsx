import { forwardRef, useState } from 'react'
import { motion } from 'motion/react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts'
import { cn } from '@/lib/utils'

const DATA = [
  { name: 'ภาคเหนือ', value: 49.5, color: '#ef4444' },
  { name: 'ภาคกลาง', value: 23.7, color: '#f97316' },
  { name: 'ภาคใต้', value: 23.9, color: '#eab308' },
  { name: 'ภาคอีสาน', value: 2.8, color: '#14b8a6' },
]

const renderActiveShape = (props: any) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
  } = props

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={-10}
        textAnchor="middle"
        fill="#333"
        className="text-3xl font-bold"
      >
        {payload.name}
      </text>
      <text
        x={cx}
        y={cy}
        dy={20}
        textAnchor="middle"
        fill="#666"
        className="text-xl"
      >
        {`${value}%`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        className="animate-in fade-in duration-300"
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 12}
        outerRadius={outerRadius + 20}
        fill={fill}
      />
    </g>
  )
}

export const HeatImpactChart = forwardRef<HTMLElement>((_props, ref) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index)
  }

  return (
    <section
      ref={ref}
      className="relative bg-[#FFF8F0] min-h-svh py-20 px-6 md:px-12 flex flex-col justify-center"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight"
              >
                ใครได้รับผลกระทบ
                <br />
                <span className="text-orange-600">มากที่สุด?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-gray-600 leading-relaxed max-w-lg"
              >
                สัดส่วนผู้ที่ได้รับผลกระทบจากภัยแล้ง จำแนกตามภูมิภาค (ข้อมูลปี
                2567 โดยกรมป้องกันและบรรเทาสาธารณภัย)
              </motion.p>
            </div>

            <div className="space-y-3">
              {DATA.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={cn(
                    'flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2',
                    activeIndex === index
                      ? 'bg-white border-orange-100 shadow-xl scale-105'
                      : 'bg-white/50 border-transparent hover:bg-white hover:shadow-md',
                  )}
                >
                  <div
                    className="w-3 h-12 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-end mb-1">
                      <span
                        className={cn(
                          'text-lg font-bold',
                          activeIndex === index
                            ? 'text-gray-900'
                            : 'text-gray-500',
                        )}
                      >
                        {item.name}
                      </span>
                      <span
                        className={cn(
                          'text-2xl font-black',
                          activeIndex === index
                            ? 'text-orange-600'
                            : 'text-gray-400',
                        )}
                      >
                        {item.value}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="h-[400px] md:h-[500px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  animationBegin={0}
                  animationEasing="ease-out"
                  data={DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={100}
                  outerRadius={140}
                  fill="#8884d8"
                  dataKey="value"
                  onMouseEnter={onPieEnter}
                  paddingAngle={2}
                >
                  {DATA.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      stroke="none"
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            <div className="absolute bottom-0 w-full text-center text-sm text-primary md:hidden">
              แตะที่กราฟเพื่อดูรายละเอียด
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

HeatImpactChart.displayName = 'HeatImpactChart'
