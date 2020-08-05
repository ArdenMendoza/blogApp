import { filter, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { IBlogAppEpic } from "../store";
import { IGetBlogsAction, loadBlogs } from "../actions/blogActions";
import api from '../api';

export const FetchBlogsEpic: IBlogAppEpic<IGetBlogsAction> = (action$, state$) =>
    action$.pipe(filter(a => a.type === 'GET_BLOGS'),
        mergeMap(action => {
            return api.blog().fetchAll()
                .then(res => {
                    return loadBlogs(res.data);
                });
            // return EMPTY;
        })
    )