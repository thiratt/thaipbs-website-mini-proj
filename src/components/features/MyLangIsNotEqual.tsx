import { forwardRef, useRef, useImperativeHandle } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { Thermometer, AlertTriangle, Flame, Droplets } from 'lucide-react'

const HEAT_LEVELS = [
  {
    label: 'เฝ้าระวัง',
    icon: Droplets,
    color: 'from-emerald-500 to-green-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    temp: '27.0 - 32.9°C',
    description:
      'เริ่มมีอาการอ่อนเพลีย ปวดศีรษะ ตัวแสบร้อน อาจเป็นตะคริวจากความร้อน',
  },
  {
    label: 'เตือนภัย',
    icon: Thermometer,
    color: 'from-yellow-400 to-amber-500',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    text: 'text-amber-700',
    temp: '33.0 - 41.9°C',
    description:
      'เสี่ยงโรคเพลียแดด และตะคริวจากความร้อน อาจพัฒนาเป็นตมร้อนหรือฮีทสโตรกได้',
  },
  {
    label: 'อันตราย',
    icon: Flame,
    color: 'from-orange-500 to-red-500',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-700',
    temp: '42.0 - 51.9°C',
    description:
      'ร่างกายทำงานผิดปกติ เสี่ยงเพลียแดด ตะคริว และลมร้อน/ฮีทสโตรกสูง',
  },
  {
    label: 'อันตรายมาก',
    icon: AlertTriangle,
    color: 'from-red-600 to-rose-700',
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-800',
    temp: '≥ 52.0°C',
    description: 'เสี่ยงลมร้อนหรือฮีทสโตรกอย่างรุนแรง อันตรายถึงชีวิต',
  },
]

export const MyLangIsNotEqual = forwardRef<HTMLElement>((_props, ref) => {
  const containerRef = useRef<HTMLElement>(null)
  useImperativeHandle(ref, () => containerRef.current!)

  return (
    <section
      ref={containerRef}
      className="relative bg-[#ffe3bb] min-h-screen py-20 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="flex-1 lg:sticky lg:top-32 lg:h-fit z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 font-bold text-sm mb-6 border border-orange-200">
                HEAT INDEX
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
                "ที่ของฉัน"
                <br />
                <span className="text-gray-500">...ที่ของเธอ</span>
              </h2>
              <div className="space-y-2">
                <p className="text-2xl md:text-4xl font-bold text-gray-800">
                  "
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-red-600">
                    แล้ง
                  </span>
                  " เราไม่เท่ากัน
                </p>
                <p className="text-lg text-gray-700 max-w-md leading-relaxed mt-4">
                  ผลกระทบจากความร้อนที่มีต่อร่างกายแตกต่างกันไปตามระดับอุณหภูมิและความชื้นสัมพัทธ์
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 space-y-6">
            {HEAT_LEVELS.map((level, index) => {
              const Icon = level.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    'group relative overflow-hidden rounded-3xl p-6 md:p-8 transition-all duration-300',
                    'bg-white/80 backdrop-blur-xl border-2 hover:border-transparent',
                    level.border,
                    'hover:shadow-2xl hover:scale-[1.02]',
                  )}
                >
                  <div
                    className={cn(
                      'absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-linear-to-br',
                      level.color,
                    )}
                  />

                  <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <div
                      className={cn(
                        'w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg',
                        'bg-linear-to-br text-white',
                        level.color,
                      )}
                    >
                      <Icon size={32} strokeWidth={2.5} />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <h3 className={cn('text-2xl font-bold', level.text)}>
                          {level.label}
                        </h3>
                        <span className="text-3xl font-black text-gray-800 tracking-tight">
                          {level.temp}
                        </span>
                      </div>

                      <div className="h-px w-full bg-gray-200 my-3" />

                      <p className="text-gray-600 font-medium leading-relaxed">
                        {level.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
})

MyLangIsNotEqual.displayName = 'MyLangIsNotEqual'
