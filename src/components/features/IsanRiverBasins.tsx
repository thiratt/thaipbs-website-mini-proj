import { forwardRef } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const IsanRiverBasins = forwardRef<HTMLElement>((_props, ref) => {
  const basinData = [
    {
      title: 'ลุ่มน้ำโขงตะวันออกเฉียงเหนือ',
      description:
        'ลุ่มน้ำโขงตะวันออกเฉียงเหนือมีความสำคัญอย่างยิ่งต่อการเกษตรกรรมและการประมงในพื้นที่ น้ำจากแม่น้ำโขงใช้ในการเพาะปลูกข้าว อ้อย และพืชเศรษฐกิจอื่นๆ รวมถึงการเลี้ยงสัตว์น้ำ นอกจากนี้ยังเป็นแหล่งน้ำดื่มและใช้ในครัวเรือนของประชาชนในพื้นที่',
      mapPlaceholder: 'Map 1 Placeholder',
      image: 'khong.png',
    },
    {
      title: 'ลุ่มน้ำมูล',
      description:
        'ลุ่มน้ำมูลมีความสำคัญอย่างยิ่งต่อการเกษตรกรรมและการประมงในพื้นที่ เนื่องจากเป็นแหล่งน้ำที่สำคัญสำหรับการปลูกข้าว อ้อย มันสำปะหลัง และพืชอื่นๆ อีกทั้งยังเป็นที่อยู่อาศัยของสัตว์น้ำหลากหลายชนิด ทำให้เป็นแหล่งทรัพยากรธรรมชาติที่สำคัญสำหรับชุมชนในพื้นที่',
      mapPlaceholder: 'Map 2 Placeholder',
      image: 'moon.png',
    },
    {
      title: 'ลุ่มน้ำชี',
      description:
        'ลุ่มน้ำชีมีบทบาทสำคัญในด้านเกษตรกรรม การประมง และวิถีชีวิตของชุมชนในพื้นที่ น้ำจากลุ่มน้ำชีใช้ในการเพาะปลูกข้าว ซึ่งเป็นพืชเศรษฐกิจหลักของภาคตะวันออกเฉียงเหนือ รวมถึงการปลูกพืชอื่นๆ เช่น อ้อย มันสำปะหลัง และผักต่างๆ นอกจากนี้ยังเป็นแหล่งประมงน้ำจืดที่สำคัญ ซึ่งมีปลาและสัตว์น้ำหลากหลายชนิด',
      mapPlaceholder: 'Map 3 Placeholder',
      image: 'chee.png',
    },
  ]

  return (
    <section
      ref={ref}
      className="relative bg-linear-to-b from-[#003b5c] via-[#003b5c] via-99% to-[#63c5fc] min-h-svh flex px-6 py-12 md:px-12 md:py-18 lg:px-18"
    >
      <div className="container mx-auto z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            3 ลุ่มน้ำหลักภาคอีสาน
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {basinData.map((basin, index) => (
            <Card className="max-w-md pt-0" key={index}>
              <CardContent className="px-0">
                <div className="bg-primary/5 overflow-hidden">
                  <img
                    src={basin.image}
                    alt={basin.title}
                    className="aspect-video h-64 hover:scale-105 transition-transform w-full object-cover"
                  />
                </div>
              </CardContent>
              <CardHeader>
                <CardTitle>{basin.title}</CardTitle>
                <CardDescription>{basin.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 justify-items-center items-center mt-8 border-t pt-8 md:pt-12 border-primary/40">
          <div className="bg-white rounded-3xl w-full max-w-xl h-48 md:h-64 lg:h-80 text-center flex items-center justify-center">
            [Placeholder for additional map content]
          </div>
          <div className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
            วิดีโอทุ่งกุลาร้องไห้
          </div>
          <div className="bg-white rounded-3xl w-full max-w-xl h-48 md:h-64 lg:h-80 text-center flex items-center justify-center order-last">
            [Placeholder for additional map content]
          </div>
          <div className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
            วิดีโอแม่น้ำชีและวิถีลุ่มแม่น้ำ
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#63c5fc"
            fill-opacity="1"
            d="M0,256L80,245.3C160,235,320,213,480,208C640,203,800,213,960,213.3C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
})

export { IsanRiverBasins }
