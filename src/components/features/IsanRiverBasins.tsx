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
      className="relative bg-primary/5 min-h-svh flex items-center justify-center"
    >
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-primary">
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
      </div>
    </section>
  )
})

export { IsanRiverBasins }
