import { useEffect, useState } from 'react'
import type { SectionName, SectionRefs } from '@/types/navigation'

export function useActiveSection(sectionRefs: SectionRefs) {
  const [activeSection, setActiveSection] = useState<SectionName>('หน้าหลัก')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 1

      for (const [sectionName, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const element = ref.current
          const { offsetTop, offsetHeight } = element

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionName as SectionName)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionRefs])

  return activeSection
}
