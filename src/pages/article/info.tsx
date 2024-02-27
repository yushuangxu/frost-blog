import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import styles from './pc/info.module.scss'
import Restraint from '@/components/Restraint';

import matter from "gray-matter";
import { useRouter } from 'next/router'
import { fetchInfo, } from '@/store/feafures/article'
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/store'
import { Spin, } from 'antd';
import Container from '@/components/Container'
import Markdown from '@/components/Markdown'
const Info: NextPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { info, isLoading } = useSelector(
        (state: RootState) => state.article,
    );
    const router = useRouter();
    useEffect(() => {

        const { id } = router?.query;
        dispatch(fetchInfo({ id }))

    }, [router?.query.id])
    console.log(router?.query.id)
    return <Container className={styles.wrap}>
        <div className={styles.bg}>
            <div className={styles.titleWrap}>
                <div className={styles.title}>文章详情</div>
                <div className={styles.line} />
            </div>
        </div>
        <Spin spinning={!!isLoading}>
            <div style={{ height: 60 }} />
            <Restraint>

                {info?.content && <div className={styles.contentWrap}>
                    <Markdown markdownContent={info?.content} />
                </div>}
            </Restraint >
        </Spin>
    </Container >
}
export default Info