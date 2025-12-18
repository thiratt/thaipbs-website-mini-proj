import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navRef = useRef<HTMLDivElement>(null)
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})

  const activeItem = externalActiveSection || internalActiveItem

  useEffect(() => {
    const updateIndicator = () => {
      const activeButton = buttonRefs.current[activeItem]
      const navElement = navRef.current

      if (activeButton && navElement) {
        setIndicatorStyle({
          left: activeButton.offsetLeft,
          width: activeButton.offsetWidth,
        })
      }
    }

    updateIndicator()

    const resizeObserver = new ResizeObserver(() => {
      updateIndicator()
    })

    if (navRef.current) {
      resizeObserver.observe(navRef.current)
    }

    window.addEventListener('resize', updateIndicator)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateIndicator)
    }
  }, [activeItem, isMobileMenuOpen])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [activeItem])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  const mobileButtonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})

  useEffect(() => {
    if (isMobileMenuOpen && activeItem) {
      const element = mobileButtonRefs.current[activeItem]
      if (element) {
        element.scrollIntoView({ block: 'center', behavior: 'smooth' })
      }
    }
  }, [isMobileMenuOpen, activeItem])

  return (
    <>
      <header className="fixed top-4 left-0 right-0 flex justify-center px-4 z-50 select-none pointer-events-none">
        <div className="absolute top-0 right-4 pointer-events-auto nav-lg:hidden">
          <Button
            onClick={toggleMobileMenu}
            className="rounded-full bg-white/80 backdrop-blur-md shadow-lg hover:bg-white text-gray-800"
            size="icon"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key="desktop-nav"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={cn(
              'hidden nav-lg:flex pointer-events-auto',
              'mx-auto relative h-fit p-1.5 items-center rounded-full',
              'bg-linear-to-r from-white/40 via-white/30 to-white/40',
              'backdrop-blur-xs backdrop-saturate-150',
              'shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]',
              'border border-white/20',
              'border-white/60',
            )}
          >
            <nav ref={navRef} className="relative flex items-center">
              <motion.div
                className="absolute bg-white rounded-full h-full shadow-sm"
                animate={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 30,
                }}
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
                    'relative rounded-full z-10 px-6 font-medium transition-colors duration-200',
                    activeItem === item.label
                      ? 'text-orange-600'
                      : 'text-foreground',
                  )}
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </motion.div>
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 nav-lg:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[280px] h-full bg-white/95 backdrop-blur-xl z-50 shadow-2xl nav-lg:hidden border-l border-white/20 p-6 flex flex-col overflow-y-auto overscroll-contain"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-bold text-gray-800">เมนู</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Button
                      ref={(el) => {
                        mobileButtonRefs.current[item.label] = el
                      }}
                      variant="ghost"
                      className={cn(
                        'w-full justify-start text-lg py-6 font-medium relative',
                        activeItem === item.label
                          ? 'bg-orange-50 text-orange-600'
                          : 'text-gray-600 hover:text-gray-900',
                      )}
                      onClick={() => {
                        if (onNavigate) {
                          onNavigate(item.label as SectionName)
                        } else {
                          setInternalActiveItem(item.label)
                        }
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      {activeItem === item.label && (
                        <motion.div
                          layoutId="mobile-indicator"
                          className="absolute left-0 top-0 bottom-0 w-1 bg-orange-600 rounded-r-full"
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export { NavigationBar }
