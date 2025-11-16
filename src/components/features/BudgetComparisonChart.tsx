import { forwardRef } from 'react'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import type { ChartConfig } from '@/components/ui/chart'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const BudgetComparisonChart = forwardRef<HTMLElement>((_props, ref) => {
  const chartData = [
    { year: '2563', budget: 55000 },
    { year: '2564', budget: 115000 },
    { year: '2565', budget: 160000 },
    { year: '2566', budget: 5000 },
    { year: '2567', budget: 120000 },
  ]

  const chartConfig = {
    budget: {
      label: 'งบประมาณ',
      color: '#2563eb',
    },
  } satisfies ChartConfig

  return (
    <section
      ref={ref}
      className="relative bg-primary/5 min-h-svh flex px-8 py-18 md:px-18"
    >
      <div className="w-full space-y-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-[#5D4E37]">
            กราฟแสดงการเปรียบเทียบของงบประมาณ ในปี 2563-2567
          </h2>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl">
            <ChartContainer
              config={chartConfig}
              className="w-full lg:max-w-3xl"
            >
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="year"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  tickFormatter={(value) => value.toLocaleString('en-US')}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      formatter={(value) =>
                        `${Number(value).toLocaleString('en-US')} ล้านบาท`
                      }
                    />
                  }
                />
                <Bar
                  dataKey="budget"
                  fill="var(--color-budget)"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </section>
  )
})

export { BudgetComparisonChart }
