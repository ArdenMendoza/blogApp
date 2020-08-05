import { Blog } from '../../model/model';
import { searchBlogAction, selectBlogAction, editBlogAction, editBlogCancelAction, ILoadBlogsAction} from '../actions/blogActions'

export interface IBlogState {
    blogs: Blog[];
    searchTerm?: string;
    selectedBlogPost?: Blog;
    isOnEditMode?: boolean;
}

const initialState: IBlogState = {
    blogs: []
}

export const blogReducer = (state: IBlogState = initialState, action: searchBlogAction | selectBlogAction | editBlogAction | editBlogCancelAction | ILoadBlogsAction): IBlogState => {
    switch (action.type) {
        case 'LOAD_BLOGS':
            console.log('reducer received: ', action.payload);
            return {...state, blogs: action.payload}
        case 'SEARCH_BLOG':
            return { ...state, searchTerm: action.payload }
        case 'SELECT_BLOG':
            return { ...state, selectedBlogPost: action.payload, isOnEditMode: false }
        case 'EDIT_BLOG':
            return { ...state, selectedBlogPost: action.payload, isOnEditMode: true }
        case 'EDIT_BLOG_CANCEL':
            return { ...state, isOnEditMode: false }
        default:
            return state;
    }
}