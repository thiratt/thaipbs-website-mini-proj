import { forwardRef } from 'react'
import { motion } from 'motion/react'

const DROUGHT_DESCRIPTION = `ภัยแล้งเป็นภัยธรรมชาติที่เกิดจากการขาดแคลนน้ำ
เป็นระยะเวลานานเป็นเดือนๆ หรือเป็นปี
โดยทั่วไปเกิดขึ้นเมื่อพื้นที่ได้รับน้ำอย่างสม่ำเสมอมี
ฝนตกต่ำกว่าค่าเฉลี่ย
เกิดผลกระทบอย่างมากต่อการดำรงชีวิต
การเกษตร และระบบนิเวศในพื้นที่ที่เกิดภัย`

const WhatIsLangSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <>
      <section
        ref={ref}
        className="relative -mt-px flex items-center justify-center bg-[#232323] px-6 py-20 text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex w-full max-w-3xl flex-col items-center text-center"
        >
          <h2 className="text-2xl font-bold leading-relaxed tracking-tight md:text-5xl">
            เมื่อพูดถึงคำว่า{' '}
            <span className="text-orange-500">&quot;แล้ง&quot;</span>{' '}
            นึกถึงอะไร?
          </h2>

          <motion.img
            src="/wordcloud.png"
            alt="QR Code สำหรับเข้าร่วมตอบคำถามเกี่ยวกับคำว่าแล้ง"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
            className="mt-14 w-40 object-contain sm:w-44 md:mt-16 md:w-72"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.18, ease: 'easeOut' }}
            className="mt-14 text-xl font-bold leading-relaxed sm:text-2xl md:mt-16 md:text-5xl"
          >
            สแกนเข้าร่วมเพื่อเป็นส่วนหนึ่งกับเรา
          </motion.p>
        </motion.div>
      </section>

      <section className="relative min-h-[34rem] overflow-hidden bg-[#232323] px-6 text-white md:min-h-[39rem] md:px-10">
        <div className="pointer-events-none absolute inset-x-0 top-8 flex justify-center md:top-10">
          <div className="relative select-none whitespace-nowrap text-[clamp(4.5rem,12.5vw,11rem)] font-black uppercase leading-none tracking-[0.3em] text-white/20">
            <span>Droughts</span>
            <span
              aria-hidden="true"
              className="absolute inset-0 text-white/18 blur-[6px] [clip-path:inset(48%_-20px_-20px_-20px)]"
            >
              Droughts
            </span>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[34rem] max-w-4xl flex-col items-center text-center md:min-h-[39rem]">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mt-28 text-[clamp(3.5rem,6vw,5.25rem)] font-black leading-none tracking-tight md:mt-46"
          >
            <span className="text-orange-500">ภัยแล้ง</span>
            <span className="text-white">?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
            className="mt-24 max-w-2xl whitespace-pre-line text-[0.95rem] font-medium leading-[1.45] text-white/88 sm:text-base md:mt-28 md:text-3xl"
          >
            {`“${DROUGHT_DESCRIPTION}”`}
          </motion.p>
        </div>
      </section>
    </>
  )
})

WhatIsLangSection.displayName = 'WhatIsLangSection'

export { WhatIsLangSection }
