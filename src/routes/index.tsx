import { HeroSection } from '@/components/hero'
import { LangSection } from '@/components/lang'
import { LangCircleSection } from '@/components/lang-circle'
import { NavigationBar } from '@/components/navbar'
import { TempStatSection } from '@/components/temp-stat'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useMemo, useRef, useState } from 'react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const [activeSection, setActiveSection] = useState<string>('หน้าหลัก')

  const heroSectionRef = useRef<HTMLElement>(null)
  const langSectionRef = useRef<HTMLElement>(null)
  const langCircleSectionRef = useRef<HTMLElement>(null)
  const tempStatSectionRef = useRef<HTMLElement>(null)

  const sectionRefs = useMemo(() => {
    return {
      หน้าหลัก: heroSectionRef,
      แล้งคืออะไร: langSectionRef,
      วัฏจักรฤดูแล้ง: langCircleSectionRef,
      สถิติ: tempStatSectionRef,
    }
  }, [])

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
            setActiveSection(sectionName)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionName: string) => {
    const ref = sectionRefs[sectionName as keyof typeof sectionRefs]
    ref?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const scrollToLangSection = () => {
    langSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <>
      <NavigationBar
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
      <HeroSection ref={heroSectionRef} nextPage={scrollToLangSection} />
      <LangSection ref={langSectionRef} />
      <LangCircleSection ref={langCircleSectionRef} />
      <TempStatSection ref={tempStatSectionRef} />
    </>
  )
}
