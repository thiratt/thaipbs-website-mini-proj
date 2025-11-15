import { forwardRef } from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts'

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from './ui/chart'

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

const TempStatSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="relative min-h-svh overflow-hidden bg-[#e8e4dc] flex px-8 py-18 md:px-18"
    >
      <div className="w-full space-y-8 animate-fade-in-up [animation-delay:200ms] fill-mode-[forwards]">
        <h2 className="text-4xl text-center font-bold text-primary leading-tight">
          สถิติอุณหภูมิสูงที่สุดในรอบ 10 ปีของประเทศไทย
        </h2>
        <div className="flex justify-center items-center w-full">
          <ChartContainer config={chartConfig} className="w-full lg:max-w-4xl">
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
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
                fill="var(--destructive)"
                fillOpacity={0.4}
                stroke="var(--color-temperature)"
              />
            </AreaChart>
          </ChartContainer>
        </div>
        <p className="text-center text-xl text-primary/90">
          อุณหภูมิสูงสุดของประเทศไทยในปี พ.ศ. 2553 - 2563
          การเปลี่ยนแปลงของสภาพอากาศในแต่ละปี
        </p>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#6b4423] rounded-full opacity-20"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-[#a67c52] rounded-full opacity-20"></div>
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-[#6b4423] rounded-full opacity-20"></div>
      <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-[#a67c52] rounded-full opacity-20"></div>
    </section>
  )
})

TempStatSection.displayName = 'TempStatSection'

export { TempStatSection }
