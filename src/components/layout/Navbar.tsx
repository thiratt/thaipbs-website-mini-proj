import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react'
import { Button } from '../ui/button'
import type { NavigationBarProps, SectionName } from '@/types'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/constants'

function NavigationBar({
  activeSection: externalActiveSection,
  onNavigate,
}: NavigationBarProps) {
  const [internalActiveItem, setInternalActiveItem] =
    useState<SectionName>('หน้าหลัก')
  const [pendingActiveItem, setPendingActiveItem] =
    useState<SectionName | null>(null)
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
  })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navRef = useRef<HTMLDivElement>(null)
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})

  const activeItem =
    pendingActiveItem ?? externalActiveSection ?? internalActiveItem

  const handleNavigate = (sectionName: SectionName) => {
    if (onNavigate) {
      setPendingActiveItem(sectionName)
      onNavigate(sectionName)
      return
    }

    setInternalActiveItem(sectionName)
  }

  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (currentY) => {
    setIsScrolled((previous) => {
      if (!previous && currentY > 32) return true
      if (previous && currentY < 8) return false

      return previous
    })
  })

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
    if (pendingActiveItem && externalActiveSection === pendingActiveItem) {
      setPendingActiveItem(null)
    }
  }, [externalActiveSection, pendingActiveItem])

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

  const mobileButtonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>(
    {},
  )

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
      <header className="fixed inset-x-0 top-0 z-50 select-none pointer-events-none">
        <div className="absolute top-4 right-4 pointer-events-auto nav-lg:hidden">
          <Button
            onClick={toggleMobileMenu}
            className="rounded-full bg-white/80 backdrop-blur-md shadow-lg hover:bg-white text-gray-800"
            size="icon"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        <LayoutGroup id="desktop-navigation">
          <div className="relative hidden w-full justify-center nav-lg:flex">
            {!isScrolled && (
              <motion.div
                layoutId="navigation-surface"
                className={cn(
                  'absolute inset-0',
                  'bg-white/50 backdrop-blur-md backdrop-saturate-150',
                )}
                transition={{
                  type: 'spring',
                  stiffness: 360,
                  damping: 36,
                  mass: 0.8,
                }}
              />
            )}

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: isScrolled ? 16 : 0,
                opacity: 1,
              }}
              transition={{
                y: {
                  type: 'spring',
                  stiffness: 360,
                  damping: 32,
                  mass: 0.8,
                },
                opacity: {
                  duration: 0.2,
                },
              }}
              className={cn(
                'relative pointer-events-auto',
                isScrolled ? 'p-2' : 'p-3',
              )}
            >
              {/* พื้นหลังตอนเลื่อน: หดมาครอบเมนู */}
              {isScrolled && (
                <motion.div
                  layoutId="navigation-surface"
                  className={cn(
                    'absolute inset-0 rounded-full',
                    'bg-linear-to-r from-white/70 via-white/55 to-white/70',
                    'backdrop-blur-xl backdrop-saturate-150',
                    'border border-white/60',
                    'shadow-[0_8px_32px_rgba(0,0,0,0.12)]',
                  )}
                  transition={{
                    type: 'spring',
                    stiffness: 360,
                    damping: 36,
                    mass: 0.8,
                  }}
                />
              )}

              <nav ref={navRef} className="relative flex shrink-0 items-center">
                <motion.div
                  className="absolute h-full rounded-full bg-white shadow-sm"
                  animate={{
                    left: indicatorStyle.left,
                    width: indicatorStyle.width,
                  }}
                  transition={{
                    type: 'tween',
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {NAV_ITEMS.map((item) => (
                  <Button
                    key={item.label}
                    ref={(element) => {
                      buttonRefs.current[item.label] = element
                    }}
                    variant="ghost"
                    onClick={() => handleNavigate(item.label as SectionName)}
                    className={cn(
                      'relative z-10 shrink-0 rounded-full px-6',
                      'font-medium bg-transparent',
                      'transition-colors duration-200',
                      'hover:bg-white/60',
                      activeItem === item.label
                        ? 'text-orange-600'
                        : isScrolled
                          ? 'text-foreground'
                          : 'text-white',
                    )}
                  >
                    {item.label}
                  </Button>
                ))}
              </nav>
            </motion.div>
          </div>
        </LayoutGroup>
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
                        handleNavigate(item.label as SectionName)
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
