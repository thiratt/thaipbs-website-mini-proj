import { forwardRef, useRef, useImperativeHandle } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { cn } from '@/lib/utils'
import { LANG_CIRCLE_ITEMS } from '@/constants/lang-circle'

const COLORS = [
  'bg-emerald-500 shadow-emerald-200',
  'bg-cyan-500 shadow-cyan-200',
  'bg-blue-500 shadow-blue-200',
  'bg-indigo-500 shadow-indigo-200',
  'bg-violet-500 shadow-violet-200',
  'bg-fuchsia-500 shadow-fuchsia-200',
  'bg-rose-500 shadow-rose-200',
]

export const LangCircleSection = forwardRef<HTMLElement>((_props, ref) => {
  const containerRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => containerRef.current!)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      ref={containerRef}
      className="relative bg-[#ffe3bb] min-h-dvh py-20 md:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight mb-6">
              วัฏจักร
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-red-600">
                ฤดูแล้ง
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              ทำความเข้าใจขั้นตอนสำคัญในวัฏจักรของน้ำและการเปลี่ยนแปลงตามฤดูกาล
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 rounded-full transform md:-translate-x-1/2" />

          <motion.div
            style={{ height }}
            className="absolute left-[27px] md:left-1/2 top-0 w-1 bg-linear-to-b from-orange-400 via-rose-500 to-indigo-500 rounded-full transform md:-translate-x-1/2 origin-top"
          />

          <div className="space-y-16 md:space-y-24">
            {LANG_CIRCLE_ITEMS.map((item, index) => {
              const isEven = index % 2 === 0
              const colorClass = COLORS[index % COLORS.length]

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    'relative flex flex-col md:flex-row items-start',
                    isEven ? 'md:flex-row-reverse' : '',
                  )}
                >
                  <div className="hidden md:block flex-1" />

                  <div className="relative z-10 shrink-0 w-14 h-14 md:mx-8 mb-4 md:mb-0">
                    <div
                      className={cn(
                        'w-14 h-14 rounded-2xl rotate-3 flex items-center justify-center text-white font-bold text-2xl shadow-lg border-4 border-white',
                        colorClass,
                      )}
                    >
                      <span className="-rotate-3">{index + 1}</span>
                    </div>
                  </div>

                  <div className="flex-1 w-full pl-16 md:pl-0">
                    <div
                      className={cn(
                        'group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100',
                        'hover:-translate-y-1',
                        'overflow-hidden',
                      )}
                    >
                      <div
                        className={cn(
                          'absolute top-0 w-16 h-1 rounded-full opacity-60 transition-all group-hover:w-full group-hover:opacity-100 duration-500',
                          colorClass.split(' ')[0],
                        )}
                        style={{ [isEven ? 'right' : 'left']: 6 }}
                      />

                      <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                        {item.detail}
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

LangCircleSection.displayName = 'LangCircleSection'
