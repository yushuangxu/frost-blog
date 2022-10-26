import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import styles from './pc/info.module.scss'
import Restraint from '@/components/Restraint';
import MarkdownIt from "markdown-it";
import matter from "gray-matter";
import { useRouter } from 'next/router'
import { fetchInfo, } from '@/store/feafures/article'
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/store'
import { Spin, } from 'antd';
import Container from '@/components/Container'
const md = new MarkdownIt();
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
        <Spin spinning={!!isLoading}>
            <Restraint>
                <div className={styles.titleWrap}>
                    <div className={styles.title}>文章详情</div>
                    <div className={styles.line} />
                </div>
                {info?.content && <div className={styles.contentWrap}
                    dangerouslySetInnerHTML={{
                        __html: md?.render(info?.content),
                    }}
                ></div>}
            </Restraint >
        </Spin>
    </Container >
}
export default Info