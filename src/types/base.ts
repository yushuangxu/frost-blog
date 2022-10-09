/*
 * @Author: foxfly
 * @Contact: 617903352@qq.com
 * @Date: 2022-08-18 14:37:02
 * @Description: 全局基础类型声明
 */
import React from 'react';

/** 基础参数类型 */
export type BaseType = {
    /** 样式名称 */
    className?: string,
    /** 内联样式 */
    style?: object,
    /** 接受任何有效的 ReactNode */
    children?: React.ReactNode,
}

/** TKD 基础类型 */
type tkdBase = {
    t: string,
    k: string,
    d: string,
}
/** 全局TKD配置数据 格式类型 */
export type tkdType = {
    [key: string]: tkdBase
}

/** model app scrollInfo类型 */
export type scrollInfoType = {
    /** 滚动条距离顶部距离 */
    scrollTop: number,
    /** 可视区域高度 */
    clientHeight: number,
    /** 滚动条可滚动高度，即页面总高度 */
    scrollHeight: number,
    /**
     * 滚动方向
     *
     * 可选值：
     * 0: 不变;
     * 1: 向下;
     * -1: 向上;
     */
    scrollDirection: 0 | 1 | -1;
}

/** 用户信息类型 */
export type UserInfoType = {
    id: number,
    name: string,
    phone: string,
    status: number,
}

/**
 * 将general迁移此处
 */
export type ApiRes<T> = {
    code: number;
    msg: string;
    data: T;
}
export type BINARY = {
    name: string;
    type: string;
    data: Blob;
}
export type OSS_RES = {
    path: string;
    url: string;
}
export type OSS_UPLOAD = {
    accessid: string;
    callback: string;
    policy: string;
    signature: string;
    host: string;
    dir: string;
}
export type CTX = {
    isServer: boolean;
    store: any;
    req: any;
    res: any;
}
export type RootState = any;
