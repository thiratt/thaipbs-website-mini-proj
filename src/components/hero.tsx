import { Button } from './ui/button'
import { ArrowDown } from 'lucide-react'
import { forwardRef } from 'react'

const HeroSection = forwardRef<HTMLElement, { nextPage?: () => void }>(
  ({ nextPage }, ref) => {
    return (
      <section ref={ref} className="relative h-svh w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/hero-bg.jpg"
            alt="Hero Image"
            className="w-full h-full object-cover object-center scale-105 animate-[scale-in_20s_ease-in-out_infinite]"
          />
          {/* Gradient Overlays for better text readability */}
          <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/70" />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up [animation-delay:400ms] fill-mode-[forwards]">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-white to-white/80">
              แล้งเราไม่เท่ากัน
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-xl md:text-3xl text-white/95 font-light mb-8 max-w-3xl leading-relaxed animate-fade-in-up [animation-delay:600ms] fill-mode-[forwards]">
            ทำไม? ยังไง? เพราะอะไร?
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-white/90 max-w-2xl mb-10 leading-relaxed animate-fade-in-up [animation-delay:800ms] fill-mode-[forwards]">
            ค้นพบเรื่องราวและข้อมูลเชิงลึกเกี่ยวกับปัญหาภัยแล้งที่ส่งผลกระทบต่อผู้คนในพื้นที่ต่างๆ
            อย่างไม่เท่าเทียมกัน
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center animate-fade-in-up [animation-delay:1000ms] fill-mode-[forwards]">
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
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-white animate-scroll-down" />
          </div>
        </div>
      </section>
    )
  },
)

HeroSection.displayName = 'HeroSection'

export { HeroSection }
