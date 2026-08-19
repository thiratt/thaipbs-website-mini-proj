import { useEffect, useRef, useState } from "react";
import { SECTION_IDS, type SectionId } from "@/config/sections";
import type { SectionRefs } from "@/types/navigation";

const BOTTOM_TOLERANCE = 2;

export function useActiveSection(sectionRefs: SectionRefs) {
	const [activeSection, setActiveSection] = useState<SectionId>("home");
	const activeSectionRef = useRef<SectionId>("home");

	useEffect(() => {
		let frameId: number | null = null;

		const updateActiveSection = () => {
			frameId = null;

			const sections = SECTION_IDS.map((id) => {
				const element = sectionRefs[id].current;
				if (!element) return null;

				return {
					id,
					top: window.scrollY + element.getBoundingClientRect().top,
				};
			})
				.filter((section): section is { id: SectionId; top: number } => section !== null)
				.sort((a, b) => a.top - b.top);

			if (sections.length === 0) return;

			const documentBottom = document.documentElement.scrollHeight - window.innerHeight;
			const isAtBottom = window.scrollY >= documentBottom - BOTTOM_TOLERANCE;
			const activeLine = window.scrollY + 1;

			let nextActive = sections[0].id;

			if (isAtBottom) {
				nextActive = sections[sections.length - 1].id;
			} else {
				for (const section of sections) {
					if (section.top <= activeLine) nextActive = section.id;
					else break;
				}
			}

			if (nextActive !== activeSectionRef.current) {
				activeSectionRef.current = nextActive;
				setActiveSection(nextActive);
			}
		};

		const scheduleUpdate = () => {
			if (frameId !== null) return;
			frameId = window.requestAnimationFrame(updateActiveSection);
		};

		scheduleUpdate();
		window.addEventListener("scroll", scheduleUpdate, { passive: true });
		window.addEventListener("resize", scheduleUpdate, { passive: true });

		const resizeObserver = new ResizeObserver(scheduleUpdate);
		resizeObserver.observe(document.body);

		document.fonts?.ready.then(scheduleUpdate).catch(() => undefined);

		return () => {
			if (frameId !== null) window.cancelAnimationFrame(frameId);
			window.removeEventListener("scroll", scheduleUpdate);
			window.removeEventListener("resize", scheduleUpdate);
			resizeObserver.disconnect();
		};
	}, [sectionRefs]);

	return activeSection;
}
