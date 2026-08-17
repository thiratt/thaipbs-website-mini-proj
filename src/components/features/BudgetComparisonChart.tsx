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
    <>
      <section
        ref={ref}
        className="relative bg-[#232323] min-h-svh flex flex-col px-6 py-8 md:py-20 md:px-12"
      >
        <div className="w-full max-w-6xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
              งบประมาณ
            </h2>
            <div className="w-24 h-2 bg-white mx-auto rounded-full opacity-80" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-lg md:text-2xl text-white font-medium leading-relaxed mx-auto">
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
                <span className="text-2xl md:text-5xl font-bold text-white">
                  วงเงิน
                </span>
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter tabular-nums drop-shadow-sm break-all">
                  <AnimatedNumber value={7606.4972} />
                </span>
                <span className="text-2xl md:text-5xl font-bold text-white">
                  ล้านบาท
                </span>
              </div>
            </div>

            <p className="text-base md:text-xl text-white/80 font-medium">
              ตามที่สำนักงานทรัพยากรน้ำแห่งชาติ (สทนช.) เสนอ <br />
              เพิ่มประสิทธิภาพการระบายน้ำ
              เพิ่มศักยภาพในการกักเก็บน้ำเพื่อฤดูแล้ง
            </p>
          </motion.div>
        </div>
      </section>
      <section className="bg-[#232323] min-h-svh flex flex-col px-6 py-8 md:py-20 md:px-12 space-y-6 md:space-y-12">
        <div className="flex flex-col items-center text-center text-white gap-4">
          <div className="text-4xl font-bold">
            แล้วใคร... ได้รับผลกระทบจาก{' '}
            <span className="text-orange-400">"ฤดูแล้ง"</span> บ้าง ?
          </div>
          <div className="text-2xl font-medium">
            จำนวนผู้ที่ได้รับผลกระทบ ภัยแล้ง แยกตามภูมิภาค จากภัยแล้ง ปี 2567
            ระหว่างวันที่ 14 พฤศจิการยน 2566- 2 พฤศจิการยน 2567
            ข้อมูลจากระบบข้อมูลสาธารณภัย กรมป้องกันและบรรเทาสาธารณภัย ณ วันที่
            20 กุมภาพันธ์ 2568
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-4 items-center justify-center">
          <img
            className="md:col-span-2"
            src="โค้ดคำ อ.จตุพร เทียรมา.jpg"
            alt=""
          />
          <img
            className="md:col-span-2"
            src="โค้ดคำ อุบล อยู่หว้า.jpg"
            alt=""
          />
          <img className="md:col-span-2" src="โค้ดคำ คนึงนุช.jpg" alt="" />
          <img
            className="md:col-span-2 md:col-start-2"
            src="โค้ดคำ บุญส่ง.jpg"
            alt=""
          />
          <img
            className="md:col-span-2"
            src="โค้ดคำ พรรณี เสมอภาค.jpg"
            alt=""
          />
        </div>
      </section>
    </>
  )
})

BudgetComparisonChart.displayName = 'BudgetComparisonChart'
