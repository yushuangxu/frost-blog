/** @type {import('next').NextConfig} */
const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const withSass = require("@zeit/next-sass");
const nextConfig = {
	reactStrictMode: true,
};

const path = require("path");
const withImages = require('next-images');
module.exports = {
	webpack: (config, options) => {

		config.resolve.alias["@"] = path.resolve(__dirname);
		return config;
	},
	images: { domains: ['localhost'] },
	withCSS: ({
		cssModules: false,
		cssLoaderOptions: {
			importLoaders: 1,
			localIdentName: "[local]___[hash:base64:5]",
		},
		...withLess(
			withSass({
				lessLoaderOptions: {
					javascriptEnabled: true,
					localIdentName: "[local]___[hash:base64:5]",
				},
			})
		),
	}),

};
module.exports = nextConfig;
