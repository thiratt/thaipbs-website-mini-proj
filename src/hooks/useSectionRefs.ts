import { useMemo, useRef } from 'react'
import type { SectionRefs } from '@/types/navigation'

export function useSectionRefs(): SectionRefs {
  const homeRef = useRef<HTMLElement>(null)
  const droughtOverviewRef = useRef<HTMLElement>(null)
  const droughtImpactsRef = useRef<HTMLElement>(null)
  const temperatureTrendRef = useRef<HTMLElement>(null)
  const droughtInequalityRef = useRef<HTMLElement>(null)
  const droughtBudgetRef = useRef<HTMLElement>(null)
  const thailandBasinsRef = useRef<HTMLElement>(null)
  const isanBasinsRef = useRef<HTMLElement>(null)
  const droughtTraditionsRef = useRef<HTMLElement>(null)
  const droughtFoodRef = useRef<HTMLElement>(null)
  const droughtRecoveryRef = useRef<HTMLElement>(null)

  return useMemo(
    () => ({
      home: homeRef,
      'drought-overview': droughtOverviewRef,
      'drought-impacts': droughtImpactsRef,
      'temperature-trend': temperatureTrendRef,
      'drought-inequality': droughtInequalityRef,
      'drought-budget': droughtBudgetRef,
      'thailand-basins': thailandBasinsRef,
      'isan-basins': isanBasinsRef,
      'drought-traditions': droughtTraditionsRef,
      'drought-food': droughtFoodRef,
      'drought-recovery': droughtRecoveryRef,
    }),
    [],
  )
}
