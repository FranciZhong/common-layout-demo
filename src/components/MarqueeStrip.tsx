'use client';

type MarqueeStripProps = {
	children: React.ReactNode;
};

const MarqueeStrip = ({ children }: MarqueeStripProps) => {
	return (
		<div className="relative flex items-center overflow-x-hidden">
			<div className="animate-marquee whitespace-nowrap flex">{children}</div>
			<div className="absolute top-0 animate-marquee2 whitespace-nowrap flex">
				{children}
			</div>
		</div>
	);
};

export default MarqueeStrip;
