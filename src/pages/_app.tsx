

import Head from 'next/head'
import '@/common/styles/frame.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store'
import Layout from '@/components/Layout'
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Head>
				<title>My Next App</title>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}
export default MyApp