import { forwardRef } from 'react'
import { motion } from 'motion/react'
import { AlertTriangle, Droplets, Flame, ThermometerSun } from 'lucide-react'

const HEAT_LEVELS = [
  {
    label: 'เฝ้าระวัง',
    temp: '27.0 – 32.9°C',
    icon: Droplets,
    accent: '#9ac400',
    soft: 'rgba(154, 196, 0, 0.12)',
    description:
      'เมื่อสัมผัสความร้อนและทำกิจกรรมกลางแจ้งเป็นเวลานาน อาจเริ่มมีอาการอ่อนเพลีย ปวดศีรษะ ผื่นจากความร้อน บวมจากความร้อน และตะคริวจากความร้อน',
  },
  {
    label: 'เตือนภัย',
    temp: '33.0 – 41.9°C',
    icon: ThermometerSun,
    accent: '#f5c400',
    soft: 'rgba(245, 196, 0, 0.12)',
    description:
      'มีความเสี่ยงต่อโรคเพลียแดด (Heat exhaustion) และตะคริวจากความร้อน หากอยู่กลางแจ้งต่อเนื่องอาจพัฒนาไปสู่ฮีทสโตรก (Heat stroke)',
  },
  {
    label: 'อันตราย',
    temp: '42.0 – 51.9°C',
    icon: Flame,
    accent: '#f18717',
    soft: 'rgba(241, 135, 23, 0.13)',
    description:
      'ความร้อนระดับนี้ทำให้ร่างกายรับภาระสูง มีโอกาสเกิดโรคเพลียแดด ตะคริว และฮีทสโตรก โดยเฉพาะเมื่อทำกิจกรรมกลางแจ้งต่อเนื่อง',
  },
  {
    label: 'อันตรายมาก',
    temp: '≥ 52.0°C',
    icon: AlertTriangle,
    accent: '#ef3b20',
    soft: 'rgba(239, 59, 32, 0.14)',
    description:
      'เป็นระดับที่มีความเสี่ยงสูงมากต่อฮีทสโตรก ต้องหลีกเลี่ยงการสัมผัสความร้อนและกิจกรรมกลางแจ้งที่ต่อเนื่องเป็นเวลานาน',
  },
] as const

export const MyLangIsNotEqual = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#232323] px-5 py-20 text-white md:px-8 md:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-72 max-w-5xl bg-[radial-gradient(circle_at_center,rgba(241,135,23,0.12),transparent_68%)]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mx-auto mb-14 max-w-4xl text-center md:mb-18"
        >
          <h2 className="text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
            “ที่ของฉัน” <span className="text-white/45">...ที่ของเธอ</span>
          </h2>
          <p className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            <span className="text-[#f18717]">“แล้ง”</span> เราไม่เท่ากัน
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/62 md:text-lg">
            ผลกระทบจากความร้อนต่อร่างกายแตกต่างกันตามระดับอุณหภูมิ
            และความชื้นสัมพัทธ์ ยิ่งค่าดัชนีความร้อนสูง
            ความเสี่ยงก็ยิ่งเพิ่มขึ้น
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="space-y-4 md:space-y-5">
            {HEAT_LEVELS.map((level, index) => {
              const Icon = level.icon

              return (
                <motion.article
                  key={level.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-70px' }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5 transition-colors duration-300 hover:bg-white/[0.055] md:p-7"
                >
                  <div
                    className="pointer-events-none absolute inset-y-0 left-0 w-1.5"
                    style={{ backgroundColor: level.accent }}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-70"
                    style={{
                      background: `linear-gradient(100deg, ${level.soft}, transparent 45%)`,
                    }}
                  />

                  <div className="relative grid gap-5 md:grid-cols-[68px_190px_1fr] md:items-center md:gap-7">
                    <div
                      className="flex size-[58px] items-center justify-center rounded-2xl border border-white/10 md:size-[68px]"
                      style={{ backgroundColor: level.soft }}
                    >
                      <Icon
                        className="size-7 md:size-8"
                        style={{ color: level.accent }}
                        strokeWidth={2.2}
                      />
                    </div>

                    <div>
                      <p
                        className="text-xl font-black md:text-2xl"
                        style={{ color: level.accent }}
                      >
                        {level.label}
                      </p>
                      <p className="mt-1 text-2xl font-black tracking-tight text-white md:text-[1.7rem]">
                        {level.temp}
                      </p>
                    </div>

                    <p className="text-sm font-medium leading-7 text-white/72 md:border-l md:border-white/10 md:pl-7 md:text-base">
                      {level.description}
                    </p>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
})

MyLangIsNotEqual.displayName = 'MyLangIsNotEqual'
