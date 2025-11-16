import { useEffect, useRef, useState } from 'react'
import { MenuIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { Button } from '../ui/button'
import type { NavigationBarProps, SectionName } from '@/types'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/constants'

function NavigationBar({
  activeSection: externalActiveSection,
  onNavigate,
}: NavigationBarProps) {
  const [internalActiveItem, setInternalActiveItem] =
    useState<string>('หน้าหลัก')
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
  })

  const navRef = useRef<HTMLDivElement>(null)
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})

  const activeItem = externalActiveSection || internalActiveItem

  useEffect(() => {
    const activeButton = buttonRefs.current[activeItem]
    const navElement = navRef.current

    if (activeButton && navElement) {
      const navRect = navElement.getBoundingClientRect()
      const buttonRect = activeButton.getBoundingClientRect()

      setIndicatorStyle({
        left: buttonRect.left - navRect.left,
        width: buttonRect.width,
      })
    }
  }, [activeItem])

  return (
    <header className="fixed top-4 flex w-full md:justify-center px-4 z-50 select-none">
      <div className="flex items-center justify-end w-full nav-lg:hidden">
        <Button className="rounded-full" size="icon">
          <MenuIcon />
        </Button>
      </div>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key="desktop-nav"
          initial={{ y: -10, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{ y: -10, opacity: 0 }}
          transition={{
            width: {
              duration: 0.6,
              type: 'spring',
            },
            y: {
              type: 'spring',
            },
          }}
          className={cn(
            'hidden nav-lg:flex',
            'mx-auto relative h-fit p-1 items-center rounded-full',
            'bg-linear-to-r from-white/40 via-white/30 to-white/40',
            'backdrop-blur-[2px] backdrop-saturate-150',
            'shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]',
            'border border-white/20',
            'border-white/60',
          )}
        >
          <motion.nav
            transition={{
              opacity: {
                duration: 0.3,
                ease: 'easeInOut',
              },
            }}
            ref={navRef}
            className="relative flex items-center flex-1 gap-1"
          >
            <motion.span
              className="absolute bg-primary h-full rounded-full"
              animate={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
              transition={{
                type: 'spring',
                stiffness: 380,
                damping: 30,
              }}
              initial={false}
            />

            {NAV_ITEMS.map((item) => (
              <Button
                key={item.label}
                ref={(el) => {
                  buttonRefs.current[item.label] = el
                }}
                variant="ghost"
                onClick={() => {
                  if (onNavigate) {
                    onNavigate(item.label as SectionName)
                  } else {
                    setInternalActiveItem(item.label)
                  }
                }}
                className={cn(
                  'rounded-full z-10',
                  activeItem === item.label
                    ? 'text-primary-foreground hover:bg-primary hover:text-primary-foreground'
                    : 'text-foreground',
                )}
              >
                {item.label}
              </Button>
            ))}
          </motion.nav>
        </motion.div>
      </AnimatePresence>
    </header>
  )
}

export { NavigationBar }
