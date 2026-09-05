type SectionBackdropWordProps = {
	children: string;
};

export function SectionBackdropWord({ children }: SectionBackdropWordProps) {
	return (
		<div
			aria-hidden="true"
			className="pointer-events-none absolute left-[24vw] top-0 z-0 hidden select-none whitespace-nowrap text-[clamp(10rem,24vw,26rem)] font-black uppercase leading-none tracking-[-0.08em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.075)] lg:block"
		>
			{children}
		</div>
	);
}
