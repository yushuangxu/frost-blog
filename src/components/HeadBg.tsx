import React from 'react';
import styles from './pc/headBg.module.scss'
interface bgProps {
    url: string,
    title: string
}

const HeadBg = (props: bgProps) => {
    // console.log(props?.url)
    return <div className={styles.bg} style={{ backgroundImage: `url(${props?.url})` }}>

        <div className={styles.titleWrap}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.line} />
        </div>
    </div>
}
export default HeadBg