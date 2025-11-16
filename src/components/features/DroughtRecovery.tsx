import { forwardRef } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const DroughtRecovery = forwardRef<HTMLElement>((_props, ref) => {
  const recoveryItems = [
    {
      title: 'การลอกคลอง',
      description:
        'การขุดลอกตะกอน ดิน และวัชพืชที่สะสมอยู่ในคลองออก เพื่อเพิ่มความลึกและความจุของน้ำ ทำให้ น้ำไหลได้สะดวกและลดปัญหาน้ำท่วมขัง ช่วยเพิ่มประสิทธิภาพในการกักเก็บน้ำใช้ในฤดูแล้ง',
      imagePlaceholder: '1.webp',
    },
    {
      title: 'การขุดบ่อ',
      description:
        'การขุดบ่อในไร่นาหรือแหล่งกักเก็บน้ำในครัวเรือนทุกแห่งเพิ่มขึ้น ไม่ได้ช่วยเรื่องการเกษตรในพื้นที่ขาดแคลนน้ำไม่ให้แหล่งน้ำถาวรเป็นวารีเพิ่มแหล่งน้ำสำรองที่สามารถใช้ได้ตลอดปี',
      imagePlaceholder: '2.jpg',
    },
    {
      title: 'ขุดเจาะบ่อบาดาล',
      description:
        'การขุดเจาะหรือติดตั้งท่อเจาะลงไปใต้พื้นดินเพื่อเข้าถึงชั้นน้ำบาดาล และนำน้ำขึ้นมาใช้ประโยชน์ในภาคอุปโภคบริโภค ภาคเกษตร หรืออุตสาหกรรม เป็นแหล่งน้ำสำรองที่สำคัญในช่วงฤดูแล้ง',
      imagePlaceholder: '3.webp',
    },
    {
      title: 'ปลูกพืชคลุมดิน',
      description:
        'เป็นการปลูกพืชที่มีระบบรากแข็งแรงและแผ่กระจาย เช่น พืชตระกูลถั่วหรือหญ้าแฝก บนพื้นที่ที่โล่งหรือพื้นที่ลาดชัน เพื่อช่วยยึดดิน ลดการชะล้างพังทลาย และรักษาสมดุลความชุ่มชื้นของดิน',
      imagePlaceholder: '4.jpg',
    },
    {
      title: 'ฟื้นฟูพื้นที่ต้นน้ำลำธาร',
      description:
        'การปลูกป่าไม้และพืชพื้นถิ่นคืนในพื้นที่ต้นน้ำ หรือพื้นที่เสื่อมโทรม เพื่อฟื้นฟูสภาพป่าให้กลับมามีความอุดมสมบูรณ์ ช่วยดูดซับและเก็บความชุ่มชื้นในดิน ช่วยลดการพังทลายของดิน ทำให้ระบบนิเวศสมดุล',
      imagePlaceholder: '5.jpg',
    },
  ]

  const RecoveryCard = ({
    title,
    description,
    imagePlaceholder,
  }: (typeof recoveryItems)[0]) => (
    <Card className="max-w-md pt-0">
      <CardContent className="px-0 overflow-hidden rounded-t-xl">
        <img
          src={imagePlaceholder}
          alt={title}
          className="aspect-video h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
      </CardContent>

      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )

  return (
    <section ref={ref} className="relative bg-primary/5 min-h-svh px-18">
      <div className="container mx-auto px-4 py-12 md:py-22">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-5xl font-bold text-primary">
            การฟื้นฟูหลังฤดูแล้ง
          </h2>
          <p className="text-base md:text-lg text-primary max-w-4xl mx-auto mt-4 leading-relaxed">
            หลังฤดูแล้งควรฟื้นฟูแหล่งน้ำ คลอง หนอง บึง อ่างเก็บน้ำ
            และพื้นที่ต้นน้ำ โดยการลอกคลอง ขุดบ่อ
            หรือสร้างแหล่งกักเก็บน้ำเพิ่มเติม
            พร้อมปลูกพืชคลุมดินรอบแหล่งน้ำเพื่อลดการชะล้างของดิน
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recoveryItems.map((item, index) => (
            <RecoveryCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
})

export { DroughtRecovery }
