import Image from 'next/image';

type CategoryCardProps = {
	image: string;
	category: string;
};

const CategoryCard = ({ image, category }: CategoryCardProps) => {
	return (
		<div className="relative w-full aspect-square overflow-hidden shadow-sm hover:shadow-md">
			<Image
				src={image}
				alt={category}
				fill
				className="object-cover transition-transform duration-300 hover:scale-110"
			/>
			<div className="absolute top-4 left-4 text-xl font-medium text-neutral-800">
				{category}
			</div>
		</div>
	);
};

export default CategoryCard;
