'use client';

import Image from 'next/image';

interface ProductCardProps {
	image: string;
	name: string;
	price: number;
	description?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
	image,
	name,
	price,
	description,
}) => {
	return (
		<div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
			<div className="relative h-[320px]">
				<Image
					src={image}
					alt={name}
					fill
					className="object-cover transition-transform duration-500 hover:scale-105"
				/>
			</div>
			<div className="p-4 h-[120px] flex flex-col justify-between">
				<div>
					<h3 className="font-medium text-lg">{name}</h3>
					{description && (
						<p className="text-sm text-neutral-500 line-clamp-1 break-words">
							{description}
						</p>
					)}
				</div>
				<p className="text-lg font-bold">${price}</p>
			</div>
		</div>
	);
};

export default ProductCard;
