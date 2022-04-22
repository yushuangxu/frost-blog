/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
}

module.exports = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.svg$/,
			include: path.resolve(__dirname, './static/svg'),
			loader: 'svg-sprite-loader'
		})
		return config
	}
};
module.exports = nextConfig
