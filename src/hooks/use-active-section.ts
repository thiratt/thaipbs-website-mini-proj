import { useCallback, useEffect, useState } from 'react'
import type { SectionName, SectionRefs } from '@/types/navigation'

export function useActiveSection(sectionRefs: SectionRefs) {
  const [activeSection, setActiveSection] = useState<SectionName>('หน้าหลัก')

  const handleScroll = useCallback(() => {
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
  }, [sectionRefs])

  useEffect(() => {
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return activeSection
}
