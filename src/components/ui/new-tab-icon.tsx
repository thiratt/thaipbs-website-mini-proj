import { SquareArrowOutUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function NewTabIcon({ className }: { className?: string }) {
	return (
		<SquareArrowOutUpRight
			aria-hidden="true"
			focusable="false"
			strokeWidth={2}
			className={cn(
				"size-4 shrink-0 transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5 motion-reduce:transition-none",
				className,
			)}
		/>
	);
}
