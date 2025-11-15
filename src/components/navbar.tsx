import { useState, useRef, useEffect } from 'react'
import { MenuIcon, SearchIcon, X } from 'lucide-react'
import { Button } from './ui/button'
import { AnimatePresence, motion } from 'motion/react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'
import { cn } from '@/lib/utils'
import { useIsMobile } from '@/hooks/use-mobile'

interface NavItem {
  label: string
}

const navItems: NavItem[] = [
  { label: 'หน้าหลัก' },
  { label: 'แล้งคืออะไร' },
  { label: 'วัฏจักรฤดูแล้ง' },
  { label: 'สถิติ' },
  { label: 'แล้งเราไม่เท่ากัน' },
]

interface NavigationBarProps {
  activeSection?: string
  onNavigate?: (sectionName: string) => void
}

function NavigationBar({
  activeSection: externalActiveSection,
  onNavigate,
}: NavigationBarProps) {
  const isMobile = useIsMobile()
  const [search, setSearch] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
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

  const toggleSearchMode = () => {
    setSearch(!search)
    setSearchValue('')
  }

  return (
    <header className="fixed top-4 flex w-full md:justify-center px-4 z-50 select-none">
      <AnimatePresence initial={false} mode="wait">
        {!isMobile ? (
          <motion.div
            key="desktop-nav"
            initial={{ y: -10, opacity: 0 }}
            animate={{
              width: search ? '42rem' : '34rem',
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
              'mx-auto relative flex h-fit p-1 items-center rounded-full',
              'bg-linear-to-r from-white/40 via-white/30 to-white/40',
              'backdrop-blur-[2px] backdrop-saturate-150',
              'shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]',
              'border border-white/20',
              'border-white/60',
            )}
          >
            <motion.nav
              animate={{ opacity: search ? 0 : 1 }}
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

              {navItems.map((item) => (
                <Button
                  key={item.label}
                  ref={(el) => {
                    buttonRefs.current[item.label] = el
                  }}
                  variant="ghost"
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate(item.label)
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

            <motion.div
              animate={{ opacity: search ? 1 : 0 }}
              transition={{
                opacity: {
                  duration: 0.3,
                  ease: 'easeInOut',
                },
              }}
              className={cn(
                'absolute w-[calc(100%-3rem)] flex items-center gap-1',
                search ? 'pointer-events-auto' : 'pointer-events-none',
              )}
            >
              <InputGroup className="h-full rounded-full bg-white/50 shadow-inner">
                <InputGroupAddon>
                  <SearchIcon />
                </InputGroupAddon>
                <InputGroupInput
                  placeholder="ค้นหาเนื้อหา..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  autoFocus={search}
                />
                <InputGroupAddon align="inline-end"></InputGroupAddon>
              </InputGroup>
            </motion.div>

            <div className="absolute right-0 pe-1">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={toggleSearchMode}
              >
                {search ? <X /> : <SearchIcon />}
              </Button>
            </div>
          </motion.div>
        ) : (
          <div className="flex items-center justify-between w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <Button className="rounded-full" size="icon" variant="outline">
                <MenuIcon />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <Button className="rounded-full" size="icon" variant="outline">
                <SearchIcon />
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  )
}

export { NavigationBar }
