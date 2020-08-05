import { Blog } from '../../model/model';

export type addBlogAction = { type: 'ADD_BLOG', payload: Blog; }

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
