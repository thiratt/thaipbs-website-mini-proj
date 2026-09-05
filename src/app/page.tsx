"use client";

import {
	ChapterNavigation,
	DroughtBudgetSection,
	DroughtCausesSection,
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
import { useActiveSection, useSectionNavigation } from "@/hooks";

export default function DocumentaryPage() {
	const activeSection = useActiveSection();
	const { scrollToSection } = useSectionNavigation();

	return (
		<>
			<ChapterNavigation activeSection={activeSection} onNavigate={scrollToSection} />
			<main>
				<HeroSection onContinue={() => scrollToSection("drought-overview")} />
				<DroughtOverviewSection />
				<DroughtCausesSection />
				<DroughtImpactsSection />
				<TemperatureTrendSection />
				<DroughtInequalitySection />
				<DroughtBudgetSection />
				<ThailandRiverBasinsSection />
				<IsanRiverBasinsSection />
				<DroughtTraditionsSection />
				<DroughtFoodSection />
				<DroughtRecoverySection />
			</main>
			<SiteFooter />
		</>
	);
}
