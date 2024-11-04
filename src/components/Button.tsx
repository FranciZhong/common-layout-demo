'use client';

import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'default' | 'outline' | 'ghost';
	size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ className, variant = 'default', size = 'md', children, ...props },
		ref
	) => {
		return (
			<button
				ref={ref}
				className={cn(
					'rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2',
					variant === 'default' &&
						'bg-neutral-900 text-neutral-200 hover:bg-neutral-800',
					variant === 'outline' &&
						'border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-100',
					variant === 'ghost' && 'text-neutral-900 hover:bg-neutral-100',
					size === 'sm' && 'px-4 py-1.5 text-sm',
					size === 'md' && 'px-6 py-2',
					size === 'lg' && 'px-8 py-3 text-lg',
					className
				)}
				{...props}
			>
				{children}
			</button>
		);
	}
);

Button.displayName = 'Button';

export default Button;
