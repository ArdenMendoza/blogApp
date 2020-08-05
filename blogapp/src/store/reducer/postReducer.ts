import { Blog } from '../../model/model';
import { addBlogAction, searchBlogAction, selectBlogAction } from '../actions/blogActions'
export interface BlogAppState {
    blogs: Blog[];
    searchTerm?: string;
    selectedBlogPost?: Blog;
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
        },
        {
            blogPostId: 3,
            blogUserId: 3,
            bpTitle: 'Title 3',
            bpContent: 'Content 3',
            blogDateTime: '03/03/03'
        },
        {
            blogPostId: 4,
            blogUserId: 4,
            bpTitle: 'Title 4',
            bpContent: 'Content 4',
            blogDateTime: '04/04/04'
        },
        {
            blogPostId: 5,
            blogUserId: 5,
            bpTitle: 'Title 5',
            bpContent: 'Content 5',
            blogDateTime: '05/05/05'
        },
        {
            blogPostId: 6,
            blogUserId: 6,
            bpTitle: 'Title 6',
            bpContent: 'Content 6',
            blogDateTime: '06/06/06'
        },
        {
            blogPostId: 7,
            blogUserId: 7,
            bpTitle: 'Title 7',
            bpContent: 'Content 7',
            blogDateTime: '07/07/07'
        },
        {
            blogPostId: 8,
            blogUserId: 8,
            bpTitle: 'Title 8',
            bpContent: 'Content 8',
            blogDateTime: '08/08/08'
        }
    ]
}

export const blogReducer = (state: BlogAppState = initialState, action: addBlogAction | searchBlogAction | selectBlogAction): BlogAppState => {
    switch (action.type) {
        case 'ADD_BLOG': {
            return { ...state, blogs: [...state.blogs, action.payload] }
        }
        case 'SEARCH_BLOG':
            return { ...state, searchTerm: action.payload }
        case 'SELECT_BLOG':
            console.log('set to: ' + action.payload);
            return {...state, selectedBlogPost: action.payload}
        default:
            return state;
    }
}