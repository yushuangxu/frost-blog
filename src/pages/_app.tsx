

import Head from 'next/head'
import '@/common/styles/frame.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store'
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Head>
				<title>My Next App</title>
			</Head>
			<Component {...pageProps} />
		</Provider>
	)
}
export default MyApp