import { MenuIcon, Search, SearchIcon, X } from 'lucide-react'
import { Button } from './ui/button'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'
import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string
}

const navItems: NavItem[] = [
  { label: 'หน้าหลัก' },
  { label: 'แล้งคืออะไร' },
  { label: 'วัฏจักรฤดูแล้ง' },
  { label: 'สถิติ' },
]

interface NavigationBarProps {
  activeSection?: string
  onNavigate?: (sectionName: string) => void
}

function NavigationBar({
  activeSection: externalActiveSection,
  onNavigate,
}: NavigationBarProps) {
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

  // Use external active section if provided, otherwise use internal state
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

  const handleSearchClose = () => {
    setSearch(false)
    setSearchValue('')
  }

  const handleSearchClick = () => {
    setSearch(true)
  }

  return (
    <header className="fixed top-4 flex w-full md:justify-center px-4 z-50 select-none">
      <div className="flex items-center justify-between w-full md:hidden">
        <Button className="rounded-full" size="icon" variant="outline">
          <MenuIcon />
        </Button>
        <Button className="rounded-full" size="icon" variant="outline">
          <SearchIcon />
        </Button>
      </div>
      <div
        className={cn(
          'hidden md:flex',
          'relative h-fit w-full max-w-lg p-1 items-center rounded-full transition-all duration-300',
          'bg-linear-to-r from-white/40 via-white/30 to-white/40',
          'backdrop-blur-[2px] backdrop-saturate-150',
          'shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]',
          'border border-white/20',
          'border-white/60',
          search && 'max-w-5xl',
        )}
      >
        <nav
          ref={navRef}
          className={cn(
            'relative flex items-center transition-all duration-300 flex-1 gap-1',
            search ? 'opacity-0 invisible' : 'opacity-100 visible',
          )}
        >
          <span
            className="absolute bg-primary h-full rounded-full transition-all duration-300 ease-out animate-in zoom-in-10"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
            }}
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
          <div
            className={cn(
              'ms-auto',
              search
                ? 'opacity-0 invisible scale-0'
                : 'opacity-100 visible scale-100',
            )}
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={handleSearchClick}
            >
              <Search />
            </Button>
          </div>
        </nav>

        <div
          className={cn(
            'absolute inset-1 transition-all duration-300 ease-in-out flex items-center gap-1',
            search
              ? 'opacity-100 visible pointer-events-auto'
              : 'opacity-0 invisible pointer-events-none',
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
          <Button
            onClick={handleSearchClose}
            className="rounded-full"
            size="icon"
            variant="outline"
          >
            <X />
          </Button>
        </div>
      </div>
    </header>
  )
}

export { NavigationBar }
