import { forwardRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Waves } from 'lucide-react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { cn } from '@/lib/utils'
import {
  ISAN_RIVER_BASINS,
  RIVER_STORY_VIDEOS,
  type IsanRiverBasin,
} from '@/content/river-basins'
import { SectionTopline } from '@/components/editorial/SectionTopline'

export const IsanRiverBasinsSection = forwardRef<HTMLElement>((_props, ref) => {
  const [activeBasin, setActiveBasin] = useState<IsanRiverBasin>(ISAN_RIVER_BASINS[0])

  return (
    <section ref={ref} className="relative overflow-clip bg-water-ink py-24 text-white md:py-32 lg:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/12" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-20vw] top-[8%] size-[56vw] rounded-full bg-water/7 blur-[210px]" />
        <div className="absolute left-[-22vw] top-[48%] size-[48vw] rounded-full bg-water/4 blur-[220px]" />
        <div className="absolute right-[-5vw] top-[3%] hidden select-none text-[clamp(10rem,24vw,27rem)] font-black uppercase leading-none tracking-[-0.08em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.025)] lg:block">
          ISAN
        </div>
      </div>

      <div className="relative z-10 mx-auto space-y-32 px-4 sm:px-8 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[0.48fr_1.52fr] lg:gap-16 xl:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="border-t border-white/14 pt-5">
              <SectionTopline label="Northeast · River systems" tone="water" />
              <div className="mt-8 flex items-end gap-4">
                <span className="text-[clamp(6rem,12vw,11rem)] font-black leading-[0.68] tracking-[-0.09em] text-water">03</span>
                <h2 className="pb-1 text-[clamp(2.2rem,4vw,4.4rem)] font-black leading-[0.9] tracking-[-0.055em]">
                  ลุ่มน้ำหลัก
                  <span className="block text-white/42">ภาคอีสาน</span>
                </h2>
              </div>
              <p className="mt-7 max-w-sm text-sm font-medium leading-7 text-white/42 sm:text-base sm:leading-8">
                สามระบบลุ่มน้ำที่หล่อเลี้ยงพื้นที่เกษตร การประมง และวิถีชีวิตของผู้คนในภาคตะวันออกเฉียงเหนือ
              </p>
            </div>

            <div className="mt-10 border-y border-white/12">
              {ISAN_RIVER_BASINS.map((basin, index) => {
                const active = activeBasin.id === basin.id
                return (
                  <button
                    key={basin.id}
                    type="button"
                    onClick={() => setActiveBasin(basin)}
                    className="group relative grid w-full grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-white/10 py-6 text-left last:border-b-0"
                  >
                    <span className={cn('text-xs font-black tabular-nums transition-colors duration-300', active ? 'text-water' : 'text-white/20 group-hover:text-white/45')}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={cn('text-[clamp(1.25rem,2vw,1.8rem)] font-black tracking-[-0.03em] transition-colors duration-300', active ? 'text-white' : 'text-white/42 group-hover:text-white/75')}>
                      {basin.short}
                    </span>
                    <Waves className={cn('size-5 transition-all duration-300', active ? 'text-water opacity-100' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:text-white/35 group-hover:opacity-100')} />
                    <span className={cn('absolute inset-y-0 left-0 w-px origin-center bg-water transition-transform duration-300', active ? 'scale-y-100' : 'scale-y-0')} />
                  </button>
                )
              })}
            </div>
            <div className="mt-5 flex justify-between text-[0.6rem] font-black uppercase tracking-[0.18em] text-white/22">
              <span>เลือกเพื่อสำรวจ</span>
              <span>{String(activeBasin.id).padStart(2, '0')} / 03</span>
            </div>
          </motion.div>

          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeBasin.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="border-y border-white/12 py-5">
                  <div className="mb-5 flex items-center justify-between gap-5 text-[0.62rem] font-black uppercase tracking-[0.18em] text-white/25">
                    <span>Digital basin atlas</span>
                    <span>Click map to enlarge</span>
                  </div>
                  <PhotoProvider>
                    <PhotoView src={activeBasin.imageSrc}>
                      <div className="group relative flex min-h-[390px] cursor-zoom-in items-center justify-center overflow-hidden bg-[#111d20] px-5 py-8 sm:min-h-[500px] sm:px-8 lg:min-h-[620px]">
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_62%_42%,rgba(56,189,248,0.12),transparent_36%)]" />
                        <img
                          src={activeBasin.imageSrc}
                          alt={activeBasin.title}
                          className="relative z-10 max-h-[560px] w-full object-contain drop-shadow-[0_24px_55px_rgba(0,0,0,0.48)] transition-transform duration-700 group-hover:scale-[1.025]"
                        />
                      </div>
                    </PhotoView>
                  </PhotoProvider>
                </div>

                <div className="grid gap-7 border-b border-white/12 py-8 md:grid-cols-[0.55fr_1.45fr] md:gap-12 lg:py-10">
                  <div>
                    <p className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-water">
                      Basin {String(activeBasin.id).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 text-[clamp(2rem,3.2vw,3.4rem)] font-black leading-[1.05] tracking-[-0.045em]">
                      {activeBasin.title}
                    </h3>
                  </div>
                  <p className="max-w-3xl text-sm font-medium leading-7 text-white/52 sm:text-base sm:leading-8">
                    {activeBasin.description}
                  </p>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        <div className="border-t border-white/12 pt-10 lg:pt-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr] lg:gap-16"
          >
            <div>
              <p className="text-[0.66rem] font-black uppercase tracking-[0.2em] text-water">Stories from the river</p>
              <p className="mt-4 max-w-sm text-sm font-medium leading-7 text-white/40 sm:text-base">
                จากเส้นบนแผนที่ สู่ชีวิตจริงของผู้คนที่ผูกพันกับแม่น้ำ
              </p>
            </div>
            <h3 className="text-[clamp(3rem,6vw,6.8rem)] font-black leading-[0.86] tracking-[-0.06em]">
              เรื่องราวจาก
              <span className="block text-water">สายน้ำ</span>
            </h3>
          </motion.div>

          <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:mt-16 lg:gap-x-10 lg:gap-y-16">
            {RIVER_STORY_VIDEOS.map((video, index) => (
              <motion.article
                key={`${video.title}-${video.src}`}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className={cn(index % 2 === 1 && 'md:translate-y-16')}
              >
                <div className="mb-4 flex items-center justify-between border-t border-white/12 pt-4 text-[0.62rem] font-black uppercase tracking-[0.18em] text-white/24">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>Documentary</span>
                </div>
                <div className="relative aspect-video overflow-hidden bg-black">
                  <iframe
                    src={video.src}
                    title={video.title}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

IsanRiverBasinsSection.displayName = 'IsanRiverBasinsSection'
