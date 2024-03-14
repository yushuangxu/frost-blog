import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import styles from './pc/list.module.scss'
import Restraint from '@/components/Restraint';
import { fetchExtract } from '@/store/feafures/extract'
import MarkdownIt from "markdown-it";
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/store'
import Container from '@/components/Container'
import { Spin, } from 'antd';
const Info: NextPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        getList()
    }, [])
    const getList = () => {
        dispatch(fetchExtract({ page: 1, pageSize: 10 }))
    }
    const { extract, isLoading } = useSelector(
        (state: RootState) => state.extract,
    );
    const { list } = extract || {}
    console.log(list)
    return <Container className={styles.wrap}>
        <div className={styles.bg}>
            <div>1111</div>
        </div>
        <Restraint className={styles.extractWrap}>

            <div className={styles.title}>
                <h1>书摘</h1>
            </div>
            <Spin spinning={!!isLoading}>
                <div className={styles.itemWrap}>
                    {list?.map((item, index) => {
                       return <Item data={item} key={index} />
                    })}
                </div>
            </Spin>
        </Restraint>
    </Container >
}
const Item = (data: any) => {
    
    return <div className={styles.item}>
        <div className={styles.desc}>
            {data?.data?.desc}
        </div>
        <div className={styles.author}>{data?.data?.author}</div>
    </div>
}
export default Info