import React, { useEffect, useState } from 'react'
import type { HeaderProps } from '../types/components';
import styles from './pc/head.module.scss';
import Image from 'next/image'
import Restraint from './Restraint';
import Link from 'next/link'
const nav = [
    {
        name: '首页',
        path: '/',

    },
    {
        name: '文章列表',
        path: '/article/list',
    },
    {
        name: '有关于我',
        path: '/about'
    }

]
const Header: React.FC<HeaderProps> = () => {
    return (
        <div className={styles.header_wrap}>
            <Restraint className={styles.wrap}>
                <Image width={50} height={50} src='/hei.png' alt="" />
                <ul className={styles.head_list}>
                    {nav.map((item, index) => (
                        <li key={index} className={styles.head_item}>
                            <Link href={item.path}>
                                <span className={styles.t}>{item.name}</span>
                            </Link>

                        </li>
                    ))}
                </ul>
            </Restraint>
        </div>
    )
}
export default Header