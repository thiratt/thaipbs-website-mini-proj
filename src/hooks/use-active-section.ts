import { useEffect, useRef, useState } from "react";
import { SECTION_NAMES } from "@/constants/navigation";
import type { SectionName, SectionRefs } from "@/types/navigation";

const BOTTOM_TOLERANCE = 2;

export function useActiveSection(sectionRefs: SectionRefs) {
	const [activeSection, setActiveSection] = useState<SectionName>("หน้าหลัก");
	const activeSectionRef = useRef<SectionName>("หน้าหลัก");

	useEffect(() => {
		let frameId: number | null = null;

		const updateActiveSection = () => {
			frameId = null;

			const sections = SECTION_NAMES.map((name) => {
				const element = sectionRefs[name].current;
				if (!element) return null;

				return {
					name,
					top: window.scrollY + element.getBoundingClientRect().top,
				};
			})
				.filter((section): section is { name: SectionName; top: number } => section !== null)
				.sort((a, b) => a.top - b.top);

			if (sections.length === 0) return;

			const documentBottom = document.documentElement.scrollHeight - window.innerHeight;
			const isAtBottom = window.scrollY >= documentBottom - BOTTOM_TOLERANCE;
			const activeLine = window.scrollY + 1;

			let nextActive = sections[0].name;

			if (isAtBottom) {
				nextActive = sections[sections.length - 1].name;
			} else {
				for (const section of sections) {
					if (section.top <= activeLine) nextActive = section.name;
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
