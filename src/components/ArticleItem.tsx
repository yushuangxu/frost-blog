import styles from './pc/articleItem.module.scss'
import type { articleItemProps } from '@/types/components'
import Link from 'next/link'
import Image from 'next/image'
const ArticleItem = (props: articleItemProps) => {
	return <div className={styles.landingpage}>
		<section className={styles.outer}>
			<article>
				{props.data?.map((item: any, index: number) => (
					<div className={styles.articleInner} key={index}>
						<header className={styles.articleHeader}>
							<h2 className={styles.title}>{item.title}</h2>
							<div className={styles.timeWrap}>
								<Image src="/time.png" width={25} height={25} alt="" />
								<div>2022-03-04</div>
							</div>
							<div className={styles.desc}>{item.desc}</div>
							<p className={styles.look}>
								<Link href={{ pathname: '/article/info', query: { id: item.id } }} >
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

export default ArticleItem