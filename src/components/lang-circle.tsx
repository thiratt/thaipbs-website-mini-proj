import { forwardRef, useEffect, useMemo, useRef, useState } from 'react'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  MotionValue,
} from 'motion/react'
import { scroll, animate, type AnimationPlaybackControls } from 'motion'

const items = [
  {
    detail:
      'เดือนวัฏจักรฤดูร้อนโดยทั่วไป ฤดูแล้งส่วนใหญ่ในภาคตะวันออกเฉียงเหนือจะเริ่มประมาณกลางเดือนตุลาคม-พฤศจิกายนและสิ้นสุดประมาณกลางเดือนพฤษภาคมปีถัดไป ช่วงเวลาที่แห้งแล้งที่สุดมักอยู่ระหว่างเดือนกุมภาพันธ์ถึงเมษายน ซึ่งมีอากาศร้อนจัดและอัตราการระเหยสูง ทั้งนี้ การเริ่มต้นและสิ้นสุดของฤดูแล้งอาจผันแปรได้ในแต่ละปีขึ้นอยู่กับปัจจัยธรรมชาติ',
  },
  {
    title: 'พฤษจิกายน',
    detail:
      ' เป็นช่วงที่ ฝนเริ่มลดลงอย่าง ชัดเจน และ อากาศเริ่มเย็น ลงในตอนกลางคืน พื้นดินเริ่มแห้ง ความชื้นใน อากาศลดลง ชาวนาเริ่มเก็บเกี่ยวผลผลิต เช่น ข้าวนาปี ต้นไม้เริ่มผลัดใบและพักตัว เพื่อรอฤดูฝนใหม่',
  },
  {
    title: 'ธันวาคม',
    detail:
      ' เป็นช่วงที่ ฝนแทบไม่ตกแล้ว และ อุณหภูมิช่วงเช้ายังเย็น ส่วนกลางวันเริ่มร้อนขึ้น ความชื้นในดินลดลงอย่าง ต่อเนื่อง พื้นดินเริ่มแข็งและแห้ง แตกระแหงในบางพื้นที่ เป็นช่วงที่เกษตรกรเตรียม แปลงเพื่อปลูกพืชฤดูแล้ง เช่น มันสำปะหลัง หรือ ข้าวโพด',
  },
  {
    title: 'มกราคม',
    detail:
      'เข้าสู่ฤดูหนาวช่วงปลายและเริ่มร้อนในตอนกลางวัน ความแห้งแล้งชัดเจนขึ้นบางพื้นที่เริ่มขาดแคลนน้ำใบไม้เริ่มร่วงมากขึ้น ต้นไม้ผลัดใบเข้าสู่ช่วงพักตัวเต็มที่',
  },
  {
    title: 'กุมภาพันธ์',
    detail:
      'เป็นช่วงเริ่มต้นของอากาศร้อนและมีการระเหยของน้ำสูง ปริมาณน้ำในแม่น้ำลำคลองและบ่อเก็บน้ำลดลงเกิดไฟป่าและการเผาในที่โล่งบ่อยครั้งถือเป็นจุดเริ่มต้นของ “ช่วงแล้งที่สุดของปี”',
  },
  {
    title: 'มีนาคม',
    detail:
      'อุณหภูมิสูงสุดของปี โดยเฉพาะภาคอีสานและภาคเหนือ ดินแห้งแตกระแหง ต้นไม้เหี่ยวเฉาเกิดไฟป่าบ่อยและฝุ่นควันหนาแน่น น้ำในแหล่งน้ำธรรมชาติลดลงอย่างมาก',
  },
  {
    title: 'เมษายน',
    detail:
      'อากาศยังร้อนจัด แต่เริ่มมีลมพายุฤดูร้อนและฝนฟ้าคะนองบางวัน ความชื้นเริ่มกลับมาเล็กน้อยในบางพื้นที่เป็นช่วงที่เกษตรกรเริ่มเตรียมพื้นที่เพื่อรับฤดูฝนใหม่',
  },
  {
    title: 'พฤษภาคม',
    detail:
      'เริ่มมีฝนตกชุกขึ้นเรื่อย ๆ พืชพรรณเริ่มฟื้นตัว เขียวชอุ่มอีกครั้งถือเป็นการเปลี่ยนผ่านจากฤดูแล้งสู่ฤดูฝน อย่างเป็นทางการ',
  },
]

interface SlideProps {
  item: { title?: string; detail: string }
  i: number
  scrollYProgress: MotionValue<number>
  totalItems: number
}

function Slide({ item, i, scrollYProgress, totalItems }: SlideProps) {
  const progressPerItem = 1 / (totalItems - 1)

  const start = (i - 1) * progressPerItem

  const center = i * progressPerItem

  const end = (i + 1) * progressPerItem

  const opacity = useTransform(
    scrollYProgress,
    [start, center, end],
    [0, 1, 0],
    { clamp: true },
  )

  return (
    <div className="shrink-0 w-full">
      <motion.div style={{ opacity }}>
        <h3 className="text-3xl font-semibold text-primary">{item.title}</h3>
        <div className="space-y-6 text-primary md:text-lg lg:text-2xl leading-relaxed">
          {item.detail}
        </div>
      </motion.div>
    </div>
  )
}

const LangCircleSection = forwardRef<HTMLElement>((_props, ref) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const movingGroupRef = useRef<HTMLDivElement>(null)
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const triggerPoints = useMemo(() => {
    const baseTrigger = 0.140625
    return Array.from(
      { length: items.length - 1 },
      (_, i) => baseTrigger * (i + 1),
    )
  }, [items.length])

  const [index, setIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    let newIndex = 0

    for (let i = triggerPoints.length - 1; i >= 0; i--) {
      if (latest >= triggerPoints[i]) {
        newIndex = i + 1

        break
      }
    }

    setIndex(newIndex)
  })

  useEffect(() => {
    const section = sectionRef.current
    const movingGroup = movingGroupRef.current
    const contentContainer = contentContainerRef.current

    if (!section || !movingGroup || !contentContainer) return

    let animation: AnimationPlaybackControls | null = null
    let stopScroll: (() => void) | null = null

    const setupAnimation = () => {
      if (stopScroll) stopScroll()
      if (animation) animation.cancel()

      const contentWidth = contentContainer.offsetWidth || 1
      const totalMoveX = (items.length - 1) * contentWidth

      animation = animate(movingGroup, {
        transform: ['none', `translateX(-${totalMoveX}px)`],
      })

      stopScroll = scroll(animation, {
        target: section,
      })
    }

    setupAnimation()

    window.addEventListener('resize', setupAnimation)

    return () => {
      window.removeEventListener('resize', setupAnimation)
      if (stopScroll) stopScroll()
      if (animation) animation.cancel()
    }
  }, [items.length])

  return (
    <section ref={ref} className="relative bg-primary/5">
      <div ref={sectionRef} className="w-full h-[500vh]">
        <div className="sticky top-0 h-svh overflow-hidden">
          <div className="px-18 py-16 md:py-24 lg:py-32 h-full w-full">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#6b4423] mb-16 md:mb-24">
              วัฏจักรฤดูแล้ง
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-[15%_auto] gap-12">
              <div className="flex">
                <img src="/flag.webp" alt="Map with Thailand flag" />
              </div>

              <div className="relative">
                <div className="flex overflow-hidden" ref={contentContainerRef}>
                  <motion.div ref={movingGroupRef} className="flex">
                    {items.map((item, i) => (
                      <Slide
                        key={i}
                        item={item}
                        i={i}
                        scrollYProgress={scrollYProgress}
                        totalItems={items.length}
                      />
                    ))}
                  </motion.div>
                </div>

                <div className="flex justify-end items-center gap-2 select-none">
                  <span className="text-primary font-medium opacity-60">
                    {index + 1}/{items.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute top-32 left-10 w-2 h-2 bg-[#a8d5ba] rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-48 right-20 w-3 h-3 bg-[#7db89a] rounded-full opacity-30 animate-pulse [animation-delay:1s]"></div>
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-[#a8d5ba] rounded-full opacity-40 animate-pulse [animation-delay:2s]"></div>
      <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-[#6b4423] rounded-full opacity-20 animate-pulse [animation-delay:1.5s]"></div> */}
    </section>
  )
})

LangCircleSection.displayName = 'LangCircleSection'

export { LangCircleSection }
