import service from '../api/axios';

export const list = (data) => service({
    url: '/article/list',
    method: 'get',
    data: data,
});
export const add = (data) => service({
    url: '/article/add',
    method: 'post',
    data: data
});