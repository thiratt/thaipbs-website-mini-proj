import type { SectionId } from '@/config/sections'

export interface ChapterNavigationProps {
  activeSection?: SectionId
  onNavigate?: (sectionId: SectionId) => void
}

export type SectionRefs = Record<
  SectionId,
  React.RefObject<HTMLElement | null>
>
