import { forwardRef } from 'react'
import { Pie, PieChart } from 'recharts'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const HeatImpactChart = forwardRef<HTMLElement>((_props, ref) => {
  const chartData = [
    {
      region: 'ภาคเหนือ',
      percentage: 49.5,
      fill: '#dec8a5',
    },
    {
      region: 'ภาคกลาง',
      percentage: 23.7,
      fill: '#d9a94e',
    },
    {
      region: 'ภาคอีสาน',
      percentage: 2.8,
      fill: '#c46a36',
    },
    {
      region: 'ภาคใต้',
      percentage: 23.9,
      fill: '#8a5a3b',
    },
  ]

  const chartConfig = {
    percentage: {
      label: 'เปอร์เซ็นต์',
    },
    ภาคเหนือ: {
      label: 'ภาคเหนือ',
      color: '#5DCED8',
    },
    ภาคกลาง: {
      label: 'ภาคกลาง',
      color: '#4FA8C5',
    },
    ภาคอีสาน: {
      label: 'ภาคอีสาน',
      color: '#6B9AC4',
    },
    ภาคใต้: {
      label: 'ภาคใต้',
      color: '#4A6FA5',
    },
  } as const

  return (
    <section
      ref={ref}
      className="relative bg-linear-to-b from-[#ffe3bb] via-[#ffe3bb] via-90% to-[#63c5fc] min-h-svh px-18 flex flex-col justify-center gap-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[60%_auto]">
        <div className="space-y-6">
          <h2 className="flex flex-col text-5xl font-bold text-primary">
            แล้วใคร... ได้รับผลกระทบจาก
            <span>"ฤดูแล้ง" บ้าง ?</span>
          </h2>
          <p className="text-2xl leading-relaxed">
            จำนวนผู้ที่ได้รับผลกระทบ ภัยแล้ง แยกตามภูมิภาค จากภัยแล้งปี 2567
            ระหว่าง วันที่ 14 พฤศจิกายน 2566- 2 พฤศจิกายน 2567
            ข้อมูลจากระบบบัญชา สาธารณภัย กรมป้องกันและบรรเทาสาธารณภัย ณ วันที่
            20 กุมภาพันธ์ 2568
          </p>
        </div>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square px-0 max-h-[500px] w-full [&_.recharts-pie-label-line]:stroke-primary [&_.recharts-pie-label-line]:stroke-2"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="percentage"
              nameKey="region"
              innerRadius={60}
              label={({ payload, ...props }) => {
                const RADIAN = Math.PI / 180
                const radius = 34 + props.outerRadius
                const x = props.cx + radius * Math.cos(-props.midAngle * RADIAN)
                const y = props.cy + radius * Math.sin(-props.midAngle * RADIAN)

                return (
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="text-primary font-semibold text-lg"
                  >
                    {payload.percentage}
                  </text>
                )
              }}
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="region" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center text-lg mt-4"
            />
          </PieChart>
        </ChartContainer>
      </div>
    </section>
  )
})

export { HeatImpactChart }
