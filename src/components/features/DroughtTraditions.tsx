import { forwardRef } from 'react'

const DroughtTraditions = forwardRef<HTMLElement>((_props, ref) => {
  const traditions = [
    {
      title: 'บุญบั้งไฟ',
      description:
        'งานบุญบั้งไฟจัดขึ้นในช่วงฤดูการทำนา เป็นการบูชาพญาแถน (พระอินทร์) เพื่อให้ฝนตกต้องตามฤดูกาล โดยมีที่มาจากนิทานพื้นบ้านเรื่องผาแดงนางไอ่ ในเทศกาลบุญบั้งไฟวันแรกมีการสร้างสรรค์ขบวนอลังการ มีนางรำ และดนตรีพื้นบ้าน เทพบุตร เทพธิดาแต่งตัวสวยงามในขบวนแห่ สำหรับวันที่สองจะเป็นการจุดบั้งไฟเพื่อขอฝน',
      imagePlaceholder: 'Boon-Bang-Fai.jpg',
    },
    {
      title: 'แห่นางแมว',
      description:
        'เป็นประเพณีที่จัดขึ้นเพื่อขอฝนในยามที่เกิดความแห้งแล้ง และเป็นผลเสียกับไร่นาในการแห่นางแมวจะต้องใช้แมวตัวเมียสีดำใส่กะทอ หามแห่ไปตามบ้านต่าง ๆ ชาวบ้านจะช่วยกันสาดน้ำให้แมวร้องมากที่สุดจึงจะเป็นผลดี ขบวนแห่บางครั้งจะใช้เวลานานเกือบทั้งวัน',
      imagePlaceholder: 'Hae-Nang-Maew.jpg',
    },
    {
      title: 'ประเพณีสงกรานต์',
      description:
        'แม้จะเป็นที่รู้จักในฐานะเทศกาลสาดน้ำ แต่ในอดีตสงกรานต์เป็นประเพณีที่เน้นการรดน้ำดำหัวผู้ใหญ่และทำบุญบางพื้นที่มีประเพณีเกี่ยวเนื่องกับหน้าแล้ง เช่น การปล่อยปลา',
      imagePlaceholder: 'Songkran-Ritual.jpg',
    },
  ]

  const TraditionItem = ({
    title,
    description,
    imagePlaceholder,
    index,
  }: (typeof traditions)[0] & { index: number }) => {
    const isEven = index % 2 === 0

    return (
      <div
        className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 py-8 ${!isEven ? 'md:flex-row-reverse' : ''}`}
      >
        <div className="w-full md:w-1/3 shrink-0">
          <div className="w-full aspect-square bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-300/50 shadow-lg overflow-hidden">
            <img
              src={imagePlaceholder}
              alt={title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-center text-lg font-bold text-[#5D4E37] mt-2">
            {title}
          </p>
        </div>

        <div className="w-full md:w-2/3">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
            {description}
          </p>
        </div>
      </div>
    )
  }

  return (
    <section ref={ref} className="relative bg-primary/5 min-h-svh px-18">
      <div className="container mx-auto px-4 py-12 md:py-22 max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#5D4E37] mb-2">
            "แล้ง" นี้ให้อะไร?
          </h2>
        </div>

        <div className="divide-y-2 divide-primary">
          {traditions.map((tradition, index) => (
            <TraditionItem key={index} {...tradition} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
})

export { DroughtTraditions }
