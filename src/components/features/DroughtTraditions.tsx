import { Fragment, forwardRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

type DetailPlacement = 'right' | 'left' | 'top-right' | 'top-left'

const DETAIL_PLACEMENTS: Record<
  DetailPlacement,
  { transform: string; transformOrigin: string }
> = {
  right: {
    transform: 'translate(3.25rem, -50%)',
    transformOrigin: 'left center',
  },
  left: {
    transform: 'translate(calc(-100% - 3.25rem), -50%)',
    transformOrigin: 'right center',
  },
  'top-right': {
    transform: 'translate(2rem, calc(-100% - 2rem))',
    transformOrigin: 'left bottom',
  },
  'top-left': {
    transform: 'translate(calc(-100% - 2rem), calc(-100% - 2rem))',
    transformOrigin: 'right bottom',
  },
}

const TRADITIONS = [
  {
    title: 'ประเพณีแข่งเรือ',
    description:
      'การแข่งขันเรือยาวของชุมชนริมแม่น้ำ สะท้อนวิถีชีวิตที่ผูกพันกับสายน้ำ ความสามัคคี และการร่วมแรงร่วมใจของคนในท้องถิ่น',
    x: 30.48,
    y: 16.31,
    placement: 'right' as DetailPlacement,
  },
  {
    title: 'งานช้างสุรินทร์',
    description:
      'ประเพณีสำคัญของจังหวัดสุรินทร์ที่สะท้อนความผูกพันระหว่างคนกับช้าง ผ่านการแสดง ศิลปวัฒนธรรม และวิถีชีวิตของชุมชนท้องถิ่น',
    x: 80.12,
    y: 28.91,
    placement: 'left' as DetailPlacement,
  },
  {
    title: 'แห่เทียนพรรษา',
    description:
      'ประเพณีถวายเทียนในช่วงเข้าพรรษา มีการแกะสลักต้นเทียนและจัดขบวนแห่อย่างงดงาม โดยเฉพาะในจังหวัดอุบลราชธานี',
    x: 33.27,
    y: 47.13,
    placement: 'right' as DetailPlacement,
  },
  {
    title: 'บุญบั้งไฟ',
    description:
      'ประเพณีจุดบั้งไฟเพื่อบูชาพญาแถนและขอฝนก่อนเข้าสู่ฤดูทำนา เป็นหนึ่งในประเพณีที่สะท้อนความเชื่อเรื่องฝนและความอุดมสมบูรณ์ของชาวอีสาน',
    x: 81.43,
    y: 67.1,
    placement: 'top-left' as DetailPlacement,
  },
  {
    title: 'สงกรานต์',
    description:
      'ประเพณีปีใหม่ไทยที่มีทั้งการรดน้ำดำหัวผู้ใหญ่ ทำบุญ และเล่นน้ำ สื่อถึงการเริ่มต้นใหม่และความผูกพันของผู้คนกับน้ำ',
    x: 22.48,
    y: 84.3,
    placement: 'top-right' as DetailPlacement,
  },
  {
    title: 'การฟ้อนรำพื้นบ้าน',
    description:
      'การฟ้อนรำและดนตรีพื้นบ้านเป็นส่วนหนึ่งของงานบุญและงานประเพณี ถ่ายทอดอัตลักษณ์ ความเชื่อ และความสนุกสนานของชุมชนอีสานจากรุ่นสู่รุ่น',
    x: 51.82,
    y: 81.56,
    placement: 'top-left' as DetailPlacement,
  },
]

export const DroughtTraditions = forwardRef<HTMLElement>((_props, ref) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#232323] px-5 py-20 text-white md:px-8 md:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-2 flex items-baseline justify-center gap-2 text-center font-bold tracking-tight"
        >
          <span className="text-6xl font-black leading-none text-orange-500 md:text-7xl">
            6
          </span>
          <span className="text-2xl md:text-4xl">ประเพณีภาคอีสาน</span>
        </motion.h2>

        <p className="mb-6 text-sm text-white/55 md:mb-14 md:text-base">
          กดที่วงกลมเพื่อดูรายละเอียด
        </p>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
          className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_24px_80px_rgba(0,0,0,0.4)] ring-1 ring-black/40"
        >
          <img
            src="/Traditional.png"
            alt="6 ประเพณีภาคอีสาน"
            className="block h-auto w-full"
          />

          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_60px_rgba(0,0,0,0.22)]" />

          {TRADITIONS.map((tradition, index) => {
            const active = selectedIndex === index
            const detailPlacement = DETAIL_PLACEMENTS[tradition.placement]

            return (
              <Fragment key={tradition.title}>
                <button
                  type="button"
                  aria-label={`ดูรายละเอียด ${tradition.title}`}
                  aria-pressed={active}
                  onClick={() => setSelectedIndex(active ? null : index)}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/80"
                  style={{ left: `${tradition.x}%`, top: `${tradition.y}%` }}
                >
                  <motion.span
                    initial={false}
                    animate={{ scale: active ? 1.12 : 1 }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 24 }}
                    className="relative flex size-[clamp(2.5rem,5vw,4.5rem)] items-center justify-center rounded-full border-[3px] border-black bg-[rgba(190,211,108,0.62)] shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
                  >
                    <span
                      className={`absolute inset-[-6px] rounded-full border-2 transition-colors duration-200 ${
                        active ? 'border-white' : 'border-transparent'
                      }`}
                    />
                    <span className="sr-only">{tradition.title}</span>
                  </motion.span>
                </button>

                <AnimatePresence>
                  {active && (
                    <div
                      className="pointer-events-none absolute z-30"
                      style={{
                        left: `${tradition.x}%`,
                        top: `${tradition.y}%`,
                        transform: detailPlacement.transform,
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.82, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.88, y: 6 }}
                        transition={{
                          type: 'spring',
                          stiffness: 420,
                          damping: 28,
                        }}
                        style={{
                          transformOrigin: detailPlacement.transformOrigin,
                        }}
                        className="w-56 rounded-2xl border border-white/20 bg-[#161616]/95 p-4 text-left shadow-[0_16px_48px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:w-64 md:w-72"
                      >
                        <div className="mb-2 flex items-center gap-2.5">
                          <span className="flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-black bg-[#bed36c] text-xs font-black text-black">
                            {index + 1}
                          </span>
                          <h3 className="text-base font-black text-white md:text-lg">
                            {tradition.title}
                          </h3>
                        </div>

                        <p className="text-xs font-medium leading-relaxed text-white/75 sm:text-sm sm:leading-6">
                          {tradition.description}
                        </p>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </Fragment>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
})

DroughtTraditions.displayName = 'DroughtTraditions'
