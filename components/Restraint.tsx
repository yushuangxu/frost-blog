/*
 * @Author: foxfly
 * @Contact: 617903352@qq.com
 * @Date: 2022-08-16 11:04:04
 * @Description: 受约束组件
 */
import React, { useEffect, useRef, useState } from 'react';


import type { RestraintProps } from '../src/types/components';

import styles from './pc/restraint.module.scss';

const Restraint: React.FC<RestraintProps> = ({
    children, className = '', style = {}, wrapRef
}) => {



    const dom = useRef(null);
    useEffect(() => wrapRef?.(dom.current), []);

    return (
        <div
            ref={dom}
            className={`${styles.restraintContainer} ${className}`}
            style={{ ...style, }}
        >{children}</div>
    );
};

export default Restraint;
