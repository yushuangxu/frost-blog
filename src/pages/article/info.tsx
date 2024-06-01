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
import HeadBg from '@/components/HeadBg';
const Info: NextPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { info, isLoading } = useSelector(
        (state: RootState) => state.article,
    );
    const router = useRouter();
    useEffect(() => {
        const { id } = router?.query;
        if (!id) {
            return;
        }
        dispatch(fetchInfo({ id }))

    }, [dispatch, router?.query])

    return <Container className={styles.wrap}>
        <HeadBg title='文章详情' url='https://pic2.zhimg.com/80/v2-b561c5b432183290eff81f2035501e88_1440w.jpg' />
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