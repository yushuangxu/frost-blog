import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { fetchArticle, } from '@/store/feafures/article'
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/store'
import Item from '@/components/ArticleItem'
import Container from '@/components/Container'
import styles from './pc/list.module.scss'
import Restraint from '@/components/Restraint';
import HeadBg from '@/components/HeadBg'
import { Spin, } from 'antd';
const List: NextPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchArticle({ page: 1, pageSize: 10 }))
    }, [dispatch])
    const { article, isLoading } = useSelector(
        (state: RootState) => state.article,
    );
    const { list } = article || {}
    return <Container className={styles.wrap}>
        <HeadBg title='文章列表' url='https://qiniu.sukoshi.xyz/src/images/68686407_p0.jpg' />

        <Spin spinning={!!isLoading}>
            <div style={{ height: 50 }} />
            <Item data={list} />
        </Spin>
    </Container>
}
export default List