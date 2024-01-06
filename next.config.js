/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				port: "",
				pathname: "/divjslgco/image/upload/v1698465629/codeit/**",
			},
		],
	},
};

module.exports = nextConfig;
