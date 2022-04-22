import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import ReactPlayer from 'react-player'

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
	useEffect(() => {

	})
	const renderContent = () => {
		return <div className={styles.landingpage}>
			<section className={styles.outer}>
				<article>
					<div className={styles.articleInner}>
						<header className={styles.articleHeader}>
							<h2>可适用于企业的Hexo主题</h2>
							<div className={styles.timeWrap}>
								<img src="/time.png" className={styles.time} alt="" />
								<p>2022-03-04</p>
							</div>
							<p className={styles.desc}>Ocean 是基于 Hexo 默认主题 landscape 的功能，设计的一款支持移动设备的主题，并且集成了 Gitalk 与 Valine 评论功能。 由于我是一枚 Designer 而不是 Coder，所以 欢迎指正！</p>
							<p className={styles.look}><a href="">阅读全文...</a></p>
						</header>
					</div>
				</article>
			</section>
		</div >
	}
	return (
		<div>
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
								src=" http://source.zhwangart.com/hexo/themes/ocean/ocean.mp4"></video>
							<div className={styles.videoOverlay}></div>
						</div>
						<div className={styles.videoInner}>
							<h1 className={styles.textCenter}>
								<Link href='/'>
									<a >
										余霜序
									</a>
								</Link>
							</h1>
							<p className={styles.textCenter}>我不喜欢风,但我对这海没有意见</p>
							<div className={styles.imgWrap}>
								<img className={styles.img} src='/bai.png' alt="" />
							</div>
						</div>

					</div>
				</section>
				{renderContent()}
			</main>
			<aside className={styles.sidebar}>
				<img className={styles.img} src="/hei.png" alt="" />
				<div className={styles.home}>
					{IconList.map((item, index) => (
						<div key={index} className={styles.iconWrap}>
							<a className="iconfont" dangerouslySetInnerHTML={{ __html: item.icon }}></a>
							<a>{item.name}</a>
						</div>
					))}

				</div>
			</aside>
		</div>
	)
}

export default Home
