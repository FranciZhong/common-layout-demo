import CategoryCard from '@/components/CategoryCard';
import ExploreSection from '@/components/ExploreSection';
import FeatureCard, { FeatureCardProps } from '@/components/FeatureCard';
import MarqueeStrip from '@/components/MarqueeStrip';
import PrinciplesSection from '@/components/PrinciplesSection';
import ProductCard from '@/components/ProductCard';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import Image from 'next/image';

const companies = Array.from({ length: 10 }, (_, index) => (
	<div
		key={index}
		className="w-40 font-mono font-semibold text-xl text-neutral-500"
	>
		Company {index + 1}
	</div>
));

const features: FeatureCardProps[] = [
	{
		image: '/images/feature1.jpg',
		title: 'Feature 1',
		description: 'Description 1',
	},
	{
		image: '/images/feature2.jpg',
		title: 'Feature 2',
		description:
			'Description 2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	},
	{
		image: '/images/feature3.jpg',
		title: 'Feature 3',
	},
];

const categories = [
	{
		image: '/images/category1.webp',
		category: 'Category 1',
	},
	{
		image: '/images/category2.webp',
		category: 'Category 2',
	},
	{
		image: '/images/category3.jpg',
		category: 'Category 3',
	},
	{
		image: '/images/category4.avif',
		category: 'Category 4',
	},
];

const bestSellers = [
	{
		id: 1,
		name: 'Product 1',
		price: 99.99,
		description:
			'Description 1  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
		image: '/images/product1.jpg',
	},
	{
		id: 2,
		name: 'Product 2',
		price: 149.99,
		image: '/images/product2.jpg',
	},
	{
		id: 3,
		name: 'Product 3',
		price: 199.99,
		image: '/images/product3.webp',
	},
	{
		id: 4,
		name: 'Product 4',
		price: 249.99,
		image: '/images/product4.jpeg',
	},
	{
		id: 5,
		name: 'Product 5',
		price: 299.99,
		image: '/images/product5.jpeg',
	},
];

const Home: React.FC = () => {
	return (
		<div>
			<div className="bg-green-600 h-[100vh] flex justify-center items-center">
				<Image
					src="/images/hero.jpg"
					alt="Hero"
					fill
					className="object-cover"
				/>
			</div>
			{/* trusted by */}
			<div className="h-40 bg-white flex flex-col justify-center">
				<MarqueeStrip>{companies}</MarqueeStrip>
			</div>
			<div className="px-6 py-2 grid grid-cols-1 md:grid-cols-3 gap-4">
				{features.map((feature, index) => (
					<FeatureCard key={index} {...feature} />
				))}
			</div>
			<div className="px-6 py-12">
				<h2 className="text-4xl font-medium mb-8">Best Sellers</h2>
				<div className="relative">
					<div className="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide pb-4">
						{bestSellers.map((product) => (
							<div
								key={product.id}
								className="snap-start flex-none w-[320px] md:w-[400px]"
							>
								<ProductCard {...product} />
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="px-6 py-40">
				<ExploreSection />
			</div>
			<PrinciplesSection />
			<div className="flex flex-col gap-8 px-6 py-4 mt-20">
				<h2 className="text-4xl font-medium">Shop by category</h2>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
					{categories.map((category, index) => (
						<CategoryCard key={index} {...category} />
					))}
				</div>
			</div>
			<SubscriptionPlans />
		</div>
	);
};

export default Home;
