'use client';

import { cn } from '@/lib/utils';
import { SearchIcon, ShoppingBagIcon, UserRoundIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import IconButton from '../IconButton';

type MenuItem = {
	title: string;
	description?: string;
	href: string;
};

type MenuSubSection = {
	title: string;
	items: MenuItem[];
};

type MenuSection = {
	title: string;
	href: string;
	subSections: MenuSubSection[];
};

const menuSections: MenuSection[] = [
	{
		title: 'Shop',
		href: '/shop',
		subSections: [
			{
				title: 'Subsection 1',
				items: [
					{
						title: 'Item 1',
						href: '/shop/type-1',
					},
					{
						title: 'Item 2',
						href: '/shop/type-2',
					},
					{
						title: 'Item 3',
						href: '/shop/type-3',
					},
				],
			},
			{
				title: 'Subsection 2',
				items: [
					{
						title: 'Item 4',
						description: 'Description 4',
						href: '/shop/type-4',
					},
				],
			},
			{
				title: 'Subsection 3',
				items: [],
			},
		],
	},
	{
		title: 'Inspiration',
		href: '/inspiration',
		subSections: [
			{
				title: 'Subsection 1',
				items: [
					{
						title: 'Item 5',
						description: 'Description 5',
						href: '/inspiration/type-5',
					},
				],
			},
		],
	},
	{
		title: 'About',
		href: '/about',
		subSections: [
			{
				title: 'Subsection 1',
				items: [
					{
						title: 'Item 6',
						href: '/about/type-6',
					},
				],
			},
			{
				title: 'Subsection 2',
				items: [
					{
						title: 'Item 7',
						href: '/about/type-7',
					},
					{
						title: 'Item 8',
						href: '/about/type-8',
					},
				],
			},
		],
	},
];

const Navigation: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [hoveredSection, setHoveredSection] = useState<MenuSection | null>(
		null
	);
	const pathname = usePathname();

	// Find the active section based on the current pathname
	const activeSection = menuSections.find((section) =>
		pathname.startsWith(section.href)
	);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div
			className="fixed z-10 top-0 left-0 w-full flex flex-col"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => {
				setIsHovered(false);
				setHoveredSection(null);
			}}
		>
			{!isScrolled && (
				<div className="h-8 bg-neutral-800 transition-transform duration-600 flex justify-center items-center">
					<p className="text-sm text-neutral-200">
						Something you need to know.
					</p>
				</div>
			)}
			<div
				className={cn(
					'h-12 md:h-16 flex justify-between items-center px-6 transition-colors duration-200',
					isScrolled || isHovered
						? 'bg-white shadow-sm'
						: 'bg-transparent text-neutral-200'
				)}
			>
				<Link href="/" className="text-xl font-bold hover:text-green-600">
					LOGO
				</Link>
				<div className="flex gap-4 md:gap-8 lg:gap-12">
					{menuSections.map((section) => (
						<Link
							key={'section-' + section.title}
							href={section.href}
							onMouseEnter={() => setHoveredSection(section)}
							className={cn(
								'font-medium hover:text-green-600',
								section === activeSection && 'border-b-2'
							)}
						>
							{section.title}
						</Link>
					))}
				</div>
				<div className="flex items-center gap-4 md:gap-8">
					<IconButton onClick={() => {}}>
						<SearchIcon className="size-5" />
					</IconButton>
					<IconButton onClick={() => {}}>
						<UserRoundIcon className="size-5" />
					</IconButton>
					<div className="h-5 border-r-2"></div>
					<IconButton onClick={() => {}}>
						<ShoppingBagIcon className="size-5" />
					</IconButton>
				</div>
			</div>

			{isHovered && hoveredSection && (
				<div className="bg-white shadow-lg p-4">
					<div className="flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-24 justify-center">
						{hoveredSection.subSections.map((subsection, idx) => (
							<div key={idx}>
								<h3 className="font-medium mb-4 text-neutral-600">
									{subsection.title}
								</h3>
								<div className="space-y-3">
									{subsection.items.map((item, itemIdx) => (
										<a
											key={itemIdx}
											href={item.href}
											className="block hover:text-green-600"
										>
											<div className="font-medium">{item.title}</div>
											{item.description && (
												<div className="text-sm text-gray-400">
													{item.description}
												</div>
											)}
										</a>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Navigation;
