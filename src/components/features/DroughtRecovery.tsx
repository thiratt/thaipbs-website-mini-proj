import { forwardRef } from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

const RECOVERY_ITEMS = [
  {
    title: 'การลอกคลอง',
    category: 'Water Management',
    description:
      'การขุดลอกตะกอน ดิน และวัชพืชที่สะสมอยู่ในคลองออก เพื่อเพิ่มความลึกและความจุของน้ำ ทำให้ น้ำไหลได้สะดวกและลดปัญหาน้ำท่วมขัง ช่วยเพิ่มประสิทธิภาพในการกักเก็บน้ำใช้ในฤดูแล้ง',
    imagePlaceholder: '1.webp',
  },
  {
    title: 'การขุดบ่อ',
    category: 'Reservoir',
    description:
      'การขุดบ่อในไร่นาหรือแหล่งกักเก็บน้ำในครัวเรือนทุกแห่งเพิ่มขึ้น ไม่ได้ช่วยเรื่องการเกษตรในพื้นที่ขาดแคลนน้ำไม่ให้แหล่งน้ำถาวรเป็นวารีเพิ่มแหล่งน้ำสำรองที่สามารถใช้ได้ตลอดปี',
    imagePlaceholder: '2.jpg',
  },
  {
    title: 'ขุดเจาะบ่อบาดาล',
    category: 'Groundwater',
    description:
      'การขุดเจาะหรือติดตั้งท่อเจาะลงไปใต้พื้นดินเพื่อเข้าถึงชั้นน้ำบาดาล และนำน้ำขึ้นมาใช้ประโยชน์ในภาคอุปโภคบริโภค ภาคเกษตร หรืออุตสาหกรรม เป็นแหล่งน้ำสำรองที่สำคัญในช่วงฤดูแล้ง',
    imagePlaceholder: '3.webp',
  },
  {
    title: 'ปลูกพืชคลุมดิน',
    category: 'Agriculture',
    description:
      'เป็นการปลูกพืชที่มีระบบรากแข็งแรงและแผ่กระจาย เช่น พืชตระกูลถั่วหรือหญ้าแฝก บนพื้นที่ที่โล่งหรือพื้นที่ลาดชัน เพื่อช่วยยึดดิน ลดการชะล้างพังทลาย และรักษาสมดุลความชุ่มชื้นของดิน',
    imagePlaceholder: '4.jpg',
  },
  {
    title: 'ฟื้นฟูพื้นที่ต้นน้ำลำธาร',
    category: 'Reforestation',
    description:
      'การปลูกป่าไม้และพืชพื้นถิ่นคืนในพื้นที่ต้นน้ำ หรือพื้นที่เสื่อมโทรม เพื่อฟื้นฟูสภาพป่าให้กลับมามีความอุดมสมบูรณ์ ช่วยดูดซับและเก็บความชุ่มชื้นในดิน ช่วยลดการพังทลายของดิน ทำให้ระบบนิเวศสมดุล',
    imagePlaceholder: '5.jpg',
  },
]

export const DroughtRecovery = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="relative bg-[#f0fdf4] min-h-svh py-20 px-4 md:px-12"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-green-200/20 rounded-full blur-3xl" />
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-emerald-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-sm tracking-wide mb-4"
          >
            RECOVERY PLAN
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-emerald-950"
          >
            การฟื้นฟู<span className="text-emerald-600">หลังฤดูแล้ง</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-emerald-800/80 max-w-3xl mx-auto leading-relaxed"
          >
            แนวทางการบริหารจัดการและฟื้นฟูทรพยากรธรรมชาติและสิ่งแวดล้อม{' '}
            <br className="hidden md:block" /> เพื่อความยั่งยืนของระบบนิเวศ
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RECOVERY_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[400px] md:h-[500px] rounded-4xl overflow-hidden cursor-pointer"
            >
              <img
                src={item.imagePlaceholder}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black xl:via-black/20 to-transparent opacity-100 xl:opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-emerald-300 font-semibold tracking-wider text-sm uppercase">
                      {item.category}
                    </span>
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-emerald-300" />
                  </div>
                  <h3 className="text-3xl font-bold leading-tight mb-4 group-hover:text-emerald-100 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="max-h-[200px] xl:max-h-0 overflow-hidden group-hover:max-h-[200px] transition-[max-height] duration-500 ease-in-out">
                  <p className="text-gray-200 leading-relaxed text-sm md:text-base pb-2 opacity-100 xl:opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})

DroughtRecovery.displayName = 'DroughtRecovery'
