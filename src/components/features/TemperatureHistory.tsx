import { forwardRef } from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from 'recharts'

import type { ChartConfig } from '@/components/ui/chart'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartData = [
  { month: '2553', temperature: 40 },
  { month: '2554', temperature: 41 },
  { month: '2555', temperature: 42 },
  { month: '2556', temperature: 43 },
  { month: '2557', temperature: 42 },
  { month: '2558', temperature: 43 },
  { month: '2559', temperature: 45 },
  { month: '2560', temperature: 42 },
  { month: '2561', temperature: 42 },
  { month: '2562', temperature: 44 },
  { month: '2563', temperature: 44 },
]

const chartConfig = {
  temperature: {
    label: 'อุณหภูมิสูงสุด (°C)',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig

const TemperatureHistory = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="relative min-h-svh bg-[#ffe3bb] flex px-8 py-18 md:px-18"
    >
      <div className="w-full space-y-8 animate-fade-in-up [animation-delay:200ms] fill-mode-[forwards]">
        <h2 className="text-4xl text-center font-bold text-primary leading-tight">
          สถิติอุณหภูมิสูงที่สุดในรอบ 10 ปีของประเทศไทย
        </h2>
        <div className="flex justify-center items-center w-full">
          <ChartContainer config={chartConfig} className="w-full lg:max-w-3xl">
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
                top: 30,
              }}
            >
              <defs>
                <linearGradient id="fillTemperature" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--chart-1)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--chart-1)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--color-primary)"
                strokeOpacity={0.3}
              />
              <XAxis
                dataKey="month"
                tickMargin={8}
                tickFormatter={(value) => value.toString().slice(-2)}
              />
              <YAxis width={16} />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Area
                dataKey="temperature"
                type="natural"
                fill="url(#fillTemperature)"
                fillOpacity={0.4}
                stroke="var(--chart-1)"
                strokeWidth={2}
                dot={(props) => {
                  const { cx, cy, payload } = props
                  const isHighest = payload.temperature === 45
                  return (
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isHighest ? 8 : 3}
                      fill={isHighest ? '#ef4444' : 'var(--chart-1)'}
                      stroke={isHighest ? '#fff' : 'none'}
                      strokeWidth={isHighest ? 2 : 0}
                    />
                  )
                }}
                activeDot={{
                  r: 6,
                }}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-destructive font-semibold text-sm"
                  fontSize={12}
                  dataKey="temperature"
                  formatter={(value: number) => {
                    const isHighest = value === 45
                    return isHighest ? `${value}°C` : ''
                  }}
                />
              </Area>
            </AreaChart>
          </ChartContainer>
        </div>
        <p className="text-center text-xl text-primary/90">
          อุณหภูมิสูงสุดของประเทศไทยในปี พ.ศ. 2553 - 2563
          การเปลี่ยนแปลงของสภาพอากาศในแต่ละปี
        </p>
      </div>

      <div className="absolute top-20 left-10 w-2 h-2 bg-[#6b4423] rounded-full opacity-20"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-[#a67c52] rounded-full opacity-20"></div>
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-[#6b4423] rounded-full opacity-20"></div>
      <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-[#a67c52] rounded-full opacity-20"></div>
    </section>
  )
})

TemperatureHistory.displayName = 'TemperatureHistory'

export { TemperatureHistory }
