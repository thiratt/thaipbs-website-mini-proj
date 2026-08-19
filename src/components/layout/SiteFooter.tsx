import { forwardRef } from 'react'

const FOOTER_LOGOS = [
  { src: '/brand/it-msu-logo.webp', alt: 'IT MSU' },
  { src: '/brand/msu-logo.webp', alt: 'MSU' },
  { src: '/favicon.ico', alt: 'Thai PBS Local' },
  { src: '/brand/thai-pbs-footer-logo.jpg', alt: 'Thai PBS' },
]

const FOOTER_CREDITS = [
  'เกียรติศักดิ์ ไชยศิรินทร์',
  'ลักษมณ ภูสีทอง',
  'ชัยชนะ ขนานแข็ง',
  'อนุชิต มาตรพระคลัง',
  'สุพิชญา คูคำ',
  'เขมิกา โพธิ์ษา',
  'มณฑณา สิงห์ชู',
]

const SiteFooter = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <footer ref={ref} className="bg-[#202020] text-white">
      <div className="mx-auto grid min-h-[440px] max-w-[1160px] grid-cols-1 items-center gap-12 px-6 py-14 lg:grid-cols-[1fr_520px_260px] lg:gap-16 lg:py-0">
        <div className="hidden lg:block" aria-hidden="true" />

        <div className="flex flex-col items-center text-center lg:translate-y-6">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            {FOOTER_LOGOS.map((logo, index) => (
              <div
                key={logo?.src ?? `empty-${index}`}
                className="flex h-[88px] w-[88px] items-center justify-center overflow-hidden rounded-full bg-white sm:h-[102px] sm:w-[102px]"
              >
                {logo && (
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-full w-full object-contain p-2"
                  />
                )}
              </div>
            ))}
          </div>

          <p className="mt-10 text-[15px] font-semibold leading-[1.45] sm:text-[16px]">
            ศูนย์สร้างสรรค์สื่อเพื่อสาธารณะ มหาวิทยาลัยมหาสารคาม
            <br />
            ร่วมกับ สำนักเครือข่ายและการมีส่วนร่วมสาธารณะ ไทยพีบีเอส
            <br />© 2025 Longform Article Project
          </p>
        </div>

        <div className="self-center text-left text-[18px] font-semibold leading-[1.28] sm:text-[20px] lg:translate-y-8 lg:pl-7 lg:text-[19px]">
          <p>จัดทำโดย</p>
          {FOOTER_CREDITS.map((name) => (
            <p key={name}>{name}</p>
          ))}
        </div>
      </div>
    </footer>
  )
})

SiteFooter.displayName = 'SiteFooter'

export { SiteFooter }
