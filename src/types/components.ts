/*
 * @Author: foxfly
 * @Contact: 617903352@qq.com
 * @Date: 2022-08-16 10:43:32
 * @Description: components 类型申明文件
 */
import React from 'react';
import * as Base from './base';

/** Restraint 组件的props类型 */
export type RestraintProps = {
    wrapRef?: (param: React.Ref<any>) => void
} & Base.BaseType;

/** Container 组件的props类型 */
export type ContainerProps = {
    /** children组件是否需要Restraint组件包裹 */
    isRestraint?: boolean,
    /** 网页标题，优先级高于title */
    hightTitle?: string,
    /** 网页标题 */
    title?: string,
    /** seo 描述 */
    desc?: string,
    /** seo 关键词 */
    keywords?: string,
    /** 是否沉浸式 */
    steep?: boolean
} & Base.BaseType;

/** Anim 组件的props类型 */
export type AnimProps = {
    /** 是否禁用动画,默认：false */
    disableAnim?: boolean,
    /** 设置包裹整个组件元素名,默认：div，且会强制改成block标签 */
    tag?: any,
    /**
     * 入场动画
     * 可选值:
     * - animType为fade时，需为 fadeIn bounceIn 系列样式
     * - animType为scale时， 需为 blockScaleIn
     * - 自定义样式
     */
    inAnim?: 'fadeIn' | 'bounceIn' | 'blockScaleIn' | string,
    /**
     * 出场动画
     * 可选值:
     * - animType为fade时，需为 fadeOut 系列样式
     * - animType为scale时， 需为 blockScaleOut
     * - 自定义样式
     */
    outAnim?: 'fadeOut' | 'blockScaleOut' | string,
    /** 子组件 className */
    childClassName?: string,
    /** 子组件 style */
    childStyle?: object,
    /**
     * 子组件 动画延迟时间步长，单位：ms
     * 优先级低于 childStyle
     */
    animDelayStep?: number,
    /** 是否自身动画，默认：false */
    isSelfAnim?: boolean,
    /**
     * 动画类型，默认：fade
     *
     * 可选值:
     * - fade: 出/入场或者反弹，
     *      出/入场动画，需inAnim  outAnim为 fadeIn fadeOut系列样式
     *      反弹动画，需inAnim  outAnim为 bounceIn fadeOut系列样式
     * - scale: 逐渐放大/缩小动画，需inAnim  outAnim为 blockScaleIn  blockScaleOut
     */
    animType?: 'fade' | 'scale',
} & Base.BaseType;



/** Header 组件的props类型 */
export type HeaderProps = {
    /** 是否沉浸式 */
    steep?: boolean
}

/** Touch 组件的props类型 */
export type TouchProps = {
    /** 点击开始 */
    onTouchStart?: (param: any) => void,
    /** 点击结束 */
    onTouchEnd?: (param: any) => void,
    /** 点击 */
    onClick?: () => void,
} & Base.BaseType;

/**
 * 监听页面滚动组件type
 */
type sub = (params: Base.scrollInfoType) => void;
type unSub = (index: number) => void;
export type ScrollType = {
    listening: (sub | undefined)[];
    handle: () => void;
    subscription: (fn: sub) => [unSub, number];
    unSubscription: unSub;
}

/** footer data item类型 */
type FooterDataItem = {
    /** 文案 */
    label: string,
    /** 链接地址，有值表示链接，无值表示文案 */
    to: string,
    /**
     * 链接类型
     *
     * 可选值：
     * link 使用Link标签  默认
     * a 使用a标签
     */
    type?: 'link' | 'a',
    /**
     * 页面打开方式 (type==a时有效)
     *
     * 可选值：
     * _self  自身标签页打开  默认
     * _blank 新标签页打开
     */
    target?: '_self' | '_blank'
}
/** footer data类型 */
export type FooterData = {
    label: string,
    data: FooterDataItem[]
}
export type articleItemProps = {
    data: (string | number | {
        name: string,
        desc: string,
        id: number
    })[];
}