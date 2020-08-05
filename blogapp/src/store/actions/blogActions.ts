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

export interface IAddBlogAction extends IAction<{title: string, content: string}> { type: 'ADD_BLOG'; }
export const addBlog = (payload: {title: string, content: string}): IAddBlogAction => ({
    type: 'ADD_BLOG',
    payload
});

export interface IUpdateBlogAction extends IAction<{postId: number, title: string, content: string}> { type: 'UPDATE_BLOG'; }
export const updateBlog = (payload: {postId: number, title: string, content: string}): IUpdateBlogAction => ({
    type: 'UPDATE_BLOG',
    payload
});

export interface IDeleteBlogAction extends IAction<number> { type: 'DELETE_BLOG'; }
export const deleteBlog = (payload: number): IDeleteBlogAction => ({
    type: 'DELETE_BLOG',
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

export type editBlogAction = { type: 'EDIT_BLOG_BUTTON_CLICKED', payload: Blog }
export const editBlogButtonClicked = (payload: Blog): editBlogAction => ({
    type: 'EDIT_BLOG_BUTTON_CLICKED',
    payload
});

export type editBlogCancelAction = { type: 'EDIT_BLOG_CANCEL' }
export const editBlogCancel = (): editBlogCancelAction => ({
    type: 'EDIT_BLOG_CANCEL',
});
