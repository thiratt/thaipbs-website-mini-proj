import { useCallback } from "react";
import type { SectionId } from "@/config/sections";

export function useSectionNavigation() {
	const scrollToSection = useCallback(
		(sectionId: SectionId) => {
			const element = document.getElementById(sectionId);
			if (!element) return;

			const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			const targetTop =
				sectionId === "home" ? 0 : Math.max(0, window.scrollY + element.getBoundingClientRect().top);

			window.scrollTo({
				top: targetTop,
				behavior: prefersReducedMotion ? "auto" : "smooth",
			});
		},
		[],
	);

	return { scrollToSection };
}
