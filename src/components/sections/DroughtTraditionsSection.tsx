import { forwardRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { DROUGHT_TRADITIONS } from '@/content/traditions'
import { SectionTopline } from '@/components/editorial/SectionTopline'

export const DroughtTraditionsSection = forwardRef<HTMLElement>((_props, ref) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const selectedTradition = DROUGHT_TRADITIONS[selectedIndex]

  return (
    <section ref={ref} className="relative overflow-clip bg-ink py-24 text-white md:py-32 lg:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/12" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-18vw] top-[8%] size-[54vw] rounded-full bg-drought/6 blur-[210px]" />
        <div className="absolute left-[-24vw] top-[58%] size-[50vw] rounded-full bg-sprout/3 blur-[220px]" />
        <div className="absolute right-[-7vw] top-[4%] hidden select-none text-[clamp(9rem,22vw,24rem)] font-black uppercase leading-none tracking-[-0.08em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.024)] lg:block">
          Rituals
        </div>
      </div>

      <div className="relative mx-auto px-4 sm:px-8 lg:px-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-12 border-t border-white/14 pt-7 lg:grid-cols-[0.48fr_1.52fr] lg:items-end lg:gap-20 lg:pt-9"
        >
          <div>
            <SectionTopline label="Culture · Water · Isan" />
            <p className="mt-5 max-w-sm text-sm font-semibold leading-7 text-white/42 sm:text-base">
              เมื่อฝนและน้ำเป็นเงื่อนไขของชีวิต ความเชื่อและประเพณีก็กลายเป็นอีกภาษาหนึ่งของชุมชน
            </p>
          </div>

          <div className="flex items-end gap-5 sm:gap-8">
            <span className="text-[clamp(5.5rem,11vw,11rem)] font-black leading-[0.7] tracking-[-0.09em] text-drought">
              06
            </span>
            <h2 className="pb-1 text-[clamp(3rem,6.5vw,7rem)] font-black leading-[0.86] tracking-[-0.065em] sm:pb-2">
              <span className="block">ประเพณี</span>
              <span className="block text-white/34">ที่ผูกกับสายน้ำ</span>
            </h2>
          </div>
        </motion.header>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[1.5fr_0.5fr] lg:gap-16 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="mb-5 flex items-center justify-between gap-5 text-[0.64rem] font-black uppercase tracking-[0.18em] text-white/28">
              <span>Interactive field</span>
              <span>เลือกจุดเพื่ออ่านเรื่องราว</span>
            </div>

            <div className="relative overflow-hidden border-y border-white/12 bg-black/20">
              <img src="/images/traditions/isan-traditions-map.png" alt="6 ประเพณีภาคอีสาน" className="block h-auto w-full" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.2))]" />
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_32px_rgba(0,0,0,0.28)]" />

              {DROUGHT_TRADITIONS.map((tradition, index) => {
                const active = selectedIndex === index

                return (
                  <button
                    key={tradition.title}
                    type="button"
                    aria-label={`ดูรายละเอียด ${tradition.title}`}
                    aria-pressed={active}
                    onClick={() => setSelectedIndex(index)}
                    className="group absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                    style={{ left: `${tradition.x}%`, top: `${tradition.y}%` }}
                  >
                    <motion.span
                      initial={false}
                      animate={{ scale: active ? 1.12 : 1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.94 }}
                      transition={{ type: 'spring', stiffness: 380, damping: 24 }}
                      className={cn(
                        'relative flex size-[clamp(2.4rem,4.6vw,4.25rem)] items-center justify-center rounded-full border text-[clamp(0.62rem,1vw,0.82rem)] font-black tabular-nums transition-colors duration-300',
                        active
                          ? 'border-drought bg-drought text-black shadow-[0_0_0_7px_rgba(241,135,23,0.18),0_12px_32px_rgba(0,0,0,0.45)]'
                          : 'border-white/70 bg-ink/74 text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-md group-hover:border-drought group-hover:text-drought',
                      )}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.span>
                  </button>
                )
              })}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="border-y border-white/12">
              {DROUGHT_TRADITIONS.map((tradition, index) => {
                const active = selectedIndex === index

                return (
                  <button
                    key={tradition.title}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className="group relative flex w-full items-center gap-4 border-b border-white/10 py-4 text-left last:border-b-0"
                  >
                    <span
                      className={cn(
                        'w-7 shrink-0 text-[0.62rem] font-black tabular-nums transition-colors duration-300',
                        active ? 'text-drought' : 'text-white/22 group-hover:text-white/48',
                      )}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={cn(
                        'text-sm font-bold leading-6 transition-colors duration-300 sm:text-base',
                        active ? 'text-white' : 'text-white/44 group-hover:text-white/72',
                      )}
                    >
                      {tradition.title}
                    </span>
                    <span
                      className={cn(
                        'absolute inset-y-0 left-0 w-px origin-top bg-drought transition-transform duration-300',
                        active ? 'scale-y-100' : 'scale-y-0',
                      )}
                    />
                  </button>
                )
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTradition.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 border-l border-drought/70 pl-5 sm:pl-6"
              >
                <p className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-drought">
                  Selected story
                </p>
                <h3 className="mt-3 text-[clamp(1.5rem,2.8vw,2.6rem)] font-black leading-tight tracking-[-0.035em]">
                  {selectedTradition.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-7 text-white/48 sm:text-base sm:leading-8">
                  {selectedTradition.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.aside>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white/22 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
          <span>6 traditions · Northeast Thailand</span>
          <span className="shrink-0">Water shapes culture</span>
        </div>
      </div>
    </section>
  )
})

DroughtTraditionsSection.displayName = 'DroughtTraditionsSection'
