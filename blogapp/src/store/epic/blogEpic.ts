import { filter, mergeMap } from 'rxjs/operators';
import { IBlogAppEpic } from "../store";
import { IGetBlogsAction } from "../actions/blogActions";
// import { SEACapitals } from '../../resources/cityListPerCountry';
// import { ICityWeatherState } from '../reducers/weatherReducer';
import api from '../api'

export const FetchBlogsEpic: IBlogAppEpic<IGetBlogsAction> = (action$, state$) =>
    action$.pipe(filter(a => a.type === 'GET_BLOGS'),
        mergeMap(action => {
            return api.blog().fetchAll().then(res => {
                console.log(res);
            });
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