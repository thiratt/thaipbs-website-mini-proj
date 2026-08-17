import { forwardRef } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  Droplets,
  Factory,
  Flame,
  PawPrint,
  ShieldPlus,
  Sprout,
  UserRound,
  Wind,
  Wrench,
  Zap,
} from 'lucide-react'
import { motion } from 'motion/react'

type ImpactItem = {
  icon: LucideIcon
  text: string
  iconClassName: string
}

const LEFT_ITEMS: Array<ImpactItem> = [
  {
    icon: Sprout,
    text: 'ผลผลิตทางการเกษตรลดลง ไม่เพียงพอต่อการบริโภค และการเลี้ยงปศุสัตว์',
    iconClassName: 'text-[#7c4d23]',
  },
  {
    icon: Wrench,
    text: 'เกิดการกัดเซาะ ทัดกร่อนภูมิทัศน์ พื้นดินแห้งแล้งและเกิดการพังทลายของผิวดิน',
    iconClassName: 'text-[#8b5e3c]',
  },
  {
    icon: Wind,
    text: 'เกิดฝุ่นละออง พายุฝุ่น เพราะพื้นดินแห้งแล้งขาดน้ำ',
    iconClassName: 'text-[#406c94]',
  },
  {
    icon: Droplets,
    text: 'ประชาชนเกิดความอดอยากเนื่องจากการขาดน้ำ ในการอุปโภคบริโภค',
    iconClassName: 'text-[#1f88c9]',
  },
  {
    icon: PawPrint,
    text: 'เกิดความเสียหายต่อที่อยู่อาศัยของสัตว์ ที่ได้รับผลกระทบทั้งบนบกและในน้ำ',
    iconClassName: 'text-[#5d4937]',
  },
]

const RIGHT_ITEMS: Array<ImpactItem> = [
  {
    icon: ShieldPlus,
    text: 'เกิดภาวะขาดน้ำ ขาดสารอาหาร และเพิ่มโอกาสเกิดโรคระบาด',
    iconClassName: 'text-[#3a6fb1]',
  },
  {
    icon: UserRound,
    text: 'เกิดการอพยพย้ายถิ่นของประชากร',
    iconClassName: 'text-[#b85f3a]',
  },
  {
    icon: Zap,
    text: 'ผลผลิตกระแสไฟฟ้าลดลง เนื่องจากการไหลของน้ำผ่านเขื่อนลดลง',
    iconClassName: 'text-[#b7841a]',
  },
  {
    icon: Factory,
    text: 'การประกอบการด้านอุตสาหกรรมต้องหยุดชะงัก เพราะขาดแคลนน้ำที่ใช้ในกระบวนการผลิต',
    iconClassName: 'text-[#3e6d8d]',
  },
  {
    icon: Flame,
    text: 'เพิ่มโอกาสการเกิดไฟป่าในช่วงเกิดภัยแล้ง',
    iconClassName: 'text-[#da7d17]',
  },
]

function ImpactCard({ item, index }: { item: ImpactItem; index: number }) {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="flex items-start gap-4 md:gap-5"
    >
      <div className="flex size-[68px] shrink-0 items-center justify-center rounded-full border-2 border-black/70 bg-[#e7e4df] shadow-[0_8px_18px_rgba(0,0,0,0.2)] md:size-[78px]">
        <Icon
          className={`size-8 md:size-9 ${item.iconClassName}`}
          strokeWidth={2.2}
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
