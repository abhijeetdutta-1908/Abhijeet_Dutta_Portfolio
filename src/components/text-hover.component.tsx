type TTextHoverProps = {
	text: string;
	className?: string;
	as?: React.ElementType;
};

export const TextHover = ({ text, className, as: Component = 'p' }: TTextHoverProps) => {
	// Treat space as a normal character but ensure it has some width for styling
	return (
		<Component className={`hover-text ${className}`}>
			{text.split('').map((char, index) => (
				<span
					key={index}
					data-char={char}
					style={{
						'--delay': `${0.1 * index}s`,
					} as React.CSSProperties}
				>
					{char === ' ' ? '\u00A0' : char}
				</span>
			))}
		</Component>
	);
};
