import { useCallback } from "react";
import type { SectionId } from "@/config/sections";
import type { SectionRefs } from "@/types/navigation";

export function useSectionNavigation(sectionRefs: SectionRefs) {
	const scrollToSection = useCallback(
		(sectionId: SectionId) => {
			const element = sectionRefs[sectionId].current;
			if (!element) return;

			const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			const targetTop =
				sectionId === "home" ? 0 : Math.max(0, window.scrollY + element.getBoundingClientRect().top);

			window.scrollTo({
				top: targetTop,
				behavior: prefersReducedMotion ? "auto" : "smooth",
			});
		},
		[sectionRefs],
	);

	return { scrollToSection };
}
