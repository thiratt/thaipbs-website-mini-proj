import {
  forwardRef,
  useRef,
  useState,
  useCallback,
  type JSX,
  useLayoutEffect,
} from 'react'

import { cn } from '@/lib/utils'
import { LANG_CIRCLE_ITEMS } from '@/constants/lang-circle'

const LangCircleSection = forwardRef<HTMLElement>((_props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [lines, setLines] = useState<JSX.Element[]>([])
  const resizeObserverRef = useRef<ResizeObserver | null>(null)
  const debounceTimeoutRef = useRef<number | undefined>(undefined)

  const updateLines = useCallback(() => {
    if (!containerRef.current) return
    const details = containerRef.current.querySelectorAll('.detail-div')
    const titles = containerRef.current.querySelectorAll('.title-div')
    const newLines: JSX.Element[] = []
    const containerRect = containerRef.current.getBoundingClientRect()

    details.forEach((detail, i) => {
      const title = titles[i]
      const detailRect = detail.getBoundingClientRect()
      const titleRect = title.getBoundingClientRect()

      const isEven = i % 2 === 0
      const x1 = isEven
        ? detailRect.right - containerRect.left
        : detailRect.left - containerRect.left
      const y1 = detailRect.top + detailRect.height / 2 - containerRect.top
      const x2 = isEven
        ? titleRect.left - containerRect.left
        : titleRect.right - containerRect.left
      const y2 = titleRect.top + titleRect.height / 2 - containerRect.top

      const nextElement = isEven ? titles[i + 1] : details[i + 1]
      const nextElementRect = nextElement?.getBoundingClientRect()

      const tx1 = isEven
        ? titleRect.left + titleRect.width / 2 - containerRect.left
        : detailRect.right - detailRect.width / 2 - containerRect.left
      const ty1 = isEven
        ? titleRect.bottom - containerRect.top
        : detailRect.bottom - containerRect.top
      const tx2 = nextElementRect
        ? nextElementRect.left + nextElementRect.width / 2 - containerRect.left
        : x2
      const ty2 = nextElementRect ? nextElementRect.top - containerRect.top : y2

      newLines.push(
        <g key={i}>
          <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--primary)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {nextElementRect && (
            <line
              x1={tx1}
              y1={ty1}
              x2={tx2}
              y2={ty2}
              stroke="var(--primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 4"
            />
          )}
          <circle cx={x1} cy={y1} r="6" fill="var(--primary)" />
        </g>,
      )
    })
    setLines(newLines)
  }, [])

  useLayoutEffect(() => {
    if (!containerRef.current) return

    updateLines()

    const handleResize = () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current)
      }
      debounceTimeoutRef.current = window.setTimeout(updateLines, 10)
    }

    resizeObserverRef.current = new ResizeObserver(handleResize)
    resizeObserverRef.current.observe(containerRef.current)

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect()
      }
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current)
      }
    }
  }, [updateLines])
  return (
    <section
      ref={ref}
      className="relative bg-[#ffe3bb] min-h-svh flex px-6 py-12 md:px-12 md:py-18 lg:px-18"
    >
      <div className="w-full max-w-7xl mx-auto space-y-8 md:space-y-12">
        <header className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary text-center leading-tight">
            วัฏจักรฤดูแล้ง
          </h2>
          <p className="text-primary text-base md:text-lg lg:text-xl leading-relaxed max-w-5xl mx-auto">
            เดือนวัฏจักรฤดูร้อนโดยทั่วไป
            ฤดูแล้งส่วนใหญ่ในภาคตะวันออกเฉียงเหนือจะเริ่มประมาณกลางเดือนตุลาคม-พฤศจิกายนและสิ้นสุดประมาณกลางเดือนพฤษภาคมปีถัดไป
            ช่วงเวลาที่แห้งแล้งที่สุดมักอยู่ระหว่างเดือนกุมภาพันธ์ถึงเมษายน
            ซึ่งมีอากาศร้อนจัดและอัตราการระเหยสูง ทั้งนี้
            การเริ่มต้นและสิ้นสุดของฤดูแล้งอาจผันแปรได้ในแต่ละปีขึ้นอยู่กับปัจจัยธรรมชาติ
          </p>
        </header>
        <div className="relative space-y-12 w-full">
          <h3 className="text-primary text-center text-2xl md:text-3xl lg:text-4xl font-semibold">
            วัฏจักรฤดูแล้งประเทศไทย
          </h3>
          <div
            ref={containerRef}
            className="relative space-y-64 md:space-y-80 lg:space-y-96"
          >
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              aria-hidden="true"
            >
              {lines}
            </svg>
            {LANG_CIRCLE_ITEMS.map((item, i) => (
              <article
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 justify-items-center items-center"
                role="listitem"
                aria-label={`${item.title}`}
              >
                <div className="detail-div bg-background border-2 border-primary rounded-3xl md:rounded-4xl w-full max-w-xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <p className="p-4 md:p-6 text-sm md:text-base lg:text-lg leading-relaxed text-foreground/90">
                    {item.detail}
                  </p>
                </div>
                <div
                  className={cn(
                    'title-div text-primary text-2xl md:text-3xl lg:text-4xl font-semibold bg-background rounded-full p-6 md:p-8 shadow-md hover:scale-105 transition-transform duration-300 border border-primary/20',
                    i % 2 === 0 ? 'md:order-last' : 'md:order-first',
                  )}
                >
                  {item.title}
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 justify-items-center items-center border-t pt-8 md:pt-12 border-primary/40">
          <div className="bg-white rounded-3xl w-full max-w-xl h-48 md:h-64 lg:h-80 text-center flex items-center justify-center">
            [Placeholder for additional video content]
          </div>
          <div className="text-primary text-2xl md:text-3xl lg:text-4xl font-semibold">
            วิดีโอเพิ่มเติม
          </div>
        </div>
      </div>
    </section>
  )
})

LangCircleSection.displayName = 'LangCircleSection'

export { LangCircleSection }
