/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['localhost:3000'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '',
				pathname: '',
			},
		],
	},
};

export default nextConfig;
