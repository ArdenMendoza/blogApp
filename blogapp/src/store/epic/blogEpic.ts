import { filter, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { IBlogAppEpic } from "../store";
import { IGetBlogsAction, loadBlogs } from "../actions/blogActions";
import api from '../api';

export const FetchBlogsEpic: IBlogAppEpic<IGetBlogsAction> = (action$, state$) =>
    action$.pipe(filter(a => a.type === 'GET_BLOGS'),
        mergeMap(action => {
            // fetch('http://localhost:5000/api/BlogPosts')
            //     .then(response => response.json())
            //     .then(res => {
            //         console.log(res);
            //     });
            return api.blog().fetchAll()
                .then(res => {
                    console.log(res.data);

                    return loadBlogs(res.data);
                });
            return EMPTY;
        })
    )

// const getBlogsResponseData = (data: any): Blog[] => {
//     const blogs: Blog[] = [];
//     if (data.list) {
//         data.list.forEach((w: any) => {
//             // blogs.push({});
//         })
//     }
//     return blogs;
// }