/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

const path = require("path");
module.exports = {
	webpack: (config, options) => {

		config.resolve.alias["@"] = path.resolve(__dirname);
		return config;
	}
};
module.exports = nextConfig;
