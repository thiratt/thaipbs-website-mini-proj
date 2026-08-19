import { forwardRef, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { DROUGHT_FOOD_ITEMS } from '@/content/drought-food'

export const DroughtFoodSection = forwardRef<HTMLElement>((_props, ref) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % DROUGHT_FOOD_ITEMS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [activeIndex])

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % DROUGHT_FOOD_ITEMS.length)
  }

  const prevSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + DROUGHT_FOOD_ITEMS.length) % DROUGHT_FOOD_ITEMS.length,
    )
  }

  return (
    <section
      ref={ref}
      className="relative bg-ink-soft min-h-svh py-20 px-4 md:px-12 flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-6xl mx-auto text-center space-y-12 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-3 md:gap-4 drop-shadow-md">
            <span className="text-8xl md:text-9xl font-black text-white tracking-tighter">
              {DROUGHT_FOOD_ITEMS.length}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide">
              เมนูอาหารแนะนำใน{' '}
              <span className="underline decoration-4 underline-offset-8">
                ฤดูแล้ง
              </span>
            </h2>
          </div>
        </motion.div>

        <div className="relative w-full max-w-4xl mx-auto">
          <Button
            onClick={prevSlide}
            className="hidden xl:flex absolute -left-16 top-1/3 -translate-y-1/2 z-20 rounded-full"
            variant="secondary"
            size="icon-lg"
          >
            <ChevronLeft />
          </Button>
          <Button
            onClick={nextSlide}
            className="hidden xl:flex absolute -right-16 top-1/3 -translate-y-1/2 z-20 rounded-full"
            variant="secondary"
            size="icon-lg"
          >
            <ChevronRight />
          </Button>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-8"
            >
              <div className="relative w-full aspect-video md:aspect-21/9 lg:aspect-2/1 bg-black/10 rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
                <img
                  src={DROUGHT_FOOD_ITEMS[activeIndex].imageSrc}
                  alt={DROUGHT_FOOD_ITEMS[activeIndex].name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent md:hidden flex flex-col justify-end p-6 text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {DROUGHT_FOOD_ITEMS[activeIndex].name}
                  </h3>
                </div>
              </div>

              <div className="hidden md:block max-w-2xl space-y-4">
                <h3 className="text-4xl text-background font-bold drop-shadow-sm">
                  {DROUGHT_FOOD_ITEMS[activeIndex].name}
                </h3>
                <p className="text-xl text-background leading-relaxed font-medium">
                  {DROUGHT_FOOD_ITEMS[activeIndex].description}
                </p>
              </div>

              <div className="md:hidden text-left space-y-3 px-2">
                <p className="text-lg text-background leading-relaxed">
                  {DROUGHT_FOOD_ITEMS[activeIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 md:gap-6 flex-wrap px-4">
          {DROUGHT_FOOD_ITEMS.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                'relative w-16 h-16 md:w-24 md:h-24 rounded-2xl overflow-hidden transition-all duration-300',
                activeIndex === index
                  ? 'ring-4 ring-background scale-110 shadow-xl'
                  : 'opacity-60 hover:opacity-100 hover:scale-105',
              )}
            >
              <img
                src={item.imageSrc}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
})

DroughtFoodSection.displayName = 'DroughtFoodSection'
