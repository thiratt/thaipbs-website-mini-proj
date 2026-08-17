import { forwardRef } from 'react'
import { motion } from 'motion/react'

const DROUGHT_DESCRIPTION = `ภัยแล้งเป็นภัยธรรมชาติที่เกิดจากการขาดแคลนน้ำ
เป็นระยะเวลานานเป็นเดือนๆ หรือเป็นปี
โดยทั่วไปเกิดขึ้นเมื่อพื้นที่ได้รับน้ำอย่างสม่ำเสมอมี
ฝนตกต่ำกว่าค่าเฉลี่ย
เกิดผลกระทบอย่างมากต่อการดำรงชีวิต
การเกษตร และระบบนิเวศในพื้นที่ที่เกิดภัย`

const NATURAL_CAUSES = [
  'การเปลี่ยนแปลงอุณหภูมิโลก เช่น ระบบการหมุนเวียนหรือส่วนผสมของบรรยากาศเปลี่ยนแปลง สภาวะอากาศในฤดูร้อนที่ร้อนมากกว่าปกติ',
  'การเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม เช่น ฝนทิ้งช่วง ฝนตกน้อย ดินเก็บความชื้นต่ำได้ไม่ดี ปริมาณน้ำใต้ดินมีน้อย',
  'การเปลี่ยนแปลงของระดับน้ำทะเล',
  'ความผิดปกติของตำแหน่งร่องมรสุมทำให้ฝนตกในพื้นที่ไม่ต่อเนื่อง',
  'ความผิดปกติเนื่องจากพายุหมุนเขตร้อนเคลื่อนที่ผ่านประเทศน้อยกว่าปกติ',
]

const HUMAN_CAUSES = [
  'การใช้น้ำอย่างไม่เหมาะสมหรือสิ้นเปลืองเกินไป ทั้งการอุปโภค บริโภค และการเกษตร ทำให้ปริมาณน้ำในอ่างเก็บน้ำและน้ำใต้ดินลดลง',
  'พฤติกรรมการดำรงชีวิตของมนุษย์ที่ทำลายชั้นโอโซน เกิดภาวะเรือนกระจก ทำให้อุณหภูมิของโลกสูงขึ้น เช่น การเผาพลาสติก น้ำมัน และถ่านหิน',
  'การพัฒนาด้านต่าง ๆ โดยเฉพาะด้านอุตสาหกรรม ทำให้เกิดการตัดไม้ทำลายป่า ส่งผลให้ความชื้นสัมพัทธ์ไม่เพียงพอ เนื่องจากขาดต้นไม้ซับน้ำ และเกิดการบุกรุกพื้นที่ป่าถือครองกรรมสิทธิ์ปลูกพืชไร่',
  'ระบบการเพาะปลูกและความถี่ของการเพาะปลูก',
  'ขาดการวางแผนการสร้างแหล่งกักเก็บน้ำไว้ใช้ประโยชน์ยามขาดน้ำฝน',
]

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

      <section className="relative overflow-hidden bg-[#232323] px-5 py-20 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="mb-12 text-center md:mb-16"
          >
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              สาเหตุการเกิด <span className="text-[#f18717]">ภัยแล้ง</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
              สาเหตุการเกิดภัยแล้งอาจเกิดขึ้นได้จากสาเหตุต่าง ๆ ดังนี้
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-14">
            <motion.img
              src="/NatureLang.png"
              alt="พื้นที่แห้งแล้งจากสาเหตุทางธรรมชาติ"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="aspect-[16/9] w-full object-cover"
            />

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="self-center"
            >
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                1. โดยธรรมชาติ
              </h3>
              <ul className="space-y-2 pl-5 text-base leading-relaxed text-white/90 marker:text-white md:text-lg">
                {NATURAL_CAUSES.map((cause) => (
                  <li key={cause} className="list-disc pl-1">
                    {cause}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="order-4 self-center lg:order-3"
            >
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                2. โดยการกระทำของมนุษย์
              </h3>
              <ul className="space-y-2 pl-5 text-base leading-relaxed text-white/90 marker:text-white md:text-lg">
                {HUMAN_CAUSES.map((cause) => (
                  <li key={cause} className="list-disc pl-1">
                    {cause}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.img
              src="/HumanLang.png"
              alt="โรงงานอุตสาหกรรมและมลพิษจากกิจกรรมของมนุษย์"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="order-3 aspect-[16/9] w-full object-cover lg:order-4"
            />
          </div>
        </div>
      </section>
    </>
  )
})

WhatIsLangSection.displayName = 'WhatIsLangSection'

export { WhatIsLangSection }
