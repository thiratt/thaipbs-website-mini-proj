import { forwardRef } from 'react'

const legendData = [
  { label: 'ลุ่มน้ำภาคเหนือ', color: '#4CAF50' },
  { label: 'ลุ่มน้ำภาคตะวันออกเฉียงเหนือ', color: '#FF9800' },
  { label: 'ลุ่มน้ำภาคกลาง', color: '#d2444b' },
  { label: 'ลุ่มน้ำภาคใต้', color: '#03A9F4' },
]

const ThaiRiverBasinsMap = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="relative bg-primary/5 min-h-svh px-18 flex flex-col justify-center gap-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto]">
        <div className="flex flex-col justify-center  mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            22 ลุ่มน้ำไทย
          </h2>
          <p className="text-lg text-primary/90 mx-auto leading-relaxed">
            เมื่อวันที่ 11 กุมภาพันธ์ 2564 พระราชกฤษฎีกากำหนดลุ่มน้ำ พ.ศ.2564
            ลงประกาศในราชกิจจานุเบกษา แบ่งพื้นที่ลุ่มน้ำของประเทศไทยใหม่
            ให้มีความเหมาะสมกับการบริการ จัดการน้ำและวิถีชีวิตของประชาชน
            กำหนดให้ประเทศไทยมี 22 ลุ่มน้ำหลัก 353 ลุ่มน้ำสาขา และมีหมู่
            เกาะต่างๆ ของแต่ละลุ่มน้ำหลักอีกจำนวน 6 หมู่เกาะ
            ถือเป็นการเปลี่ยนแปลงการแบ่งกลุ่มพื้นที่ "ลุ่ม น้ำ" (river basins)
            ของประเทศไทยครั้งสำคัญ ภายหลังจากกำหนดให้พื้นที่ทั่วประเทศไทยประมาณ
            500,000 ตารางกิโลเมตร ถูกแบ่งออกเป็น 25 ลุ่มน้ำหลัก 254 ลุ่มน้ำสาขา
            มายาวนานร่วมสามทศวรรษ
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-full max-w-md  flex items-center justify-center">
            <img
              src="thai.png"
              alt="แผนที่ลุ่มน้ำไทย"
              className="h-full w-auto"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {legendData.map((item, index) => (
              <div key={index} className="flex items-center gap-1">
                <div
                  className="w-4 h-4 rounded-full shadow-md"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm md:text-base font-semibold text-gray-800">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

export { ThaiRiverBasinsMap }
