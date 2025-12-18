import { forwardRef } from 'react'
import { motion } from 'motion/react'
import { CloudSun, CloudOff, Info } from 'lucide-react'

const WhatIsLangSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-linear-to-b from-[#e8e4dc] to-[#ffe3bb] flex items-center justify-center py-20 px-4 md:px-8 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 text-yellow-700 rounded-full text-sm font-bold uppercase tracking-wider mb-2"
          >
            <Info size={16} strokeWidth={3} />
            Definition
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-gray-900 leading-tight"
          >
            คุณเข้าใจคำว่า
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-600 to-orange-600">
              "ฤดูแล้ง"
            </span>{' '}
            มากแค่ไหน?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative bg-white/60 backdrop-blur-md rounded-[2.5rem] p-8 lg:p-12 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <CloudSun size={120} className="text-orange-500" />
            </div>

            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform duration-300">
              <CloudSun size={32} />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 group-hover:text-orange-700 transition-colors">
              แล้ง (Drought)
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              หมายถึง{' '}
              <span className="font-semibold text-gray-800">
                ช่วงเวลาที่แห้ง ไม่มีน้ำ ไม่มีฝน
              </span>{' '}
              เรียกว่า "หน้าแล้ง" หรือ "ฤดูแล้ง" เป็นวัฏจักรปกติตามฤดูกาล เช่น
              ปริมาณน้ำในเขื่อนลดลงเพราะฝนทิ้งช่วง
              ทำให้กิจกรรมเพาะปลูกบางอย่างต้องเลื่อนออกไป
            </p>
            <div className="mt-8 pt-6 border-t border-orange-100/50">
              <span className="text-sm font-semibold text-orange-600/80 uppercase tracking-wide">
                Example Scenarios
              </span>
              <ul className="mt-2 space-y-2 text-gray-500">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  น้ำในเขื่อนลดลงตามฤดู
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  เลื่อนการทำนาปี
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative bg-white/60 backdrop-blur-md rounded-[2.5rem] p-8 lg:p-12 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <CloudOff size={120} className="text-red-500" />
            </div>

            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300">
              <CloudOff size={32} />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 group-hover:text-red-700 transition-colors">
              ฝนแล้ง (Rain Shortage)
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              หมายถึง{' '}
              <span className="font-semibold text-gray-800">
                ภาวะที่ไม่มีฝนตกยาวนานผิดปกติ
              </span>{' '}
              จนเกิดความเสียหายรุนแรง
              เป็นภัยพิบัติทางธรรมชาติที่ส่งผลกระทบต่อเนื่องหลายปี เช่น
              ในประเทศเอธิโอเปีย
            </p>

            <div className="mt-8 pt-6 border-t border-red-100/50">
              <span className="text-sm font-semibold text-red-600/80 uppercase tracking-wide">
                Example Scenarios
              </span>
              <ul className="mt-2 space-y-2 text-gray-500">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  ฝนไม่ตกต้องตามฤดูกาล
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  วิกฤตขาดแคลนน้ำอย่างหนัก
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-24 h-24 bg-yellow-300 rounded-full blur-[80px] opacity-40 mix-blend-multiply animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-300 rounded-full blur-[80px] opacity-40 mix-blend-multiply animate-pulse [animation-delay:2s]" />
    </section>
  )
})

WhatIsLangSection.displayName = 'WhatIsLangSection'

export { WhatIsLangSection }
