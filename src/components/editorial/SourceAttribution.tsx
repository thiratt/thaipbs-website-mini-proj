import type { ReactNode } from "react";
import { motion } from "motion/react";
import { NewTabIcon } from "@/components/ui/new-tab-icon";
import { cn } from "@/lib/utils";

type SourceAttributionProps = {
	children: ReactNode;
	href?: string;
	className?: string;
};

const baseClassName = "group flex w-fit max-w-full items-start text-sm";

function SourceContent({ children, linked = false }: { children: ReactNode; linked?: boolean }) {
	return (
		<span className="flex gap-2 items-center font-medium uppercase text-white/50 transition-colors motion-reduce:transition-none group-hover:text-drought">
			ที่มา · {children}
			{linked ? <NewTabIcon className="transition-all group-hover:text-drought" /> : null}
		</span>
	);
}

export function SourceAttribution({ children, href, className }: SourceAttributionProps) {
	const motionProps = {
		initial: { opacity: 0, y: 8 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: true },
		transition: { duration: 0.45 },
	};

	if (href) {
		return (
			<motion.a
				{...motionProps}
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={cn(baseClassName, className)}
			>
				<SourceContent linked>{children}</SourceContent>
			</motion.a>
		);
	}

	return (
		<motion.div {...motionProps} className={cn(baseClassName, className)}>
			<SourceContent>{children}</SourceContent>
		</motion.div>
	);
}
