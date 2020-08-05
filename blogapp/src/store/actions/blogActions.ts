import { Blog } from '../../model/model';
import { ISimpleAction, IAction } from './actionTypes';

export interface IGetBlogsAction extends ISimpleAction { type: 'GET_BLOGS'; }
export const getBlogs = (): IGetBlogsAction => ({
    type: 'GET_BLOGS',
});

export interface ILoadBlogsAction extends IAction<Blog[]> { type: 'LOAD_BLOGS'; }
export const loadBlogs = (payload: Blog[]): ILoadBlogsAction => ({
    type: 'LOAD_BLOGS',
    payload
});

export type addBlogAction = { type: 'ADD_BLOG', payload: {title: string, content: string}; }
export const addBlog = (payload: {title: string, content: string}): addBlogAction => ({
    type: 'ADD_BLOG',
    payload
});

export type searchBlogAction = { type: 'SEARCH_BLOG', payload: string }
export const searchBlog = (payload: string): searchBlogAction => ({
    type: 'SEARCH_BLOG',
    payload
});

export type selectBlogAction = { type: 'SELECT_BLOG', payload: Blog }
export const selectBlog = (payload: Blog): selectBlogAction => ({
    type: 'SELECT_BLOG',
    payload
});

export type editBlogAction = { type: 'EDIT_BLOG', payload: Blog }
export const editBlog = (payload: Blog): editBlogAction => ({
    type: 'EDIT_BLOG',
    payload
});

export type editBlogCancelAction = { type: 'EDIT_BLOG_CANCEL' }
export const editBlogCancel = (): editBlogCancelAction => ({
    type: 'EDIT_BLOG_CANCEL',
});
