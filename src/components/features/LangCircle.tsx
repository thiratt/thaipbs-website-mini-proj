import { forwardRef } from 'react'
import { motion } from 'motion/react'

type ImpactItem = {
  iconSrc: string
  iconAlt: string
  text: string
}

const LEFT_ITEMS: Array<ImpactItem> = [
  {
    iconSrc: '/ต้นกล้า.png',
    iconAlt: 'ต้นกล้า',
    text: 'ผลผลิตทางการเกษตรลดลง ไม่เพียงพอต่อการบริโภค และการเลี้ยงปศุสัตว์',
  },
  {
    iconSrc: '/ดิน.png',
    iconAlt: 'ดิน',
    text: 'เกิดการกัดเซาะ ทัดกร่อนภูมิทัศน์ พื้นดินแห้งแล้งและเกิดการพังทลายของผิวดิน',
  },
  {
    iconSrc: '/ลม.png',
    iconAlt: 'ลม',
    text: 'เกิดฝุ่นละออง พายุฝุ่น เพราะพื้นดินแห้งแล้งขาดน้ำ',
  },
  {
    iconSrc: '/น้ำ.png',
    iconAlt: 'น้ำ',
    text: 'ประชาชนเกิดความอดอยากเนื่องจากการขาดน้ำ ในการอุปโภคบริโภค',
  },
  {
    iconSrc: '/ธรรมชาติ.png',
    iconAlt: 'ธรรมชาติ',
    text: 'เกิดความเสียหายต่อที่อยู่อาศัยของสัตว์ ที่ได้รับผลกระทบทั้งบนบกและในน้ำ',
  },
]

const RIGHT_ITEMS: Array<ImpactItem> = [
  {
    iconSrc: '/ไวรัส.png',
    iconAlt: 'โรคระบาด',
    text: 'เกิดภาวะขาดน้ำ ขาดสารอาหาร และเพิ่มโอกาสเกิดโรคระบาด',
  },
  {
    iconSrc: '/หาม.png',
    iconAlt: 'การอพยพ',
    text: 'เกิดการอพยพย้ายถิ่นของประชากร',
  },
  {
    iconSrc: '/โรงน้ำ.png',
    iconAlt: 'โรงไฟฟ้าพลังน้ำ',
    text: 'ผลผลิตกระแสไฟฟ้าลดลง เนื่องจากการไหลของน้ำผ่านเขื่อนลดลง',
  },
  {
    iconSrc: '/โรงงาน.png',
    iconAlt: 'โรงงาน',
    text: 'การประกอบการด้านอุตสาหกรรมต้องหยุดชะงัก เพราะขาดแคลนน้ำที่ใช้ในกระบวนการผลิต',
  },
  {
    iconSrc: '/ไฟไหม้.png',
    iconAlt: 'ไฟป่า',
    text: 'เพิ่มโอกาสการเกิดไฟป่าในช่วงเกิดภัยแล้ง',
  },
]

function ImpactCard({ item, index }: { item: ImpactItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="flex items-start gap-4 md:gap-5"
    >
      <div className="flex size-[68px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#e7e4df] shadow-[0_8px_18px_rgba(0,0,0,0.2)] md:size-[78px]">
        <img
          src={item.iconSrc}
          alt={item.iconAlt}
          className="size-full object-cover"
          loading="lazy"
        />
      </div>

      <p className="pt-1 text-base font-medium leading-relaxed text-white/92 md:text-[1.08rem]">
        {item.text}
      </p>
    </motion.div>
  )
}

export const LangCircleSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#232323] px-5 py-20 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 text-center md:mb-16"
        >
          <h2 className="text-4xl font-black tracking-tight text-[#f18717] md:text-6xl">
            ผลกระทบของภัยแล้ง
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
            ผลกระทบของภัยแล้งผลกระทบที่อาจเกิดขึ้นได้จากภาวะภัยแล้ง มีดังนี้
          </p>
        </motion.div>

        <div className="grid gap-x-12 gap-y-8 md:grid-cols-2 md:gap-y-10 lg:gap-x-18">
          <div className="space-y-7 md:space-y-8">
            {LEFT_ITEMS.map((item, index) => (
              <ImpactCard key={item.text} item={item} index={index} />
            ))}
          </div>

          <div className="space-y-7 md:space-y-8">
            {RIGHT_ITEMS.map((item, index) => (
              <ImpactCard
                key={item.text}
                item={item}
                index={index + LEFT_ITEMS.length}
              />
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14 text-center text-xs text-white/60 md:text-sm"
        >
          ที่มา : 1784 : กรมป้องกันและบรรเทาสาธารณภัย กระทรวงมหาดไทย
        </motion.p>
      </div>
    </section>
  )
})

LangCircleSection.displayName = 'LangCircleSection'
