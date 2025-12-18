import { forwardRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import { Map, PlayCircle, Waves } from 'lucide-react'
import { PhotoProvider, PhotoView } from 'react-photo-view'

const BASIN_DATA = [
  {
    id: 1,
    title: 'ลุ่มน้ำโขงตะวันออกเฉียงเหนือ',
    description:
      'ลุ่มน้ำโขงตะวันออกเฉียงเหนือมีความสำคัญอย่างยิ่งต่อการเกษตรกรรมและการประมงในพื้นที่ น้ำจากแม่น้ำโขงใช้ในการเพาะปลูกข้าว อ้อย และพืชเศรษฐกิจอื่นๆ รวมถึงการเลี้ยงสัตว์น้ำ นอกจากนี้ยังเป็นแหล่งน้ำดื่มและใช้ในครัวเรือนของประชาชนในพื้นที่',
    image: 'khong.png',
  },
  {
    id: 2,
    title: 'ลุ่มน้ำมูล',
    description:
      'ลุ่มน้ำมูลมีความสำคัญอย่างยิ่งต่อการเกษตรกรรมและการประมงในพื้นที่ เนื่องจากเป็นแหล่งน้ำที่สำคัญสำหรับการปลูกข้าว อ้อย มันสำปะหลัง และพืชอื่นๆ อีกทั้งยังเป็นที่อยู่อาศัยของสัตว์น้ำหลากหลายชนิด ทำให้เป็นแหล่งทรัพยากรธรรมชาติที่สำคัญสำหรับชุมชนในพื้นที่',
    image: 'moon.png',
  },
  {
    id: 3,
    title: 'ลุ่มน้ำชี',
    description:
      'ลุ่มน้ำชีมีบทบาทสำคัญในด้านเกษตรกรรม การประมง และวิถีชีวิตของชุมชนในพื้นที่ น้ำจากลุ่มน้ำชีใช้ในการเพาะปลูกข้าว ซึ่งเป็นพืชเศรษฐกิจหลักของภาคตะวันออกเฉียงเหนือ รวมถึงการปลูกพืชอื่นๆ เช่น อ้อย มันสำปะหลัง และผักต่างๆ นอกจากนี้ยังเป็นแหล่งประมงน้ำจืดที่สำคัญ ซึ่งมีปลาและสัตว์น้ำหลากหลายชนิด',
    image: 'chee.png',
  },
]

export const IsanRiverBasins = forwardRef<HTMLElement>((_props, ref) => {
  const [activeBasin, setActiveBasin] = useState(BASIN_DATA[0])

  return (
    <section
      ref={ref}
      className="relative bg-[#003b5c] min-h-screen py-24 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, #63c5fc 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 md:px-12 relative z-10 space-y-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div className="w-full lg:w-1/3 space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/50 text-cyan-300 text-sm font-medium mb-4"
              >
                <Map size={16} />
                DIGITAL ATLAS
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-white leading-tight"
              >
                3 ลุ่มน้ำหลัก
                <br />
                <span className="text-cyan-400">ภาคอีสาน</span>
              </motion.h2>
            </div>

            <div className="space-y-4">
              {BASIN_DATA.map((basin, index) => (
                <motion.button
                  key={basin.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  onClick={() => setActiveBasin(basin)}
                  className={cn(
                    'w-full text-left p-6 rounded-2xl transition-all duration-300 border backdrop-blur-sm group',
                    activeBasin.id === basin.id
                      ? 'bg-cyan-500/10 border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.15)]'
                      : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20',
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        'text-lg font-bold transition-colors',
                        activeBasin.id === basin.id
                          ? 'text-cyan-300'
                          : 'text-gray-300 group-hover:text-white',
                      )}
                    >
                      {basin.title}
                    </span>
                    {activeBasin.id === activeBasin.id && (
                      <Waves
                        size={20}
                        className={cn(
                          'transition-opacity duration-300',
                          activeBasin.id === basin.id
                            ? 'opacity-100 text-cyan-400'
                            : 'opacity-0',
                        )}
                      />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBasin.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="relative bg-black/20 backdrop-blur-xl rounded-[2.5rem] p-2 border border-white/10 overflow-hidden"
              >
                <div className="relative aspect-video rounded-4xl overflow-hidden bg-[#002639]">
                  <PhotoProvider>
                    <PhotoView src={activeBasin.image}>
                      <img
                        src={activeBasin.image}
                        alt={activeBasin.title}
                        className="w-full h-full object-contain p-8 hover:scale-105 transition-transform duration-700 cursor-zoom-in"
                      />
                    </PhotoView>
                  </PhotoProvider>
                </div>

                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    {activeBasin.title}
                    <div className="h-px flex-1 bg-linear-to-r from-cyan-500/50 to-transparent" />
                  </h3>
                  <p className="text-cyan-100/80 leading-relaxed text-lg">
                    {activeBasin.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              เรื่องราวจาก<span className="text-cyan-400">สายน้ำ</span>
            </h3>
            <p className="text-cyan-200/60 max-w-2xl mx-auto">
              สำรวจวิถีชีวิตและวัฒนธรรมที่ผูกพันกับแม่น้ำผ่านสารคดีสั้น
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: 'วิดีโอทุ่งกุลาร้องไห้',
                subtitle: 'ตำนานแห่งความแห้งแล้ง',
              },
              { title: 'วิดีโอแม่น้ำชี', subtitle: 'วิถีลุ่มแม่น้ำ' },
            ].map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative aspect-video rounded-3xl bg-black overflow-hidden border border-white/10 cursor-pointer shadow-2xl"
              >
                <div className="absolute inset-0 bg-linear-to-br from-cyan-900/40 to-blue-900/40 opacity-50 group-hover:opacity-75 transition-opacity" />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-all shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                    <PlayCircle
                      size={32}
                      className="text-white fill-white/20"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-white mb-1">
                      {video.title}
                    </h4>
                    <p className="text-cyan-200 text-sm">{video.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#63c5fc"
            fillOpacity="1"
            d="M0,256L80,245.3C160,235,320,213,480,208C640,203,800,213,960,213.3C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
})

IsanRiverBasins.displayName = 'IsanRiverBasins'
