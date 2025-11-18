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
      className="relative bg-[#003b5c] min-h-svh px-18 flex flex-col justify-center gap-4"
    >
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#63c5fc"
            fill-opacity="1"
            d="M0,128L80,117.3C160,107,320,85,480,101.3C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] z-10">
        <div className="flex flex-col justify-center text-white mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">22 ลุ่มน้ำไทย</h2>
          <p className="text-lg mx-auto leading-relaxed">
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
          <div className="flex flex-wrap justify-center gap-4 text-white">
            {legendData.map((item, index) => (
              <div key={index} className="flex items-center gap-1">
                <div
                  className="w-4 h-4 rounded-full shadow-md"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm md:text-base font-semibold">
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
