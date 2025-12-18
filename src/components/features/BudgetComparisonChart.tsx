import { forwardRef, useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'motion/react'

const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    stiffness: 200,
    damping: 40,
  })
  const isInView = useInView(ref, { once: true, margin: '0px' })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toLocaleString('en-US', {
          minimumFractionDigits: 4,
          maximumFractionDigits: 4,
        })
      }
    })
  }, [springValue])

  return <span ref={ref}>0.0000</span>
}

export const BudgetComparisonChart = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="relative bg-[#ffe3bb] min-h-svh flex flex-col px-6 py-8 md:py-20 md:px-12"
    >
      <div className="w-full max-w-6xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-6xl font-black text-[#5c4033] tracking-tight">
            งบประมาณ
          </h2>
          <div className="w-24 h-2 bg-[#8b4513] mx-auto rounded-full opacity-80" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <p className="text-lg md:text-2xl text-[#8E5B3D] font-medium leading-relaxed mx-auto">
            ครม.อนุมัติงบประมาณรายจ่ายประจำปีงบประมาณ พ.ศ.2567{' '}
            <br className="hidden md:block" />
            งบกลางรายการเงินสำรองจ่ายเพื่อกรณีฉุกเฉินหรือจำเป็น{' '}
            <br className="hidden md:block" />
            เพื่อดำเนินโครงการเพิ่มประสิทธิภาพการบริหารจัดการทรัพยากรน้ำช่วงฤดูฝนปี
            2567 <br className="hidden md:block" />
            และการกักเก็บน้ำเพื่อฤดูแล้งปี 2567/2568
          </p>

          <div className="py-4">
            <div className="flex flex-col xl:flex-row items-center justify-center gap-2 md:gap-6 bg-white/40 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-[#d2b48c]/30 shadow-xl shadow-[#d2b48c]/10">
              <span className="text-2xl md:text-5xl font-bold text-[#8b4513]">
                วงเงิน
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#A03522] tracking-tighter tabular-nums drop-shadow-sm break-all">
                <AnimatedNumber value={7606.4972} />
              </span>
              <span className="text-2xl md:text-5xl font-bold text-[#8b4513]">
                ล้านบาท
              </span>
            </div>
          </div>

          <p className="text-base md:text-xl text-[#8E5B3D]/80 font-medium">
            ตามที่สำนักงานทรัพยากรน้ำแห่งชาติ (สทนช.) เสนอ <br />
            เพิ่มประสิทธิภาพการระบายน้ำ เพิ่มศักยภาพในการกักเก็บน้ำเพื่อฤดูแล้ง
          </p>
        </motion.div>
      </div>
    </section>
  )
})

BudgetComparisonChart.displayName = 'BudgetComparisonChart'
