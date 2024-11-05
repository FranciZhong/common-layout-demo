'use client';

import React from 'react';

type PlanFeature = {
	included: boolean;
	text: string;
};

type Plan = {
	name: string;
	price: number;
	period: string;
	description: string;
	features: PlanFeature[];
	highlighted?: boolean;
};

const plans: Plan[] = [
	{
		name: 'Basic',
		price: 9.99,
		period: 'month',
		description: 'Perfect for getting started',
		features: [
			{ included: true, text: 'Basic features access' },
			{ included: true, text: '2 team members' },
			{ included: true, text: '10GB storage' },
			{ included: false, text: 'Priority support' },
			{ included: false, text: 'Custom branding' },
		],
	},
	{
		name: 'Pro',
		price: 29.99,
		period: 'month',
		description: 'Best for growing teams',
		features: [
			{ included: true, text: 'All Basic features' },
			{ included: true, text: '5 team members' },
			{ included: true, text: '50GB storage' },
			{ included: true, text: 'Priority support' },
			{ included: false, text: 'Custom branding' },
		],
		highlighted: true,
	},
	{
		name: 'Enterprise',
		price: 99.99,
		period: 'month',
		description: 'For large organizations',
		features: [
			{ included: true, text: 'All Pro features' },
			{ included: true, text: 'Unlimited team members' },
			{ included: true, text: 'Unlimited storage' },
			{ included: true, text: 'Priority support' },
			{ included: true, text: 'Custom branding' },
		],
	},
];

const SubscriptionPlans: React.FC = () => {
	return (
		<div className="py-16 px-6">
			<div className="text-center mb-12">
				<h2 className="text-4xl font-medium mb-4">
					Simple, transparent pricing
				</h2>
				<p className="text-neutral-600">
					Choose the plan that&apos;s right for you
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
				{plans.map((plan) => (
					<div
						key={plan.name}
						className={`rounded-2xl p-8 ${
							plan.highlighted
								? 'border-2 border-green-600 shadow-xl'
								: 'border border-neutral-200'
						}`}
					>
						<div className="mb-8">
							<h3 className="text-2xl font-medium mb-2">{plan.name}</h3>
							<p className="text-neutral-600 mb-4">{plan.description}</p>
							<div className="flex items-baseline">
								<span className="text-4xl font-bold">${plan.price}</span>
								<span className="text-neutral-600 ml-2">/{plan.period}</span>
							</div>
						</div>
						<ul className="space-y-4 mb-8">
							{plan.features.map((feature, index) => (
								<li key={index} className="flex items-center">
									{feature.included ? (
										<svg
											className="w-5 h-5 text-green-600 mr-3"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
									) : (
										<svg
											className="w-5 h-5 text-neutral-400 mr-3"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									)}
									<span
										className={
											feature.included ? 'text-neutral-800' : 'text-neutral-400'
										}
									>
										{feature.text}
									</span>
								</li>
							))}
						</ul>
						<button
							className={`w-full py-3 px-6 rounded-lg font-medium ${
								plan.highlighted
									? 'bg-green-600 text-white hover:bg-green-700'
									: 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200'
							}`}
						>
							Get started
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default SubscriptionPlans;
