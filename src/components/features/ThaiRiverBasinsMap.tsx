import { forwardRef } from 'react'
import { motion } from 'motion/react'

const legendData = [
  { label: 'ลุ่มน้ำภาคเหนือ', color: '#4CAF50' },
  { label: 'ลุ่มน้ำภาคตะวันออกเฉียงเหนือ', color: '#FF9800' },
  { label: 'ลุ่มน้ำภาคกลาง', color: '#d2444b' },
  { label: 'ลุ่มน้ำภาคใต้', color: '#03A9F4' },
]

const ThaiRiverBasinsMap = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section ref={ref} className="relative overflow-clip bg-[#101719] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/12" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-18vw] top-[8%] size-[58vw] rounded-full bg-[#38bdf8]/8 blur-[220px]" />
        <div className="absolute left-[-22vw] top-[58%] size-[50vw] rounded-full bg-[#f18717]/4 blur-[220px]" />
        <div className="absolute right-[-6vw] top-[2%] hidden select-none text-[clamp(10rem,23vw,25rem)] font-black uppercase leading-none tracking-[-0.08em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.024)] lg:block">
          Basins
        </div>
      </div>

      <div className="relative mx-auto px-4 pb-24 pt-24 sm:px-8 md:pb-32 md:pt-32 lg:px-10 lg:pb-40 lg:pt-36">
        <motion.header
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
          className="border-t border-white/14 pt-6 lg:pt-8"
        >
          <div className="flex items-center gap-3 text-[0.66rem] font-black uppercase tracking-[0.22em] text-[#38bdf8] sm:text-xs">
            <span className="h-px w-8 bg-[#38bdf8]" />
            <span>Water geography · Thailand</span>
          </div>

          <div className="mt-12 grid items-end gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 xl:gap-24">
            <div className="flex items-start">
              <span className="text-[clamp(9rem,23vw,23rem)] font-black leading-[0.66] tracking-[-0.095em] text-white">22</span>
              <span className="ml-3 mt-[0.08em] text-[clamp(1.4rem,3vw,3.2rem)] font-black leading-none text-[#38bdf8]">ลุ่มน้ำ</span>
            </div>

            <div className="border-l border-white/12 pl-5 sm:pl-8 lg:mb-4 lg:pl-10">
              <h2 className="text-[clamp(3rem,5.8vw,6.4rem)] font-black leading-[0.9] tracking-[-0.06em]">
                <span className="block">ลุ่มน้ำหลัก</span>
                <span className="block text-[#38bdf8]">ของประเทศไทย</span>
              </h2>
              <p className="mt-6 max-w-2xl text-sm font-medium leading-7 text-white/48 sm:text-base sm:leading-8">
                พื้นที่น้ำของประเทศไม่ได้แบ่งตามเส้นจังหวัด แต่เชื่อมต่อกันตามภูมิประเทศและทางไหลของน้ำ
                การแบ่งลุ่มน้ำจึงเป็นฐานสำคัญของการบริหารจัดการทรัพยากรน้ำทั้งระบบ
              </p>
            </div>
          </div>
        </motion.header>

        <div className="mt-20 grid gap-14 lg:mt-28 lg:grid-cols-[0.58fr_1.42fr] lg:gap-20 xl:gap-28">
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="border-y border-white/12 py-7">
              <p className="text-[0.66rem] font-black uppercase tracking-[0.2em] text-white/30">New basin framework</p>
              <h3 className="mt-4 text-[clamp(2rem,3.8vw,4rem)] font-black leading-[0.95] tracking-[-0.05em]">
                มารู้จัก
                <span className="block text-[#38bdf8]">ลุ่มน้ำทั่วไทย</span>
              </h3>
              <p className="mt-6 max-w-md text-sm font-medium leading-7 text-white/44 sm:text-base sm:leading-8">
                เมื่อวันที่ 11 กุมภาพันธ์ 2564 พระราชกฤษฎีกากำหนดลุ่มน้ำ พ.ศ. 2564
                ได้ปรับการแบ่งพื้นที่ลุ่มน้ำใหม่ เพื่อให้การจัดการน้ำสอดคล้องกับพื้นที่และวิถีชีวิตประชาชนมากขึ้น
              </p>
            </div>

            <div className="grid grid-cols-2 border-b border-white/12">
              <div className="border-r border-white/12 py-6 pr-5">
                <p className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-white/28">ลุ่มน้ำหลัก</p>
                <p className="mt-2 text-[clamp(2.8rem,5vw,5.2rem)] font-black leading-none tabular-nums text-white">22</p>
              </div>
              <div className="py-6 pl-5">
                <p className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-white/28">ลุ่มน้ำสาขา</p>
                <p className="mt-2 text-[clamp(2.8rem,5vw,5.2rem)] font-black leading-none tabular-nums text-[#38bdf8]">353</p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-xs font-semibold leading-6 text-white/30 sm:text-sm sm:leading-7">
              การปรับครั้งนี้ถือเป็นการเปลี่ยนแปลงสำคัญในรอบ 3 ทศวรรษ และครอบคลุมพื้นที่กว่า 500,000 ตร.กม. ทั่วประเทศ
            </p>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-90px' }}
            transition={{ duration: 0.78, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="pointer-events-none absolute inset-[8%_8%_16%] rounded-full bg-[#38bdf8]/12 blur-[100px]" />
            <div className="relative border-y border-white/12 py-8 sm:py-10 lg:py-12">
              <div className="mb-8 flex items-center justify-between gap-6 text-[0.64rem] font-black uppercase tracking-[0.18em] text-white/28">
                <span>22 main river basins</span>
                <span>Thailand</span>
              </div>

              <img src="/thai.png" alt="แผนที่ลุ่มน้ำหลักของประเทศไทย" className="mx-auto w-full max-w-2xl drop-shadow-[0_28px_60px_rgba(0,0,0,0.5)]" />

              <div className="mt-10 grid border-t border-white/10 sm:grid-cols-2">
                {legendData.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="flex items-center gap-3 border-b border-white/10 py-4 sm:odd:border-r sm:odd:pr-5 sm:even:pl-5"
                  >
                    <span className="h-2.5 w-8 shrink-0" style={{ backgroundColor: item.color }} />
                    <span className="text-sm font-bold text-white/62">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-5 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-white/24 sm:flex-row sm:items-center sm:justify-between">
          <span>River basin framework · พ.ศ. 2564</span>
          <span className="shrink-0">22 ลุ่มน้ำหลัก · 353 ลุ่มน้ำสาขา</span>
        </div>
      </div>
    </section>
  )
})

ThaiRiverBasinsMap.displayName = 'ThaiRiverBasinsMap'

export { ThaiRiverBasinsMap }
