'use client';

import Image from 'next/image';

export type FeatureCardProps = {
	image: string;
	title: string;
	description?: string;
	footer?: React.ReactNode;
};

const FeatureCard = ({
	image,
	title,
	description,
	footer,
}: FeatureCardProps) => {
	return (
		<div className="flex flex-col gap-2">
			<div className="relative w-full aspect-square">
				<Image src={image} alt={title} fill className="object-cover" />
			</div>
			<div className="font-medium px-2">{title}</div>
			<div className="text-sm text-neutral-500 px-2 line-clamp-2 break-words">
				{description}
			</div>
			{footer}
		</div>
	);
};

export default FeatureCard;
