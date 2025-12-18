import { forwardRef } from 'react'
import { motion } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const HeroSection = forwardRef<HTMLElement, { nextPage?: () => void }>(
  ({ nextPage }, ref) => {
    return (
      <section ref={ref} className="relative h-svh w-full overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src="/hero-bg.jpg"
            alt="Hero Image"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1.15 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/70" />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
          >
            <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-white to-white/80">
              แล้งเราไม่เท่ากัน
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-4 text-xl md:text-3xl text-white/95 font-light mb-8 max-w-3xl leading-relaxed"
          >
            ทำไม? ยังไง? เพราะอะไร?
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="text-base md:text-lg text-white/90 max-w-2xl mb-10 leading-relaxed"
          >
            ค้นพบเรื่องราวและข้อมูลเชิงลึกเกี่ยวกับปัญหาภัยแล้งที่ส่งผลกระทบต่อผู้คนในพื้นที่ต่างๆ
            อย่างไม่เท่าเทียมกัน
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-white text-gray-900 hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-white/20 transition-all duration-300"
              onClick={nextPage}
            >
              <span className="relative z-10 flex items-center gap-2">
                เริ่มสำรวจ
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white flex items-start justify-center p-2 opacity-80">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-1.5 h-3 rounded-full bg-white"
            />
          </div>
        </motion.div>
      </section>
    )
  },
)

HeroSection.displayName = 'HeroSection'

export { HeroSection }
