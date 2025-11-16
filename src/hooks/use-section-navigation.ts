import { useCallback } from 'react'
import type { SectionName, SectionRefs } from '@/types/navigation'

export function useSectionNavigation(sectionRefs: SectionRefs) {
  const scrollToSection = useCallback(
    (sectionName: SectionName) => {
      const ref = sectionRefs[sectionName]
      if (ref.current) {
        ref.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    },
    [sectionRefs],
  )

  return { scrollToSection }
}
