import { Blog } from '../../model/model'
export interface BlogAppState {
    blogs: Blog[];
}

const initialState: BlogAppState = {
    blogs: [
        {
            blogPostId: 1,
            blogUserId: 1,
            bpTitle: 'Title 1',
            bpContent: 'Content 1',
            blogDateTime: '01/01/01'
        },
        {
            blogPostId: 2,
            blogUserId: 2,
            bpTitle: 'Title 2',
            bpContent: 'Content 2',
            blogDateTime: '02/02/02'
        }
    ]
}

type addBlogAction = { type: 'ADD_BLOG', payload: Blog }

export const blogReducer = (state: BlogAppState = initialState, action: addBlogAction) => {
    switch (action.type) {
        case 'ADD_BLOG': {
            return { ...state, blogs: [...state.blogs, action.payload] }
        }
        default:
            return state;
    }
}