"use client";

import {
	ChapterNavigation,
	DroughtBudgetSection,
	DroughtFoodSection,
	DroughtImpactsSection,
	DroughtInequalitySection,
	DroughtOverviewSection,
	DroughtRecoverySection,
	DroughtTraditionsSection,
	HeroSection,
	IsanRiverBasinsSection,
	SiteFooter,
	TemperatureTrendSection,
	ThailandRiverBasinsSection,
} from "@/components";
import { useActiveSection, useSectionNavigation, useSectionRefs } from "@/hooks";

export default function DocumentaryPage() {
	const sectionRefs = useSectionRefs();
	const activeSection = useActiveSection(sectionRefs);
	const { scrollToSection } = useSectionNavigation(sectionRefs);

	return (
		<>
			<ChapterNavigation activeSection={activeSection} onNavigate={scrollToSection} />
			<HeroSection ref={sectionRefs.home} onContinue={() => scrollToSection("drought-overview")} />
			<DroughtOverviewSection ref={sectionRefs["drought-overview"]} />
			<DroughtImpactsSection ref={sectionRefs["drought-impacts"]} />
			<TemperatureTrendSection ref={sectionRefs["temperature-trend"]} />
			<DroughtInequalitySection ref={sectionRefs["drought-inequality"]} />
			<DroughtBudgetSection ref={sectionRefs["drought-budget"]} />
			<ThailandRiverBasinsSection ref={sectionRefs["thailand-basins"]} />
			<IsanRiverBasinsSection ref={sectionRefs["isan-basins"]} />
			<DroughtTraditionsSection ref={sectionRefs["drought-traditions"]} />
			<DroughtFoodSection ref={sectionRefs["drought-food"]} />
			<DroughtRecoverySection ref={sectionRefs["drought-recovery"]} />
			<SiteFooter />
		</>
	);
}
