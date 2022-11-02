import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { fetchArticle, } from '@/store/feafures/article'
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/store'
import Item from '@/components/ArticleItem'
import Container from '@/components/Container'
import styles from './pc/list.module.scss'
import Restraint from '@/components/Restraint';
import { Spin, } from 'antd';
const List: NextPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        getList()
    }, [])
    const getList = () => {
        dispatch(fetchArticle({ page: 1, pageSize: 1 }))
    }
    const { article, isLoading } = useSelector(
        (state: RootState) => state.article,
    );
    const { list } = article || {}
    return <Container className={styles.wrap}>
        <Spin spinning={!!isLoading}>
            <Restraint>
                <h1 className={styles.t}>文章列表</h1>
            </Restraint>
            <Item data={list} />
        </Spin>
    </Container>
}
export default List