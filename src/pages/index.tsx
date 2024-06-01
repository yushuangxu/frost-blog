import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../../../styles/Home.module.scss'
import styles from '../styles/Home.module.scss'
// import Header from '../components/Header'
import Link from 'next/link'
// import { getList } from '@/models/article'
import { fetchArticle, } from '@/store/feafures/article'
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/store'
import Item from '@/components/ArticleItem'
import Pagination from '@/components/Pagination'
import Typewriter from '@/components/Typewriter'
import * as util from '@/utils/util';
const Home: NextPage = () => {


	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		getList1()
	}, [])
	const getList1 = () => {
		dispatch(fetchArticle({ page: 1, pageSize: 10 }))
	}

	const { article, isLoading } = useSelector(
		(state: RootState) => state.article,
	);

	const { list, count } = article || {}

	const goList = () => {

		util.scrollTo(500)
	}

	return (
		<div>
			{/* <Header /> */}
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
								src="https://source.zhwangart.com/hexo/themes/ocean/ocean.mp4"></video>
							<div className={styles.videoOverlay}></div>
						</div>
						<div className={styles.videoInner}>
							<h1 className={styles.textCenter}>
								<Link href='/'>
									<span className={styles.name}>梧桐灯</span>
								</Link>
							</h1>
							<div className={styles.textCenter}>
								<Typewriter text='我不喜欢风,但我对这海没有意见' />
							</div>
							<div className={styles.imgWrap}>
								<Image width={50} height={50} src='/bai.png' alt="" />
							</div>
						</div>
						<div onClick={goList} className={styles.mouse}></div>
					</div>
				</section>

				<div style={{ height: 100 }} />
				<Item data={list} />
				<Pagination pageSize={10} current={1} total={count ?? 0} />
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
