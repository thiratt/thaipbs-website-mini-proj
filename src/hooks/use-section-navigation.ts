import { useCallback } from "react";
import type { SectionName, SectionRefs } from "@/types/navigation";

export function useSectionNavigation(sectionRefs: SectionRefs) {
	const scrollToSection = useCallback(
		(sectionName: SectionName) => {
			const element = sectionRefs[sectionName].current;
			if (!element) return;

			const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			const targetTop =
				sectionName === "หน้าหลัก" ? 0 : Math.max(0, window.scrollY + element.getBoundingClientRect().top);

			window.scrollTo({
				top: targetTop,
				behavior: prefersReducedMotion ? "auto" : "smooth",
			});
		},
		[sectionRefs],
	);

	return { scrollToSection };
}
