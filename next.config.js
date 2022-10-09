/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['tailwind.com', 'images.unsplash.com'],
	},
};

module.exports = nextConfig;
