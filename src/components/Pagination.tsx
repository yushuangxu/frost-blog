import React from "react";
import type { paginationProps } from '../types/components';
import Restraint from "./Restraint";
import styles from './pc/pagination.module.scss'
import Link from "next/link";
const Pagination: React.FC<paginationProps> = ({ current = 1, pageSize, total }) => {
    return <div>
        <Restraint>
            <div className={styles.pageWrap}>

                <div>
                    {current !== 1 ?
                        <Link href='/'>上一页</Link> :
                        <span style={{ color: '#999' }}>上一页</span>
                    }
                </div>

                <Pager current={current} total={total} pageSize={pageSize} />
                {
                    total > pageSize && <div>
                        <Link href='/'>下一页</Link>
                    </div>
                }
            </div>
        </Restraint>
    </div>
}
const Pager: React.FC<paginationProps> = ({ current, pageSize, total }) => {
    const centerSize: number = 5; // 中间按钮组的页码数
    const jumpSize: number = 5; // 快捷翻页的页数
    const totalPage = total / pageSize || 1
    const centerPages = []
    let centerPage = current;

    if (current > totalPage - 3) {
        centerPage = totalPage - 3
    }
    if (current < 4) {
        centerPage = 4
    }
    if (totalPage <= centerSize + 2) {
        for (let i = 2; i < totalPage; i++) {
            centerPages.push(i)
        }
    } else {
        for (let i = centerPage - 2; i <= centerPage + 2; i++) {
            centerPages.push(i)
        }
    }
    return <ul className={styles.pager}>
        <li className="number">1</li>
        {total > centerSize + 2 && current >= centerSize &&
            <li className="more left">•••</li>}
        {centerPages.map((page, index) => (

            <li className="number" key={index}>
                {page}
            </li>

        ))
        }
        {
            totalPage > centerSize + 2 && current <= totalPage - centerSize + 1 &&
            <li className="more right">•••</li>}
        {
            totalPage !== 1 && <li className="number">{totalPage}</li>
        }
    </ul>
}
export default Pagination;