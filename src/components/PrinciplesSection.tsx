'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const principles = [
	{
		title: 'Principle 1',
		description:
			'Description for principle 1. Explain the first part of your process here.',
		image: '/images/principle1.jpg',
	},
	{
		title: 'Principle 2',
		description:
			'Description for principle 2. Add details about the middle of your journey.',
		image: '/images/principle2.jpg',
	},
	{
		title: 'Principle 3',
		description:
			'Description for principle 3. Conclude with the final principle of your process.',
		image: '/images/principle3.jpg',
	},
];

const PrinciplesSection: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [activePrinciple, setActivePrinciple] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			if (!containerRef.current) return;

			const container = containerRef.current;
			const scrollPosition = window.scrollY - container.offsetTop;
			const sectionHeight = container.offsetHeight / principles.length;
			const newActive = Math.floor(scrollPosition / sectionHeight);

			const isMobile = window.innerWidth < 768;
			if (isMobile) {
				const mobileNewActive = Math.floor(
					(scrollPosition + window.innerHeight / 2) / sectionHeight
				);
				if (mobileNewActive >= 0 && mobileNewActive < principles.length) {
					setActivePrinciple(mobileNewActive);
				}
			} else if (newActive >= 0 && newActive < principles.length) {
				setActivePrinciple(newActive);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div ref={containerRef} className="h-[300vh] relative">
			<div className="sticky top-0 h-screen flex flex-col md:flex-row">
				<div className="w-full md:w-1/2 h-1/2 md:h-screen relative order-1 md:order-2">
					{principles.map((principle, index) => (
						<motion.div
							key={index}
							className="absolute inset-0 w-full h-full"
							initial={{ opacity: 0 }}
							animate={{ opacity: activePrinciple === index ? 1 : 0 }}
							transition={{ duration: 0.5 }}
						>
							<Image
								src={principle.image}
								alt={principle.title}
								fill
								className="object-cover"
								priority={index === 0}
							/>
						</motion.div>
					))}
				</div>

				<div className="w-full md:w-1/2 flex items-center px-4 md:px-12 h-1/2 md:h-screen order-2 md:order-1">
					<div className="space-y-4 md:space-y-8 w-full">
						{principles.map((principle, index) => (
							<div key={index} className="transition-colors duration-500">
								<h3
									className={`text-2xl md:text-4xl font-bold mb-2 md:mb-4 transition-colors duration-500 ${
										activePrinciple === index
											? 'text-neutral-900'
											: 'text-neutral-400'
									}`}
								>
									{principle.title}
								</h3>
								<p
									className={`text-base md:text-lg transition-colors duration-500 ${
										activePrinciple === index
											? 'text-neutral-700'
											: 'text-neutral-400'
									}`}
								>
									{principle.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PrinciplesSection;
