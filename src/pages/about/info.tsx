import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import styles from './pc/info.module.scss'
import Restraint from '@/components/Restraint';
import MarkdownIt from "markdown-it";

import Container from '@/components/Container'
const md = new MarkdownIt();
const Info: NextPage = () => {

    return <Container className={styles.wrap}>
        <div className={styles.bg}>
            <div>1111</div>
        </div>
        <Restraint className={styles.aboutWrap}>

            <div className={styles.title}>
                <h1>About me</h1>
            </div>
            <ul className={styles.desc1}>
                <li>我在虚实之间,</li>
                <li>我就未曾远离过,我是梧桐灯,这个名字没有特别的含义,它只是记录了我在时间中沉沦、游荡、起伏、消亡...</li>
            </ul>
            <ul className={styles.desc1}>
                <li>摄影艺术,</li>
                <li>我喜欢的不是每一张相片留下来的回忆,是为了记录按下快门那一瞬间的美好、感动、苦恼、希望...</li>
            </ul>
            <ul className={styles.desc1}>
                <li>浩瀚无垠,</li>
                <li>音乐是没有边界的,它可以包罗世界的一切,乃至于浩瀚的宇宙都为它沉浮,它能诉尽世间的光彩、绚烂、靓丽、,也能诉尽世间的苦难、战争、死亡、,更能把我从这世间剥离带我飞向遥远的火星...</li>
            </ul>
            <div>

            </div>
        </Restraint>
    </Container >
}
export default Info