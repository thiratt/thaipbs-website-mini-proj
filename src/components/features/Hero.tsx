import { forwardRef } from 'react'
import { motion } from 'motion/react'

const HeroSection = forwardRef<HTMLElement, { nextPage?: () => void }>(
  ({}, ref) => {
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
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.2)_42%,rgba(35,35,35,0.18)_64%,rgba(35,35,35,0.52)_80%,#232323_100%)]" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col md:flex-row justify-start font-bold mb-6"
          >
            <span className="text-9xl text-orange-500">แล้ง</span>
            <span className="text-5xl text-white mt-6">เราไม่เท่ากัน</span>
          </motion.h1>
        </div>
      </section>
    )
  },
)

HeroSection.displayName = 'HeroSection'

export { HeroSection }
