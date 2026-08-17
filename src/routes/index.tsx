import { createFileRoute } from '@tanstack/react-router'
import {
  BudgetComparisonChart,
  DroughtFoodMenu,
  DroughtRecovery,
  DroughtTraditions,
  HeatImpactChart,
  HeroSection,
  IsanRiverBasins,
  LangCircleSection,
  MyLangIsNotEqual,
  NavigationBar,
  NewGenFooter,
  TemperatureHistory,
  ThaiRiverBasinsMap,
  WhatIsLangSection,
} from '@/components'
import { useActiveSection, useSectionNavigation, useSectionRefs } from '@/hooks'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const {
    sectionRefs,
    heroSectionRef,
    whatIsLangSectionRef,
    langCircleSectionRef,
    temperatureHistoryRef,
    myLangIsNotEqualRef,
    heatImpactChartRef,
    thaiRiverBasinsMapRef,
    isanRiverBasinsRef,
    droughtTraditionsRef,
    droughtFoodMenuRef,
    budgetComparisonChartRef,
    droughtRecoveryRef,
  } = useSectionRefs()

  const activeSection = useActiveSection(sectionRefs)
  const { scrollToSection } = useSectionNavigation(sectionRefs)

  const scrollToWhatIsLangSection = () => {
    whatIsLangSectionRef.current?.scrollIntoView({
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
      <HeroSection ref={heroSectionRef} nextPage={scrollToWhatIsLangSection} />
      <WhatIsLangSection ref={whatIsLangSectionRef} />
      <LangCircleSection ref={langCircleSectionRef} />
      <TemperatureHistory ref={temperatureHistoryRef} />
      <MyLangIsNotEqual ref={myLangIsNotEqualRef} />
      <BudgetComparisonChart ref={budgetComparisonChartRef} />
      <HeatImpactChart ref={heatImpactChartRef} />
      <ThaiRiverBasinsMap ref={thaiRiverBasinsMapRef} />
      <IsanRiverBasins ref={isanRiverBasinsRef} />
      <DroughtTraditions ref={droughtTraditionsRef} />
      <DroughtFoodMenu ref={droughtFoodMenuRef} />
      <DroughtRecovery ref={droughtRecoveryRef} />
      <NewGenFooter ref={null} />
    </>
  )
}
