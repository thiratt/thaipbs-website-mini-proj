import { useMemo, useRef } from 'react'
import type { SectionRefs } from '@/types/navigation'

export function useSectionRefs() {
  const heroSectionRef = useRef<HTMLElement>(null)
  const whatIsLangSectionRef = useRef<HTMLElement>(null)
  const langCircleSectionRef = useRef<HTMLElement>(null)
  const temperatureHistoryRef = useRef<HTMLElement>(null)
  const myLangIsNotEqualRef = useRef<HTMLElement>(null)
  const heatImpactChartRef = useRef<HTMLElement>(null)
  const thaiRiverBasinsMapRef = useRef<HTMLElement>(null)
  const isanRiverBasinsRef = useRef<HTMLElement>(null)
  const droughtTraditionsRef = useRef<HTMLElement>(null)
  const droughtFoodMenuRef = useRef<HTMLElement>(null)
  const budgetComparisonChartRef = useRef<HTMLElement>(null)
  const droughtRecoveryRef = useRef<HTMLElement>(null)

  const sectionRefs: SectionRefs = useMemo(
    () => ({
      หน้าหลัก: heroSectionRef,
      แล้งคืออะไร: whatIsLangSectionRef,
      วัฏจักรฤดูแล้ง: langCircleSectionRef,
      สถิติ: temperatureHistoryRef,
      แล้งเราไม่เท่ากัน: myLangIsNotEqualRef,
      ผลกระทบ: heatImpactChartRef,
      ลุ่มน้ำไทย: thaiRiverBasinsMapRef,
      ลุ่มน้ำอีสาน: isanRiverBasinsRef,
      ประเพณีในหน้าแล้ง: droughtTraditionsRef,
      อาหารรับมือแล้ง: droughtFoodMenuRef,
      งบประมาณ: budgetComparisonChartRef,
      การฟื้นฟู: droughtRecoveryRef,
    }),
    [],
  )

  return {
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
  }
}
