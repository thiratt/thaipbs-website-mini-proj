import { forwardRef } from 'react'

const SocialIcon = ({ name }: { name: string }) => (
  <div className="w-8 h-8 border border-[#5D4E37] rounded-full flex items-center justify-center text-[#5D4E37] hover:bg-[#5D4E37]/10 transition-colors cursor-pointer">
    <span className="text-lg font-bold">{name}</span>
  </div>
)

const NewGenFooter = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <footer
      ref={ref}
      className="relative bg-primary/5 border-t border-gray-300/50"
    >
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#5D4E37] mb-2"
              style={{
                fontFamily: 'serif',
                textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
              }}
            >
              New Gen
            </h2>
            <p className="text-sm text-gray-700">
              หน้าแรก หมวดหมู่บทความมัลติมีเดีย
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <SocialIcon name="IG" />
              <SocialIcon name="FB" />
              <SocialIcon name="X" />
              <SocialIcon name="YT" />
            </div>

            <div className="text-sm text-right">
              <a href="#" className="text-[#5D4E37] hover:underline block">
                เข้าร่วมกับเชียร์ประสบการณ์
              </a>
              <a href="#" className="text-[#5D4E37] hover:underline block">
                เกี่ยวกับเรา New Gen
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
})

export { NewGenFooter }
