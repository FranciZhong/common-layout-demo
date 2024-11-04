'use client';

import Image from 'next/image';
import Button from './Button';

const ExploreSection: React.FC = () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2">
			<div className="relative aspect-[4/3] bg-orange-400 text-4xl font-semibold flex justify-center items-center text-neutral-200">
				<Image
					src="/images/explore.jpeg"
					alt="Explore"
					fill
					className="object-cover"
				/>
			</div>
			<div className="aspect-[4/3] bg-neutral-900 pl-20 flex items-center">
				<div className="w-80 flex flex-col gap-8">
					<div className="flex flex-col gap-2">
						<p className="text-sm text-neutral-400">Description</p>
						<h2 className="text-neutral-200 text-5xl font-semibold">This is</h2>
						<h2 className="text-neutral-200 text-5xl font-semibold">Awesome</h2>
					</div>
					<p className="text-neutral-200">
						What’s in a name? That which we call a rose By any other name would
						smell as sweet.
					</p>
					<Button
						variant="outline"
						className="w-fit text-neutral-200 border-neutral-200 hover:bg-neutral-900 hover:text-green-600 hover:border-green-600"
						onClick={() => {
							window.location.href = '/shop';
						}}
					>
						Get Started
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ExploreSection;
