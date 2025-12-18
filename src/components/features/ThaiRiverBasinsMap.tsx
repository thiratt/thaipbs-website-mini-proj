import { forwardRef } from 'react'
import { motion } from 'motion/react'
import { Map } from 'lucide-react'

const legendData = [
  { label: 'ลุ่มน้ำภาคเหนือ', color: '#4CAF50' },
  { label: 'ลุ่มน้ำภาคตะวันออกเฉียงเหนือ', color: '#FF9800' },
  { label: 'ลุ่มน้ำภาคกลาง', color: '#d2444b' },
  { label: 'ลุ่มน้ำภาคใต้', color: '#03A9F4' },
]

const ThaiRiverBasinsMap = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="relative bg-[#003b5c] min-h-svh flex flex-col justify-center py-20 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#63c5fc"
            fillOpacity="1"
            d="M0,128L80,117.3C160,107,320,85,480,101.3C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-xl">
                  <Map className="text-cyan-400" size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                  22 ลุ่มน้ำไทย
                </h2>
              </div>

              <p className="text-blue-100 text-lg md:text-xl leading-relaxed font-light mb-8">
                เมื่อวันที่ 11 กุมภาพันธ์ 2564 พระราชกฤษฎีกากำหนดลุ่มน้ำ
                พ.ศ.2564 ได้แบ่งพื้นที่ลุ่มน้ำของประเทศไทยใหม่
                เพื่อให้การบริหารจัดการน้ำสอดคล้องกับวิถีชีวิตประชาชน
                โดยกำหนดให้มี{' '}
                <span className="text-cyan-400 font-semibold">
                  22 ลุ่มน้ำหลัก
                </span>{' '}
                และ{' '}
                <span className="text-cyan-400 font-semibold">
                  353 ลุ่มน้ำสาขา
                </span>
              </p>

              <div className="p-6 bg-blue-900/40 rounded-2xl border border-blue-400/20">
                <p className="text-blue-200 italic">
                  "ถือเป็นการเปลี่ยนแปลงครั้งสำคัญในรอบ 3 ทศวรรษ
                  เพื่อการจัดการทรัพยากรน้ำที่ยั่งยืนและครอบคลุมพื้นที่กว่า
                  500,000 ตร.กม. ทั่วประเทศ"
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex flex-col items-center"
          >
            <div className="relative w-full max-w-lg mx-auto mb-8 group">
              <div className="absolute inset-0 bg-cyan-500/20 blur-[60px] rounded-full group-hover:bg-cyan-500/30 transition-all duration-500" />

              <img
                src="thai.png"
                alt="แผนที่ลุ่มน้ำไทย"
                className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3 w-full max-w-md mx-auto">
              {legendData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/5 hover:bg-white/20 transition-colors cursor-default"
                >
                  <div
                    className="w-3 h-3 rounded-full shadow-[0_0_10px_currentColor]"
                    style={{ backgroundColor: item.color, color: item.color }}
                  />
                  <span className="text-sm font-medium text-white/90">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

ThaiRiverBasinsMap.displayName = 'ThaiRiverBasinsMap'

export { ThaiRiverBasinsMap }
