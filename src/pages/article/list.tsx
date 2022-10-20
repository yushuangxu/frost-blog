import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { fetchArticle, } from '@/store/feafures/article'
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/store'
import Item from '@/components/ArticleItem'
import Container from '@/components/Container'
import styles from './pc/list.module.scss'
import { Spin, } from 'antd';
const List: NextPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchArticle({ page: 1, pageSize: 1 }))
    }, [])

    const { article, isLoading } = useSelector(
        (state: RootState) => state.article,
    );

    return <Container className={styles.wrap}>
        <Spin spinning={!!isLoading}>
            <Item data={article} />
        </Spin>
    </Container>
}
export default List