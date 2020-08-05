import { filter, mergeMap, map, switchMap } from 'rxjs/operators';
import { EMPTY, from, merge, Observable, concat } from 'rxjs';
import { IBlogAppEpic } from "../store";
import { getBlogs, IGetBlogsAction, loadBlogs, IAddBlogAction, updateBlog, IUpdateBlogAction, editBlogCancel, deleteBlog, IDeleteBlogAction } from "../actions/blogActions";
import api from '../api';
import { StateObservable } from 'redux-observable';

export const FetchBlogsEpic: IBlogAppEpic<IGetBlogsAction> = (action$, state$) =>
    action$.pipe(filter(a => a.type === 'GET_BLOGS'),
        mergeMap(action => {
            return api.blog().fetchAll()
                .then(res => {
                    return loadBlogs(res.data);
                });
        })
    )

export const AddBlogEpic: IBlogAppEpic<IAddBlogAction> = (action$, state$) =>
    action$.pipe(filter(a => a.type === 'ADD_BLOG'),
        mergeMap(action => {
            const d = new Date();
            const time = d.toLocaleTimeString();
            return api.blog().add({
                blogPostId: 0,
                blogUserId: 1,
                blogDateTime: time,
                bpTitle: action.payload.title,
                bpContent: action.payload.content,
            })
                .then(res => {
                    return getBlogs();
                });
        })
    )


export const UpdateBlogEpic: IBlogAppEpic<IUpdateBlogAction> = (action$, state$) =>
    action$.pipe(filter(a => a.type === 'UPDATE_BLOG'),
        switchMap(action => {
            const d = new Date();
            const time = d.toLocaleTimeString();
            return api.blog().update(action.payload.postId, {
                blogPostId: 0,
                blogUserId: 1,
                blogDateTime: time,
                bpTitle: action.payload.title,
                bpContent: action.payload.content,
            }).then((res: any) => {
                if (res.status === 204) return getBlogs();
            }).then(r => {
                return editBlogCancel();
            });
        })
    )

export const DeleteBlogEpic: IBlogAppEpic<IDeleteBlogAction> = (action$, state$) =>
    action$.pipe(filter(a => a.type === 'DELETE_BLOG'),
        switchMap(action => {
            const d = new Date();
            const time = d.toLocaleTimeString();
            return api.blog().delete(action.payload).then((res: any) => {
                console.log(res.status);
                if (res.status === 200) return getBlogs();
            }).then(r => {
                return editBlogCancel();
            });
        })
    )