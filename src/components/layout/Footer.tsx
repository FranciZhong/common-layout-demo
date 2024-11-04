const Footer = () => {
	return (
		<footer className="bg-neutral-900 text-white mt-20">
			<div className="max-w-7xl mx-auto px-6 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold">Company Name</h3>
						<p className="text-neutral-400 text-sm">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore.
						</p>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold">Quick Links</h3>
						<ul className="space-y-2">
							{['About Us', 'Products', 'Contact', 'Blog'].map((link) => (
								<li key={link}>
									<a
										href="#"
										className="text-neutral-400 hover:text-white text-sm"
									>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Customer Service */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold">Customer Service</h3>
						<ul className="space-y-2">
							{['FAQ', 'Shipping', 'Returns', 'Track Order'].map((link) => (
								<li key={link}>
									<a
										href="#"
										className="text-neutral-400 hover:text-white text-sm"
									>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Newsletter */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold">Stay Connected</h3>
						<p className="text-neutral-400 text-sm">
							Subscribe to our newsletter
						</p>
						<div className="flex gap-2">
							<input
								type="email"
								placeholder="Enter your email"
								className="bg-neutral-800 px-4 py-2 rounded-md text-sm flex-grow"
							/>
							<button className="bg-white text-black px-4 py-2 rounded-md text-sm hover:bg-neutral-200">
								Subscribe
							</button>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-neutral-400 text-sm">
						© {new Date().getFullYear()} Company Name. All rights reserved.
					</p>
					<div className="flex gap-6">
						{['Facebook', 'Twitter', 'Instagram', 'TikTok'].map((social) => (
							<a
								key={social}
								href="#"
								className="text-neutral-400 hover:text-white text-sm"
							>
								{social}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
