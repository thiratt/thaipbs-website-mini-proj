import { forwardRef } from 'react'

const WhatIsLangSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="relative min-h-svh overflow-hidden bg-linear-to-b from-[#e8e4dc] to-[#ffe3bb] flex items-center px-8 py-18 md:px-18 md:py-0"
    >
      <div className="grid grid-cols-1 items-center lg:grid-cols-[65%_auto] w-full">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight">
            คุณเข้าใจคำว่า "ฤดูแล้ง" มาก แค่ไหน?
          </h2>

          <div className="space-y-6 text-primary/90 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
            <p>
              แล้ง หมายถึง แห้ง ไม่มีน้ำไม่มีฝน
              เรียกฤดูกาลน้ำแห้งหรือฤดูกาลไม่มีฝนตกว่า หน้าแล้ง หรือ ฤดูแล้ง
              เช่น ปริมาณน้ำในเขื่อนต่างๆ ลดลงมากในหน้าแล้ง
              ฤดูแล้งปีนี้ยาวนานกว่าปีก่อน ๆ เกษตรกรในหลายจังหวัด
              ต้องเลื่อนการเพาะปลูกข้าวเพราะประสบกับปัญหาภัยแล้ง.
            </p>
            <p>
              ฝนแล้ง หมายถึง ไม่มีฝนตก เช่น
              ประเทศเอธิโอเปียประสบปัญหาฝนแล้งติดต่อกันหลายปี.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative max-w-md mx-auto lg:ml-auto aspect-2/3">
            <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="blobClip">
                  <path
                    d="M44.7,-76.4C58.8,-69.3,71.8,-59.1,79.9,-45.8C88,-32.6,91.2,-16.3,89.8,-0.9C88.4,14.6,82.4,29.2,74.2,42.8C66,56.4,55.6,68.9,42.8,76.9C30,84.9,15,88.4,-0.3,88.9C-15.6,89.4,-31.2,86.9,-44.3,79.2C-57.4,71.5,-68,58.6,-75.4,44.2C-82.8,29.8,-87,13.9,-86.8,-2.1C-86.6,-18.1,-82,-36.2,-73.2,-50.1C-64.4,-64,-51.4,-73.7,-37.2,-81C-23,-88.3,-11.5,-93.1,1.8,-96.1C15.1,-99.1,30.6,-100.3,44.7,-76.4Z"
                    transform="translate(100 150)"
                  />
                </clipPath>

                <filter id="blobShadow">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
                  <feOffset dx="4" dy="4" result="offsetblur" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <path
                fill="#a67c52"
                opacity="0.15"
                d="M44.7,-76.4C58.8,-69.3,71.8,-59.1,79.9,-45.8C88,-32.6,91.2,-16.3,89.8,-0.9C88.4,14.6,82.4,29.2,74.2,42.8C66,56.4,55.6,68.9,42.8,76.9C30,84.9,15,88.4,-0.3,88.9C-15.6,89.4,-31.2,86.9,-44.3,79.2C-57.4,71.5,-68,58.6,-75.4,44.2C-82.8,29.8,-87,13.9,-86.8,-2.1C-86.6,-18.1,-82,-36.2,-73.2,-50.1C-64.4,-64,-51.4,-73.7,-37.2,-81C-23,-88.3,-11.5,-93.1,1.8,-96.1C15.1,-99.1,30.6,-100.3,44.7,-76.4Z"
                transform="translate(106 156)"
              />

              <image
                href="/lang.webp"
                x="0"
                y="0"
                width="200"
                height="300"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#blobClip)"
                className="transition-transform duration-700"
              />
            </svg>

            {/* <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#a67c52] rounded-full opacity-30 blur-2xl animate-pulse"></div> */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#c9a882] rounded-full opacity-20 blur-3xl animate-pulse [animation-delay:1s]"></div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-2 h-2 bg-[#6b4423] rounded-full opacity-20"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-[#a67c52] rounded-full opacity-20"></div>
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-[#6b4423] rounded-full opacity-20"></div>
      <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-[#a67c52] rounded-full opacity-20"></div>
    </section>
  )
})

WhatIsLangSection.displayName = 'WhatIsLangSection'

export { WhatIsLangSection }
