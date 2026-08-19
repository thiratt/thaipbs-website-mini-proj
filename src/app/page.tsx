"use client";

import {
	BudgetComparisonChart,
	DroughtFoodMenu,
	DroughtRecovery,
	DroughtTraditions,
	HeroSection,
	IsanRiverBasins,
	LangCircleSection,
	MyLangIsNotEqual,
	NavigationBar,
	NewGenFooter,
	TemperatureHistory,
	ThaiRiverBasinsMap,
	WhatIsLangSection,
} from "@/components";
import { useActiveSection, useSectionNavigation, useSectionRefs } from "@/hooks";

export default function RootPage() {
	const {
		sectionRefs,
		heroSectionRef,
		whatIsLangSectionRef,
		langCircleSectionRef,
		temperatureHistoryRef,
		myLangIsNotEqualRef,
		thaiRiverBasinsMapRef,
		isanRiverBasinsRef,
		droughtTraditionsRef,
		droughtFoodMenuRef,
		budgetComparisonChartRef,
		droughtRecoveryRef,
	} = useSectionRefs();

	const activeSection = useActiveSection(sectionRefs);
	const { scrollToSection } = useSectionNavigation(sectionRefs);

	return (
		<>
			<NavigationBar activeSection={activeSection} onNavigate={scrollToSection} />
			<HeroSection ref={heroSectionRef} nextPage={() => scrollToSection("แล้งคืออะไร")} />
			<WhatIsLangSection ref={whatIsLangSectionRef} />
			<LangCircleSection ref={langCircleSectionRef} />
			<TemperatureHistory ref={temperatureHistoryRef} />
			<MyLangIsNotEqual ref={myLangIsNotEqualRef} />
			<BudgetComparisonChart ref={budgetComparisonChartRef} />
			{/* <HeatImpactChart ref={heatImpactChartRef} /> */}
			<ThaiRiverBasinsMap ref={thaiRiverBasinsMapRef} />
			<IsanRiverBasins ref={isanRiverBasinsRef} />
			<DroughtTraditions ref={droughtTraditionsRef} />
			<DroughtFoodMenu ref={droughtFoodMenuRef} />
			<DroughtRecovery ref={droughtRecoveryRef} />
			<NewGenFooter ref={null} />
		</>
	);
}
