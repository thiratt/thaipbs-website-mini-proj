import { forwardRef, useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { cn } from '@/lib/utils'

const TRADITIONS = [
  {
    title: 'บุญบั้งไฟ',
    subtitle: 'The Rocket Festival',
    description:
      'งานบุญบั้งไฟจัดขึ้นในช่วงฤดูการทำนา เป็นการบูชาพญาแถน (พระอินทร์) เพื่อให้ฝนตกต้องตามฤดูกาล โดยมีที่มาจากนิทานพื้นบ้านเรื่องผาแดงนางไอ่ ในเทศกาลบุญบั้งไฟวันแรกมีการสร้างสรรค์ขบวนอลังการ มีนางรำ และดนตรีพื้นบ้าน เทพบุตร เทพธิดาแต่งตัวสวยงามในขบวนแห่ สำหรับวันที่สองจะเป็นการจุดบั้งไฟเพื่อขอฝน',
    imagePlaceholder: 'Boon-Bang-Fai.jpg',
  },
  {
    title: 'แห่นางแมว',
    subtitle: 'Cat Parading Ceremony',
    description:
      'เป็นประเพณีที่จัดขึ้นเพื่อขอฝนในยามที่เกิดความแห้งแล้ง และเป็นผลเสียกับไร่นาในการแห่นางแมวจะต้องใช้แมวตัวเมียสีดำใส่กะทอ หามแห่ไปตามบ้านต่าง ๆ ชาวบ้านจะช่วยกันสาดน้ำให้แมวร้องมากที่สุดจึงจะเป็นผลดี ขบวนแห่บางครั้งจะใช้เวลานานเกือบทั้งวัน',
    imagePlaceholder: 'Hae-Nang-Maew.jpg',
  },
  {
    title: 'ประเพณีสงกรานต์',
    subtitle: 'Songkran Festival',
    description:
      'แม้จะเป็นที่รู้จักในฐานะเทศกาลสาดน้ำ แต่ในอดีตสงกรานต์เป็นประเพณีที่เน้นการรดน้ำดำหัวผู้ใหญ่และทำบุญบางพื้นที่มีประเพณีเกี่ยวเนื่องกับหน้าแล้ง เช่น การปล่อยปลา เพื่อเป็นการต้อนรับฤดูกาลใหม่และขอพรเพื่อความอุดมสมบูรณ์',
    imagePlaceholder: 'Songkran-Ritual.jpg',
  },
]

export const DroughtTraditions = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section ref={ref} className="relative bg-[#b85a3a] min-h-svh">
      <div className="container mx-auto px-4 py-12 md:py-22 relative z-10">
        <div className="text-center mb-24 md:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-yellow-400 mb-6"
          >
            "แล้ง" นี้ให้อะไร?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-background font-light tracking-wide"
          >
            ความเชื่อ ประเพณี และวิถีชีวิตที่ผูกพันกับสายน้ำ
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto space-y-32 md:space-y-48">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-yellow-500/50 to-transparent -translate-x-1/2 md:translate-x-0" />

          <PhotoProvider>
            {TRADITIONS.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </PhotoProvider>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-32 md:mt-48 max-w-2xl mx-auto"
        >
          <p className="text-2xl md:text-3xl italic text-yellow-200/90 leading-relaxed">
            "ในความแห้งแล้ง ยังมีความงดงามของศรัทธาที่หล่อเลี้ยงจิตใจผู้คน"
          </p>
        </motion.div>
      </div>
    </section>
  )
})

const TimelineItem = ({
  item,
  index,
}: {
  item: (typeof TRADITIONS)[0]
  index: number
}) => {
  const isEven = index % 2 === 0
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className={cn(
        'relative flex flex-col md:flex-row gap-8 md:gap-16 items-center',
        isEven ? 'md:flex-row' : 'md:flex-row-reverse',
      )}
    >
      <div className="w-full md:w-1/2 group">
        <div className="relative aspect-4/3 rounded-4xl overflow-hidden border-2 border-yellow-500/30 shadow-2xl shadow-yellow-900/40">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <PhotoView src={item.imagePlaceholder}>
            <img
              src={item.imagePlaceholder}
              alt={item.title}
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 cursor-pointer"
            />
          </PhotoView>
        </div>
        <div className="hidden md:block absolute top-1/2 left-1/2 w-4 h-4 bg-yellow-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(234,179,8,0.6)] z-20" />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <div
          className={cn(
            'space-y-4 p-8 rounded-3xl bg-black/20 backdrop-blur-sm border border-white/5 hover:border-yellow-500/20 transition-colors duration-300',
            isEven ? 'md:text-left' : 'md:text-right',
          )}
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
              {item.title}
            </h3>
            <span className="text-yellow-400/80 font-serif italic tracking-wide">
              {item.subtitle}
            </span>
          </div>

          <div
            className="w-12 h-1 bg-linear-to-r from-yellow-500 to-orange-600 rounded-full mx-auto md:mx-0"
            style={{
              marginLeft: isEven ? 0 : 'auto',
              marginRight: isEven ? 'auto' : 0,
            }}
          />

          <p className="text-gray-100 leading-relaxed text-lg">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

DroughtTraditions.displayName = 'DroughtTraditions'
