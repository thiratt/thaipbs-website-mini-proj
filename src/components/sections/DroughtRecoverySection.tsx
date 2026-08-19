import { forwardRef } from 'react'
import { motion } from 'motion/react'
import { DROUGHT_RECOVERY_ITEMS } from '@/content/recovery'

export const DroughtRecoverySection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="relative bg-[#f0fdf4] min-h-svh py-20 px-4 md:px-12"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-green-200/20 rounded-full blur-3xl" />
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-emerald-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto mt-4 relative z-10">
        <div className="text-center mb-16 space-y-6">
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {DROUGHT_RECOVERY_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative h-[400px] cursor-pointer overflow-hidden rounded-4xl md:h-[500px] lg:col-span-2 ${
                index === 3
                  ? 'lg:col-start-2'
                  : index === 4
                    ? 'lg:col-start-4'
                    : ''
              }`}
            >
              <img
                src={item.imageSrc}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black xl:via-black/20 to-transparent opacity-100 xl:opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
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

DroughtRecoverySection.displayName = 'DroughtRecoverySection'
