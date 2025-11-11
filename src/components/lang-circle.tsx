import { forwardRef, useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, useMotionValue, animate } from 'motion/react'

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

const LangCircleSection = forwardRef<HTMLElement>((_props, ref) => {
  const [index, setIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1
      const targetX = -index * containerWidth

      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      })
    }
  }, [index, x])

  return (
    <section
      ref={ref}
      className="relative w-full h-svh overflow-hidden bg-primary/5"
    >
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#6b4423] mb-16 md:mb-24 animate-fade-in-up [animation-delay:200ms] fill-mode-[forwards]">
            วัฏจักรฤดูแล้ง
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-[15%_auto] gap-12 lg:gap-16">
            {/* Left Side - Map Pin Illustration */}
            <div className="flex animate-fade-in-up [animation-delay:400ms] fill-mode-[forwards]">
              <img src="/flag.webp" />
            </div>

            {/* Right Side - Content */}
            <div className="relative space-y-8 animate-fade-in-up [animation-delay:600ms] fill-mode-[forwards]">
              <div className="flex overflow-hidden" ref={containerRef}>
                <motion.div className="flex" style={{ x }}>
                  {items.map((item, index) => (
                    <div key={index} className="shrink-0 w-full">
                      <h3 className="text-3xl font-semibold text-[#6b4423]">
                        {item.title}
                      </h3>
                      <div className="space-y-6 text-[#7d5d40] md:text-lg lg:text-2xl leading-relaxed">
                        {item.detail}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
              <div className="flex justify-end items-center gap-2 select-none">
                <span className="text-[#6b4423]">
                  {index + 1}/{items.length}
                </span>
                <Button
                  className="rounded-full"
                  disabled={index === 0}
                  onClick={() =>
                    setIndex((prev) => (prev - 1 + items.length) % items.length)
                  }
                >
                  <ChevronLeft />
                  ก่อนหน้า
                </Button>
                <Button
                  className="rounded-full"
                  disabled={index === items.length - 1}
                  onClick={() => setIndex((prev) => (prev + 1) % items.length)}
                >
                  ถัดไป
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-32 left-10 w-2 h-2 bg-[#a8d5ba] rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-48 right-20 w-3 h-3 bg-[#7db89a] rounded-full opacity-30 animate-pulse [animation-delay:1s]"></div>
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-[#a8d5ba] rounded-full opacity-40 animate-pulse [animation-delay:2s]"></div>
      <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-[#6b4423] rounded-full opacity-20 animate-pulse [animation-delay:1.5s]"></div>
    </section>
  )
})

LangCircleSection.displayName = 'LangCircleSection'

export { LangCircleSection }
