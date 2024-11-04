type IconButtonProps = {
	children: React.ReactNode;
	onClick: () => void;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	ariaLabel?: string;
};

const IconButton = ({
	children,
	onClick,
	className = '',
	type = 'button',
	disabled = false,
	ariaLabel,
}: IconButtonProps) => {
	return (
		<button
			onClick={onClick}
			type={type}
			disabled={disabled}
			aria-label={ariaLabel}
			className={`hover:text-green-600 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
		>
			{children}
		</button>
	);
};

export default IconButton;
