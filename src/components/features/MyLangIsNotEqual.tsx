import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const heatLevels = [
  {
    label: 'เฝ้าระวัง',
    color: 'bg-gradient-to-br from-[#9DC65D] to-[#7FA84A]',
    shadowColor: 'shadow-[#7FA84A]/50',
    temp: '27.0 - 32.9°C',
    description:
      'ผลกระทบ : เริ่มมีอาการอ่อนเพลีย ปวดศีรษะ ตัวแสบร้อน อาจเป็นตะคริวจากความร้อน',
  },
  {
    label: 'เตือนภัย',
    color: 'bg-gradient-to-br from-[#F4D03F] to-[#D4AF37]',
    shadowColor: 'shadow-[#D4AF37]/50',
    temp: '33.0 - 41.9°C',
    description:
      'ผลกระทบ : เสี่ยงโรคเพลียแดด และตะคริวจาก ความร้อน อาจพัฒนาเป็นลมร้อนหรือฮีสโตรกได้',
  },
  {
    label: 'อันตราย',
    color: 'bg-gradient-to-br from-[#E67E22] to-[#CA6510]',
    shadowColor: 'shadow-[#CA6510]/50',
    temp: '42.0 - 51.9°C',
    description:
      'ผลกระทบ : ร้างกายทำงานผิดปกติ เสี่ยงเพลียแดด ตะคริว และลมร้อน / ฮีสโตรกสูง',
  },
  {
    label: 'อันตรายมาก',
    color: 'bg-gradient-to-br from-[#C0392B] to-[#922B21]',
    shadowColor: 'shadow-[#922B21]/50',
    temp: '≥ 52.0°C',
    description: 'ผลกระทบ : เสี่ยงลมร้อนหรือฮีสโตรกอย่างรุนแรง อันตรายถึงชีวิต',
  },
]

const MyLangIsNotEqual = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="relative bg-[#ffe3bb] min-h-svh px-12 flex items-center justify-center"
    >
      <div className="grid md:grid-cols-2 w-full">
        <div className="relative">
          {heatLevels.map((level, index) => (
            <div
              key={index}
              className="group relative mb-6 md:mb-8 max-w-md"
              style={{
                transform: `translateX(${index * 60}px) translateY(${index * -20}px)`,
                zIndex: heatLevels.length - index,
              }}
            >
              <div className="relative">
                <div
                  className={`${level.color} ${level.shadowColor} shadow-2xl rounded-lg p-6 md:p-8 transform transition-transform hover:scale-105`}
                  style={{
                    clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
                    minHeight: '100px',
                  }}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white text-center drop-shadow-lg">
                    {level.label}
                  </h3>
                </div>

                <div
                  className="absolute top-4 left-0 w-full h-full opacity-60"
                  style={{
                    background: `linear-gradient(to bottom right, rgba(0,0,0,0.3), rgba(0,0,0,0.5))`,
                    clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
                    zIndex: -1,
                    filter: 'blur(4px)',
                  }}
                />
              </div>

              <div
                className={cn(
                  'absolute top-1/2 -translate-y-1/2 rotate-67 transition-all',
                  index + 1 === heatLevels.length
                    ? '-right-8 group-hover:-right-10'
                    : '-right-12 group-hover:-right-14',
                )}
              >
                <span className="text-sm md:text-base font-semibold whitespace-nowrap px-2 py-1 rounded">
                  {level.temp}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="text-primary text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              "ที่ของฉัน"...... "ที่ของเธอ"
            </h2>
            <p className="text-2xl md:text-4xl font-bold">
              "<span className="text-orange-500">แล้ง</span>" เราไม่เท่ากัน
            </p>
          </div>
          <div className="space-y-4 text-white">
            {heatLevels.map((level, index) => (
              <div
                key={index}
                className={cn(
                  'backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow',
                  level.color,
                  level.shadowColor,
                )}
              >
                <p className="leading-relaxed">{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

export { MyLangIsNotEqual }
