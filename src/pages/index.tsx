import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../../../styles/Home.module.scss'
import styles from '../styles/Home.module.scss'
import Header from '../../components/Header'
import Link from 'next/link'
import { getList } from '@/models/article'
import { fetchArticle, } from '@/store/feafures/article'
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/store'
const Home: NextPage = () => {
	const [IconList, setIconList] = useState([
		{
			name: '首页',
			icon: '&#xe612;',
			path: '/'
		},
		{
			name: '归档',
			icon: '&#xe600;',
			path: '/archives/index',
		},
		{
			name: '相册',
			icon: '&#x100bb;',
			path: '/photo/index'
		}
	]);
	const [data, setData] = useState<any>([])
	const [loadd, setLoadd] = useState(true)
	const { article /* , isLoading */ } = useSelector(
		(state: RootState) => state.article,
	);
	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		getList1()

	}, [])
	const getList1 = () => {
		dispatch(fetchArticle({ page: 1, pageSize: 1 }))
	}

	const renderContent = () => {
		return <div className={styles.landingpage}>
			<section className={styles.outer}>
				<article>
					{article?.map((item: any, index: number) => (
						<div className={styles.articleInner} key={index}>
							<header className={styles.articleHeader}>
								<h2>{item.title}</h2>
								<div className={styles.timeWrap}>
									<Image src="/time.png" width={25} height={25} alt="" />
									<p>2022-03-04</p>
								</div>
								<p className={styles.desc}>{item.desc}</p>
								<p className={styles.look}>
									<Link href="/article/info">
										<a>阅读全文...</a>
									</Link>
								</p>
							</header>
						</div>
					))}
				</article>
			</section>
		</div >
	}
	return (
		<div>
			<Header />
			<main className={styles.container}>
				<section className={styles.videoWrap}>
					<div className={styles.video}>
						<div className={styles.videoFrame}>
							<img src="http://source.zhwangart.com/hexo/themes/ocean/overlay-hero.png" alt="" />
						</div>
						<div className={styles.videoMedia}>
							<video
								muted
								loop={true}
								autoPlay={true}
								src="https://houlang.mylifed.cn/seal.mp4"></video>
							<div className={styles.videoOverlay}></div>
						</div>
						<div className={styles.videoInner}>
							<h1 className={styles.textCenter}>
								<Link href='/'>
									<a >
										梧桐灯
									</a>
								</Link>
							</h1>
							<p className={styles.textCenter}>我不喜欢风,但我对这海没有意见</p>
							<div className={styles.imgWrap}>
								<Image width={50} height={50} src='/bai.png' alt="" />
							</div>
						</div>

					</div>
				</section>
				{renderContent()}
			</main>
			{/* <aside className={styles.sidebar}>
				<Image width={50} height={50} className={styles.img} src="/hei.png" alt="" />
				<div className={styles.home}>
					{IconList.map((item, index) => (
						<div key={index} className={styles.iconWrap}>
							<a>{item.name}</a>
						</div>
					))}

				</div>
			</aside> */}
		</div>
	)
}

export default Home
