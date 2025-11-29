import { forwardRef } from 'react'

import { PhotoProvider, PhotoView } from 'react-photo-view'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const DroughtFoodMenu = forwardRef<HTMLElement>((_props, ref) => {
  const foodItems = [
    {
      name: 'ห่อหมกผักหวานไข่มดแดง',
      description:
        'อาหารอีสานที่เป็นที่นิยมในช่วงหน้าแล้งคือไข่มดแดงและผักหวาน ที่จะหาได้ในช่วงฤดูแล้งของทุกปี',
      imagePlaceholder: 'Hor-Mok-Pak-Wan-Kai-Mot-Daeng.jpg',
    },
    {
      name: 'ข้าวปุ้นแกงปู',
      description:
        'นำวัตถุดิบตามฤดูกาลในช่วงหน้าแล้งอย่างปูนาที่มีมันปูมากำให้ อาหารมีรสชาติอร่อยมากขึ้น มาทำอาหารพื้นถิ่นอย่างข้าวปุ้นแกงปู',
      imagePlaceholder: 'Khao-Pun-Kaeng-Pu.jpg',
    },
    {
      name: 'อ่อมหอยขม',
      description:
        'เป็นเมนูอีสานในหน้าแล้ง เป็นหอยที่จำศีลในหน้าแล้ง เมื่อน้ำแห้งมันจะจำศีลซ่อนตัวอยู่ใต้ดินตามแหล่งที่เคยมีน้ำ',
      imagePlaceholder: 'Om-Hoi-Khom.jpg',
    },
    {
      name: 'อ่อมเขียดน้อย',
      description:
        'เมื่อน้ำแห้งขอดเหลือเพียงลำน้ำใหญ่แล้วแหล่งอาหารหายากจึงต้องหาไส้เขียดน้อย ส่องเขียดน้อย ส่องเขียดน้อย นำมาทำแกงอ่อมกินกันตามครัวเรือน',
      imagePlaceholder: 'Om-Kiad-Noi.jpg',
    },
  ]

  return (
    <section
      ref={ref}
      className="relative bg-linear-to-b from-[#b85a3a] via-[#e5e19f] via-5% to-[#e5e19f] min-h-svh px-18"
    >
      <div className="container mx-auto px-4 py-12 md:py-22">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary">
            แล้วเราจะมีอะไร "อาหาร" ในฤดูแล้ง?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <PhotoProvider>
            {foodItems.map((item, index) => (
              <Card className="pt-0" key={index}>
                <CardContent className="px-0">
                  <div className="bg-primary/5 rounded-t-xl overflow-hidden">
                    <PhotoView key={index} src={item.imagePlaceholder}>
                      <img
                        src={item.imagePlaceholder}
                        alt={item.name}
                        className="aspect-video h-64 w-full object-cover cursor-pointer hover:scale-105 transition-transform"
                      />
                    </PhotoView>
                  </div>
                </CardContent>
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </PhotoProvider>
        </div>
      </div>
    </section>
  )
})

export { DroughtFoodMenu }
